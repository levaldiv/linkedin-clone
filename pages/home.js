import Image from "next/image";
import HeaderLink from "../components/HeaderLink";
import ExploreIcon from "@mui/icons-material/Explore";

function Home() {
  return (
    <div>
      <header className="flex justify-around items-center py-4">
        {/* Left Section */}
        <div className="relative w-36 h-10">
          <Image src="https://rb.gy/vtbzlp" layout="fill" objectFit="contain" />
        </div>

        {/* Right section (icons) */}
        <div className="flex items-center sm:divide-x divide-gray-300">
          {/* contains links */}
          <div className="hidden sm:flex space-x-8 pr-4">
            {/* <HeaderLink /> */}
            <HeaderLink Icon={ExploreIcon} text="Discover" />
            <HeaderLink />
            <HeaderLink />
            <HeaderLink />
          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;
