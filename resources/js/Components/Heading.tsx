interface HeadingProps {
    title: string;
    description?: string;
}

export const Heading = ({ title, description }: HeadingProps) => {
    return (
        <div className="">
            <h1 className="text-2xl font-bold ">{title}</h1>
            <p className="text-muted-foreground text-sm">{description}</p>
        </div>
    );
};
