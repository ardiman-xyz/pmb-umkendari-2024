interface HeadingProps {
    title: string;
    description?: string;
}

export const Heading = ({ title, description }: HeadingProps) => {
    return (
        <div className="">
            <h1 className="text-2xl font-bold capitalize">{title}</h1>
            <p className="text-muted-foreground text-sm mt-1">{description}</p>
        </div>
    );
};
