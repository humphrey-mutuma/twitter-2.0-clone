import Head from "next/head";
import Feed from "../components/Feed";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";

export default function Home() {
  return (
    <div className="max-w-[1280px]  mx-auto">
      <Head>
        <title>twitter 2.0 clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" grid grid-cols-9 bg-white min-h-screen ">
        {/* Sidebar */}
        <section className="border hidden sm:inline-grid sm:col-span-2 lg:col-span-2">
          <Sidebar />
        </section>

        {/* feed */}
        <section className="border  col-span-9 sm:col-span-7  lg:col-span-4">
          <Feed />
        </section>

        {/* Widgets */}
        <section className="border hidden  lg:inline-grid  lg:col-span-3">
          <Widgets />
        </section>
      </main>
    </div>
  );
}
