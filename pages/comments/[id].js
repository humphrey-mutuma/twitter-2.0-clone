import { ArrowNarrowLeftIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
import Modal from "../../components/Modal";
import Sidebar from "../../components/Sidebar";
import Widgets from "../../components/Widgets";

const Comments = () => {
  const router = useRouter();

  return (
    <main className="max-w-[1280px]  mx-auto">
      <main className=" grid grid-cols-10 bg-white  ">
        {/* Sidebar */}
        <section className="sticky top-0  hidden sm:inline-grid sm:col-span-2 lg:col-span-2 max-h-screen">
          <Sidebar />
        </section>

        {/* feed */}
        <section className="border  col-span-10 sm:col-span-8  lg:col-span-5">
          <nav
            onClick={() => router.push("/")}
            className="sticky top-0 z-10 bg-white flex  items-center h-[3rem] border-b-[1px] cursor-pointer"
          >
            <ArrowNarrowLeftIcon className="h-6 w-6 ml-4 " />
            <h1 className="font-bold ml-4 text-lg">Tweets</h1>
          </nav>
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
