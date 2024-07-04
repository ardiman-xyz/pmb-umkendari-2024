<?php

namespace App\Repositories;

use App\Models\Faculty as Model;

class FacultyRepository
{

    public function findAll()
    {
        return Model::with('departments.tuitionFees')->orderBy("created_at", "desc")->get();
    }

    public function save(string $name, string $lug)
    {
        return Model::create([
           "name" => $name,
           "slug" => $lug
        ]);
    }

    public function findById(int $id)
    {
        return Model::find($id);
    }

    public function findByName(string $name)
    {
        return Model::where("name", $name)->first();
    }


    public function getByIdWithRelations(int $id)
    {
        return Model::with('departments.tuitionFees')->findOrFail($id);
    }

    public function getFacultiesWithDepartmentsAndTuitionFees()
    {
        return Model::with(['departments' => function ($query) {
            $query->with(['tuitionFees' => function ($query) {
                $query->whereIn('degree_level', ['sarjana', 'pascasarjana']);
            }]);
        }])->get()->map(function ($faculty) {
            $faculty->sarjana_departments = $faculty->departments->filter(function ($department) {
                return $department->tuitionFees && $department->tuitionFees->degree_level === 'sarjana';
            });
            $faculty->pascasarjana_departments = $faculty->departments->filter(function ($department) {
                return $department->tuitionFees && $department->tuitionFees->degree_level === 'pascasarjana';
            });
            unset($faculty->departments);
            return $faculty;
        });
    }

    public function getDepartmentByGraduate()
    {
        return Model::with(['departments' => function ($query) {
            $query->whereHas('tuitionFees', function ($subQuery) {
                $subQuery->where('degree_level', 'pascasarjana');
            })->with(['tuitionFees' => function ($subQuery) {
                $subQuery->where('degree_level', 'pascasarjana');
            }]);
        }])
            ->get()
            ->map(function ($faculty) {
                $faculty->setRelation('departments', $faculty->departments->filter(function ($department) {
                    return $department->tuitionFees !== null;
                }));
                return $faculty;
            });
    }
}
