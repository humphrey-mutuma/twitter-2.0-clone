import { DotsHorizontalIcon } from "@heroicons/react/outline";

const TreadingItem = ({ title, location, numberOfTweets }) => {
  return (
    <section className="flex justify-between p-2 pl-5 pr-5 hover:bg-gray-200  cursor-pointer ">
      <div>
        <p className="text-sm text-gray-600">Treading in {location}</p>
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-gray-600">{numberOfTweets} Tweets</p>
      </div>
      <DotsHorizontalIcon className="tweetIcons text-gray-600 hover:bg-blue-100 hover:text-blue-500" />
    </section>
  );
};

export default TreadingItem;
