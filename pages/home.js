import Image from "next/image";

function Home() {
  return (
    <div>
      <header>
        <div className="relative w-36 h-10">
          <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
        </div>
      </header>
    </div>
  );
}

export default Home;
