import { SparklesIcon } from "@heroicons/react/outline";

const Feed = () => {
  return (
    <main>
      <nav className="flex justify-between items-center h-[3rem] border-b-[1px] cursor-pointer">
        <h1 className="font-bold ml-4 text-lg">Home</h1>
        <SparklesIcon className="h-6 w-6 mr-4 "/>
      </nav>
      
    </main>
  );
};

export default Feed;
