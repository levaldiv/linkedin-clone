import { Avatar } from "@mui/material";
import Image from "next/image";
import BookmarkOutlinedIcon from "@mui/icons-material/BookmarkOutlined";
import AddRoundedIcon from "@mui/icons-material/AddRounded";
import { signOut, useSession } from "next-auth/react";

function Sidebar() {
  const { data: session } = useSession();

  return (
    // prevents the sidebar from shrinking
    <div className="space-y-2 min-w-max max-w-lg">
      {/* About you (left side) */}
      <div className="aboutMeContainer">
        <div className="relative w-full h-14">
          <Image src="https://rb.gy/i26zak" layout="fill" priority />
        </div>
        
        <Avatar
          onClick={signOut}
          // using optional chaining to aviod errors (when user is not auth'd it will give an error)
          // fetching user data from session
          src={session?.user?.image}
          className="!h-14 !w-14 !border-2 !absolute !top-4 !cursor-pointer"
        />
        
        <div className="mt-5 py-4 space-x-0.5">
          <h4 className="hover:underline decoration-purple-700 underline-offset-1 cursor-pointer">
            {session?.user?.name}
          </h4>
          <p className="text-black/60 dark:text-white/75 text-sm">
            {session?.user?.email}
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

          <div className="sidebarButton flex items-center space-x-1.5">
            <BookmarkOutlinedIcon className="!-ml-1" />
            <h4 className="dark:text-white font-medium">My items</h4>
          </div>
        </div>
      </div>

      {/* Bottom group */}
      <div className="discoverMore">
        <p className="sidebarLink">Groups</p>

        <div className="flex items-center justify-between">
          <p className="sidebarLink">Events</p>
          <AddRoundedIcon className="!h-5" />
        </div>

        <p className="sidebarLink">Followed Hashtags</p>

        <div className="sidebarButton text-center">
          <h4 className="dark:text-white font-medium text-sm">Discover More</h4>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
