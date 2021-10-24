import {
  ArrowNarrowLeftIcon,
  CalendarIcon,
  EmojiHappyIcon,
  GiftIcon,
  PhotographIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import Modal from "../../components/Modal";
import Sidebar from "../../components/Sidebar";
import Widgets from "../../components/Widgets";

const Comments = () => {
  const router = useRouter();
  const { data: session } = useSession();

  return (
    <main className="max-w-[1280px]  mx-auto">
      <main className=" grid grid-cols-10 bg-white  ">
        {/* Sidebar */}
        <section className="sticky top-0  hidden sm:inline-grid sm:col-span-2 lg:col-span-2 max-h-screen">
          <Sidebar />
        </section>

        {/* Comments section */}
        <section className="border  col-span-10 sm:col-span-8  lg:col-span-5">
          <nav
            onClick={() => router.push("/")}
            className="sticky top-0 z-10 bg-white flex  items-center h-[3rem] border-b-[1px] cursor-pointer"
          >
            <ArrowNarrowLeftIcon className="h-6 w-6 ml-4 " />
            <h1 className="font-bold ml-4 text-lg">Tweets</h1>
          </nav>
          {/* the comments input */}
          {/* tweets section */}
          <section className="w-full flex  border-b-[1px]">
            <img
              className="h-12 w-12 rounded-full m-4 object-cover"
              src={session?.user.image}
              alt=""
            />
            <div className="flex-1 mr-4">
              <form>
                <textarea
                  required
                  placeholder="What's happening? "
                  rows="1"
                  className="p-3 text-xl w-full focus:outline-none  focus:border-transparent scrollbar-hide"
                  type="text"
                />

                {/* show the selected image preview if available and remove on click event */}
                  <div>
                    <img
                      className="w-full object-contain cursor-pointer rounded-2xl"
                      alt=""
                    />
                  </div>

                <section className="flex items-center justify-between ">
                  <div className="flex items-center ">
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

                  {/* tweet  */}
                  <section className="flex items-center justify-between">
                    <span className="feedTweetSpan cursor-pointer ">
                      {/* pick files when user clicks the icon */}
                      <span className="flex items-center">
                        <PhotographIcon className=" w-8 h-8 text-blue-500" />{" "}
                        <span> No file Selected</span>
                      </span>
                      {/* hidden input for file picking */}
                      <input type="file" hidden />
                    </span>

                    {/* disable and change button color if both input fields are empty */}
                    <button
                      className={`bg-blue-300 hover:bg-blue-500 h-10 w-20 text-sm  m-2 text-white p-2 rounded-full`}
                    >
                      Tweet
                    </button>
                  </section>
                </section>
              </form>
            </div>
          </section>

          <p>Them comments come here ...</p>
        </section>

        {/* Widgets */}
        <section className=" hidden  lg:inline-grid  lg:col-span-3 sticky top-0 max-h-screen overflow-y-scroll scrollbar-hide ">
          <Widgets />
        </section>
        <Modal />
      </main>{" "}
    </main>
  );
};

export default Comments;
