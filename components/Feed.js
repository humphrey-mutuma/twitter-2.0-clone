import {
  SparklesIcon,
  PhotographIcon,
  GiftIcon,
  EmojiHappyIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import TweetCard from "./TweetCard";

const Feed = () => {
  return (
    <main>
      <nav className="sticky top-0 z-50 bg-white flex justify-between items-center h-[3rem] border-b-[1px] cursor-pointer">
        <h1 className="font-bold ml-4 text-lg">Home</h1>
        <SparklesIcon className="h-6 w-6 mr-4 " />
      </nav>
      {/* tweets section */}
      <section className="w-full flex  border-b-[1px]">
        <img
          className="h-12 w-12 rounded-full m-4 object-cover"
          src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t1.6435-9/39700554_189956408607706_3333751201383579648_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=09cbfe&_nc_eui2=AeGsHiqUtc6rhY_8qkhFd_CADsuEpp0tV7sOy4SmnS1XuzWsDZ-MDY-eDp_Ugr8KX-dF3OBwZ1uIIWz-3Jku2-RW&_nc_ohc=zqLWdK0KzkgAX9dQNYA&_nc_pt=5&_nc_ht=scontent.fnbo9-1.fna&oh=813ab2a5c2b58fb29999df2114c95a8a&oe=619741AD"
          alt=""
        />
        <div className="flex-1 mr-4">
          <form>
            <textarea
              placeholder="What's happening? "
              rows="1"
              className="p-3 text-xl w-full focus:outline-none  focus:border-transparent scrollbar-hide"
              type="text"
            />

            <section className="flex items-center justify-between border-t-[1px]">
              <div className="flex items-center ">
                <span className="feedTweetSpan">
                  <PhotographIcon className="feedTweetIcons " />
                </span>
                <span className="feedTweetSpan">
                  <GiftIcon className="feedTweetIcons " />
                </span>
                <span className="feedTweetSpan">
                  <EmojiHappyIcon className="feedTweetIcons " />
                </span>
                <span className="feedTweetSpan">
                  <CalendarIcon className="feedTweetIcons " />
                </span>
              </div>
              <button className=" bg-blue-500 h-10 w-20 text-sm  m-2 text-white p-2 rounded-full hover:bg-blue-600">
                Tweet
              </button>
            </section>
          </form>
        </div>
      </section>

      {/* feet tweets */}
      <section>
        <TweetCard
          tweetText="Just spoke with someone that quit learning how to code because they
            didn't know JavaScript after 2 months. Quit doing this to yourselves!
            Learning how to program takes time but it does become easier!
            FireHundred points symbol"
          tweetImage="https://cdn.pixabay.com/photo/2020/04/24/15/58/white-water-lily-5087465__340.jpg"
        />
        <TweetCard
          tweetText="Just spoke with someone that quit learning how to code because they
            didn't know JavaScript after 2 months. Quit doing this to yourselves!
            Learning how to program takes time but it does become easier!
            FireHundred points symbol"
          tweetImage="https://cdn.pixabay.com/photo/2020/04/24/15/58/white-water-lily-5087465__340.jpg"
        />
        <TweetCard
          tweetText="Just spoke with someone that quit learning how to code because they
            didn't know JavaScript after 2 months. Quit doing this to yourselves!
            Learning how to program takes time but it does become easier!
            FireHundred points symbol"
          tweetImage="https://cdn.pixabay.com/photo/2020/04/24/15/58/white-water-lily-5087465__340.jpg"
        />
        <TweetCard
          tweetText="Just spoke with someone that quit learning how to code because they
            didn't know JavaScript after 2 months. Quit doing this to yourselves!
            Learning how to program takes time but it does become easier!
            FireHundred points symbol"
          tweetImage="https://cdn.pixabay.com/photo/2020/04/24/15/58/white-water-lily-5087465__340.jpg"
        />
      </section>
    </main>
  );
};

export default Feed;
