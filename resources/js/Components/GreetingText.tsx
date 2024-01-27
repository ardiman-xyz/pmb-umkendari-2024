import { useEffect, useState } from "react";

const languages = {
    id: "Halo",
    en: "Hello",
    ko: "Annyeonghaseyo",
    zh: "Nǐ hǎo",
    hi: "Namaste",
    ms: "Helo",
} as any;

const GreetingText = () => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            const keys = Object.keys(languages);

            setIndex((index) => (index + 1 >= keys.length ? 0 : index + 1));
        }, 2000);

        return () => clearInterval(interval);
    }, []);
    return (
        <h1 className="text-white font-semibold text-2xl">
            {languages[Object.keys(languages)[index]]}
        </h1>
    );
};

export default GreetingText;
