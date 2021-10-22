import SidebarItems from "./SidebarItems";
import { HomeIcon } from "@heroicons/react/solid";
import {
  HashtagIcon,
  BellIcon,
  InboxIcon,
  BookmarkIcon,
  ViewListIcon,
  UserIcon,
  DotsCircleHorizontalIcon,
  DotsHorizontalIcon,
  PlusIcon,
  LockClosedIcon,
} from "@heroicons/react/outline";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/router";

const Sidebar = () => {
  const router = useRouter();
  const { data: session } = useSession();
  return (
    <div className=" flex flex-col items-center mx-auto md:grid">
      <div className="p-2 mt-2 ">
        <img
          onClick={() => router.push("/")}
          className="h-8 w-8 cursor-pointer"
          src="https://cdn.pixabay.com/photo/2014/04/03/11/53/twitter-312464_960_720.png"
          alt=""
        />
      </div>

      <SidebarItems Icon={HomeIcon} title="Home" />
      <SidebarItems Icon={HashtagIcon} title="Explore" />
      <SidebarItems Icon={BellIcon} title="Notification" />
      <SidebarItems Icon={InboxIcon} title="Messages" />
      <SidebarItems Icon={BookmarkIcon} title="Bookmark" />
      <SidebarItems Icon={ViewListIcon} title="List" />
      <SidebarItems Icon={UserIcon} title="Profile" />
      <SidebarItems Icon={DotsCircleHorizontalIcon} title="More" />

      <div className="p-2 mt-2 w-full mx-auto">
        <button className="hidden cursor-not-allowed md:inline-grid bg-blue-100 p-3 text-white mt-3 rounded-full w-full uppercase hover:bg-blue-200">
          Tweet
        </button>
        <button className="bg-blue-100 h-11 w-11 cursor-not-allowed md:hidden text-white  rounded-full hover:bg-blue-200 flex items-center justify-center">
          <PlusIcon className="h-6 w-6 " />
        </button>
      </div>
      <br />
      {/* mini user account */}

      {session ? (
        <div
          onClick={() => signOut()}
          className="flex items-center p-2 mb-4 w-full cursor-pointer hover:bg-gray-200 rounded-full"
        >
          <img
            className="h-10 w-10 rounded-full object-cover"
            src={session?.user.image}
            alt=""
          />
          <p className=" hidden md:inline pl-2 pr-2 text-sm">
            <span className="font-bold">{session?.user.name}</span> <br /> @
            {session?.user.username}
          </p>
          <DotsHorizontalIcon className="hidden md:inline-grid h-6 w-6 " />
        </div>
      ) : (
        <div className="p-2 mb-3 w-full mx-auto">
          <button
            onClick={() => signIn()}
            className="hidden md:inline-grid bg-blue-500 p-3 text-white mt-3 rounded-full w-full uppercase hover:bg-blue-600"
          >
            Sign In
          </button>
          <button
            onClick={() => signIn()}
            className="bg-blue-500 h-11 w-11 md:hidden text-white  rounded-full hover:bg-blue-600 flex items-center justify-center"
          >
            <LockClosedIcon className="h-6 w-6 " />
          </button>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
