import { Avatar } from "@mui/material";
import Image from "next/image";
import { signOut, useSession } from "next-auth/react";

function Sidebar() {
  return (
    // prevents the sidebar from shrinking
    <div className="space-y-2 min-w-max max-w-lg">
      {/* About you (left side) */}
      <div className="bg-white dark:bg-[#1D2226] rounded-lg overflow-hidden relative flex flex-col items-center text-center border border-gray-300 dark:border-none">
        <div className="relative w-full h-14">
          <Image src="https://rb.gy/i26zak" layout="fill" priority />
        </div>
        <Avatar
          //   onClick={signOut}
          src="https://cdn3.iconfinder.com/data/icons/avatars-round-flat/33/man5-512.png"
          className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"
        />
        <div className="mt-5 py-4 space-x-0.5">
          <h4 className="hover:underline decoration-purple-700 underline-offset-1 cursor-pointer">
            Luis Valdivia
          </h4>
          <p className="text-black/60 dark:text-white/75 text-sm">
            Thisismyemail@gmail.com
          </p>
        </div>

        <div className="hidden md:inline text-left dark:text-white/75 text-sm">
          <div className="font-medium sidebarButton space-y-0.5">
            
            <div className="flex justify-between space-x-2">
              <h4>Who viewed your profile</h4>
              <span className="text-blue-500">321</span>
            </div>
            
            <div className="flex justify-between space-x-2">
              <h4>Views of your post</h4>
              <span className="text-blue-500">1,892</span>
            </div>
          </div>

          <div className="sidebarButton">
            <h4 className="leading-4 text-xs">
              Access exclusive tools & insights
            </h4>
            
            <h4 className="dark:text-white font-medium">
              <span className="w-3 h-3 bg-gradient-to-tr from-yellow-700 to-yellow-200 inline-block rounded-sm mr-1" />{" "}
              Try Premium for free
            </h4>
          </div>
        </div>
      </div>
      {/* Bottom */}
    </div>
  );
}

export default Sidebar;
