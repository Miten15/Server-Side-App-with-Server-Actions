import Image from "next/image";

function Hero() {
  return (
    <header className="bg-hero bg-center bg-cover bg-no-repeat py-20 sm:p-16 px-8 flex justify-end lg:items-center max-lg:flex-col w-full sm:gap-16 gap-0">
      <div className="flex-1 flex flex-col gap-10 items-end">
        <Image
          src="https://i.postimg.cc/bDWC7V8W/logo.png"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-5xl lg:max-w-lg font-bold leading-[120%] text-right" style={{ color: "#c20018" }}>
          Explore The <span className="text-red">Diverse Realms</span> of Anime Magic
        </h1>
      </div>
    </header>
  );
}

export default Hero;
