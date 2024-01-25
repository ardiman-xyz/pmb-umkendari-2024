import ApplicationLogo from "@/Components/ApplicationLogo";

const Footer = () => {
    return (
        <footer className="flex flex-col items-center bg-[#862119] text-center text-white">
            <div className="container px-6 pt-6">
                <div className="mb-6 flex justify-center">
                    <a
                        href="https://www.facebook.com/umkdi/"
                        target="_blank"
                        type="button"
                        className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto h-full w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                    </a>

                    <a
                        href="https://twitter.com/Umkendari_"
                        target="_blank"
                        type="button"
                        className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 flex items-center justify-center"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            id="svg5"
                            x="0px"
                            y="0px"
                            viewBox="0 0 1668.56 1221.19"
                            className="fill-white"
                        >
                            <g
                                id="layer1"
                                transform="translate(52.390088,-25.058597)"
                            >
                                <path
                                    id="path1009"
                                    d="M283.94,167.31l386.39,516.64L281.5,1104h87.51l340.42-367.76L984.48,1104h297.8L874.15,558.3l361.92-390.99  h-87.51l-313.51,338.7l-253.31-338.7H283.94z M412.63,231.77h136.81l604.13,807.76h-136.81L412.63,231.77z"
                                ></path>
                            </g>
                        </svg>
                    </a>

                    <a
                        href="https://www.instagram.com/umkendari_/"
                        type="button"
                        target="_blank"
                        className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="mx-auto h-full w-4"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                        </svg>
                    </a>

                    <a
                        href="https://www.instagram.com/umkendari_/"
                        target="_blank"
                        type="button"
                        className="m-1 h-9 w-9 rounded-full border-2 border-white uppercase leading-normal text-white transition duration-150 ease-in-out hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 flex items-center justify-center"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                    >
                        <img
                            src="/images/tik-tok.png"
                            className="w-[20px] h-[20px]"
                            alt="tik tok"
                        />
                    </a>
                </div>
            </div>

            <div className="w-full p-4 text-center bg-red-900">
                © 2024 Copyright:
                <a
                    className="text-whitehite ml-2"
                    href="https://tw-elements.com/"
                >
                    ADMISI UM KENDARI
                </a>
            </div>
        </footer>
    );
};

export default Footer;
