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
} from "@heroicons/react/outline";
import { signOut } from "next-auth/react";

const Sidebar = () => {
  return (
    <div className=" flex flex-col items-center mx-auto md:grid">
      <div className="p-2 mt-2 ">
        <img
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
        <button className="hidden md:inline-grid bg-blue-500 p-3 text-white mt-3 rounded-full w-full uppercase hover:bg-blue-600">
          Tweet
        </button>
        <button className="bg-blue-500 h-11 w-11 md:hidden text-white  rounded-full hover:bg-blue-600 flex items-center justify-center">
          <PlusIcon className="h-6 w-6 " />
        </button>
      </div>
      <br />
      {/* mini user account */}
      <div
        onClick={() => signOut()}
        className="flex items-center p-2 mb-4 w-full cursor-pointer hover:bg-gray-200 rounded-full"
      >
        <img
          className="h-10 w-10 rounded-full object-cover"
          src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t1.6435-9/39700554_189956408607706_3333751201383579648_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGsHiqUtc6rhY_8qkhFd_CADsuEpp0tV7sOy4SmnS1XuzWsDZ-MDY-eDp_Ugr8KX-dF3OBwZ1uIIWz-3Jku2-RW&_nc_ohc=zqLWdK0KzkgAX9dQNYA&_nc_pt=5&_nc_ht=scontent.fnbo9-1.fna&oh=813ab2a5c2b58fb29999df2114c95a8a&oe=619741AD"
          alt=""
        />
        <p className=" hidden md:inline pl-2 pr-2 text-sm">
          <span className="font-bold">Humphrey Mutuma</span> <br />{" "}
          @humphreymutuma
        </p>
        <DotsHorizontalIcon className="hidden md:inline-grid h-6 w-6 " />
      </div>
    </div>
  );
};

export default Sidebar;
