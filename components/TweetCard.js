import {
  DotsHorizontalIcon,
  ChatIcon,
  HeartIcon,
  UploadIcon,
  SwitchVerticalIcon,
} from "@heroicons/react/outline";

const TweetCard = ({ tweetImage, tweetText }) => {
  return (
    <section className="flex hover:bg-gray-100 cursor-pointer border-b-[1px]">
      <img
        className="h-10 w-10 m-4 rounded-full object-cover"
        src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t1.6435-9/39700554_189956408607706_3333751201383579648_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGsHiqUtc6rhY_8qkhFd_CADsuEpp0tV7sOy4SmnS1XuzWsDZ-MDY-eDp_Ugr8KX-dF3OBwZ1uIIWz-3Jku2-RW&_nc_ohc=zqLWdK0KzkgAX9dQNYA&_nc_pt=5&_nc_ht=scontent.fnbo9-1.fna&oh=813ab2a5c2b58fb29999df2114c95a8a&oe=619741AD"
        alt=""
      />
      <div className="flex-1 p-2">
        {/* tweet user info */}
        <header className="flex items-center justify-between ">
          <p>
            <span className="font-bold hover:underline">Humphrey Mutuma</span>
            <span className="text-gray-400 ml-1 mr-1">@HumphreyMutuma7</span>
            {" . "}
            <span>5m</span>
          </p>
          <DotsHorizontalIcon className="tweetIcons hover:bg-blue-100 text-gray-600 hover:text-blue-500" />
        </header>

        {/* text */}
        <main className="mt-1 mb-2">
          <p className="text-gray-800">{tweetText}</p>
          <img className="rounded-lg mt-1" src={tweetImage} alt="" srcset="" />
        </main>

        {/* tweet icons */}
        <footer className=" flex items-center justify-between pr-4">
          <span className="flex items-center text-gray-500">
            <ChatIcon className="tweetIcons hover:bg-blue-100  hover:text-blue-500" />{" "}
            <span className="text-sm">52</span>
          </span>
          <span className="flex items-center text-gray-500">
            <SwitchVerticalIcon className="tweetIcons hover:bg-blue-100 hover:text-blue-500" />
            <span className="text-sm">355</span>
          </span>
          <span className="flex items-center text-gray-500">
            <HeartIcon className="tweetIcons hover:bg-red-100 hover:text-red-500" />{" "}
            <span className="text-sm">76</span>
          </span>
          <span className="flex items-center text-gray-500">
            <UploadIcon className="tweetIcons hover:bg-green-100 hover:text-green-500" />{" "}
            <span className="text-sm">544</span>
          </span>
        </footer>
      </div>
    </section>
  );
};

export default TweetCard;
