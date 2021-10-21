import { SearchIcon, CogIcon } from "@heroicons/react/outline";
import { useEffect, useState } from "react";
import TreadingItem from "./TreadingItem";
import WhoToFollow from "./WhoToFollow";
import faker from "faker";

const Widgets = () => {
  const [peopleToFollow, setPeopleToFollow] = useState([]);
  useEffect(() => {
    const suggestions = [...Array(3)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));
    setPeopleToFollow(suggestions);
  }, []);

  return (
    <section className="pl-3 pr-3  bg-white">
      <section className="bg-white  sticky top-0 z-10">
        <div className=" w-full  flex items-center bg-white pt-2 pb-2">
          <SearchIcon className="w-5 h-5 absolute ml-3  text-gray-500" />
          <input
            className=" bg-gray-200 border-[1px]  p-3 pl-10 flex-1 appearance-none focus:border-[1px] rounded-full w-full focus:outline-none focus:bg-white focus:border-blue-500"
            type="text"
            placeholder="Search Twitter"
          />
        </div>
      </section>

      {/* treads section */}
      <br />
      <section className="bg-gray-100 w-full rounded-2xl">
        <div className="pl-5 pr-5 pt-2 pb-2 flex justify-between">
          <h2 className="font-semibold text-lg ">Treads For you</h2>
          <CogIcon className="tweetIcons text-gray-600 hover:bg-blue-100 hover:text-blue-500" />
        </div>

        <TreadingItem
          title="Nextjs"
          location="Worldwide"
          numberOfTweets="125.4K"
        />
        <TreadingItem
          title="#Reactjs"
          location="Kenya"
          numberOfTweets="125.4K"
        />
        <TreadingItem
          title="Tailwindcss"
          location="Nairobi"
          numberOfTweets="125.4K"
        />
        <TreadingItem
          title="#Python"
          location="Worldwide"
          numberOfTweets="125.4K"
        />
        <TreadingItem
          title="Javascript"
          location="Kenya"
          numberOfTweets="125.4K"
        />
        <button className="w-full text-left text-blue-500 p-2 pl-5 rounded-b-2xl cursor-pointer hover:bg-gray-200">
          Show More
        </button>
      </section>
      {/* Who to follow section */}
      <br />
      <section className="bg-gray-100 w-full rounded-2xl">
        <div className="pl-5 pr-5 pt-2 pb-2 flex justify-between">
          <h2 className="font-semibold text-lg ">Who to follow</h2>
        </div>

        {peopleToFollow.map((personToFollow) => (
          <WhoToFollow
            key={personToFollow.id}
            userToFollowImage={personToFollow.avatar}
            userToFollowName={personToFollow.name}
            userToFollowUsername={personToFollow.username}
          />
        ))}

        <button className="w-full text-left text-blue-500 p-2 pl-5 rounded-b-2xl cursor-pointer hover:bg-gray-200">
          Show More
        </button>
      </section>

      <section className="p-5">
        <p>
          <span className="text-sm text-gray-400 hover:underline cursor-pointer pr-2">
            Terms of Service
          </span>{" "}
          <span className="text-sm text-gray-400 hover:underline cursor-pointer pr-2">
            Privacy Policy
          </span>{" "}
          <span className="text-sm text-gray-400 hover:underline cursor-pointer pr-2">
            Cookie Policy
          </span>{" "}
          <span className="text-sm text-gray-400 hover:underline cursor-pointer pr-2">
            Ads info
          </span>{" "}
          <span className="text-sm text-gray-400 hover:underline cursor-pointer pr-2">
            More...
          </span>{" "}
          <span className="text-sm text-gray-400">© 2021 Twitter, Inc.</span>
        </p>
      </section>
      <br />
      <br />
    </section>
  );
};

export default Widgets;
