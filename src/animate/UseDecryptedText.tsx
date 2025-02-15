import DecryptedText from "./DecryptedText";

const Loader = () => {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-black relative">
            <div className="absolute text-white sm:text-3xl font-poppins font-extrabold text-7xl">
                <DecryptedText
                    speed={120}
                    className="font-poppins font-extrabold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl z-10"
                    encryptedClassName="font-poppins text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
                    text="Cargando..."
                    animateOn="view"
                    revealDirection="start"
                    sequential={true}
                />
            </div>
        </div>
    );
};

export default Loader;
