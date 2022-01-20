import Image from "next/image";

function Home() {
  return (
    <div>
      <header>
        <div className="relative w-36 h-10">
          <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
          <h1 className="text-3xl font-bold underline">Hello world!</h1>
        </div>
      </header>
    </div>
  );
}

export default Home;
