import {
  DotsHorizontalIcon,
  ChatIcon,
  HeartIcon,
  UploadIcon,
  SwitchVerticalIcon,
} from "@heroicons/react/outline";

const TweetCard = ({ tweetImage, tweetText, userImage, username, name }) => {
  return (
    <section className="flex hover:bg-gray-100 cursor-pointer border-b-[1px]">
      <img
        className="h-10 w-10 m-4 rounded-full object-cover"
        src={userImage}
        alt=""
      />
      <div className="flex-1 p-2">
        {/* tweet user info */}
        <header className="flex items-center justify-between ">
          <p>
            <span className="font-bold hover:underline">{name}</span>
            <span className="text-gray-400 ml-1 mr-1">@{username}</span>
            {" . "}
            <span>5m</span>
          </p>
          <DotsHorizontalIcon className="tweetIcons hover:bg-blue-100 text-gray-600 hover:text-blue-500" />
        </header>

        {/* text */}
        <main className="mt-1 mb-2">
          <p className="text-gray-800">{tweetText}</p>
          <img className="rounded-lg mt-1" src={tweetImage} alt="" />
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
