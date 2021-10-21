import Head from "next/head";
import Feed from "../components/Feed";
import Modal from "../components/Modal";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home() {
  return (
    <div className="max-w-[1280px]  mx-auto">
      <Head>
        <title>twitter 2.0 clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" grid grid-cols-10 bg-white  ">
        {/* Sidebar */}
        <section className="sticky top-0  hidden sm:inline-grid sm:col-span-2 lg:col-span-2 max-h-screen">
          <Sidebar />
        </section>

        {/* feed */}
        <section className="border  col-span-10 sm:col-span-8  lg:col-span-5">
          <Feed />
        </section>

        {/* Widgets */}
        <section className=" hidden  lg:inline-grid  lg:col-span-3 sticky top-0 max-h-screen overflow-y-scroll scrollbar-hide ">
          <Widgets />
        </section>
        <Modal />
      </main>
    </div>
  );
}
