import { SearchIcon } from "@heroicons/react/outline";

const Widgets = () => {
  return (
    <section className="p-3">
      <div class=" w-full flex items-center relative">
        <SearchIcon className="w-5 h-5 absolute ml-3  text-gray-500" />
        <input
          class=" bg-gray-200  p-3 pl-10 flex-1 appearance-none focus:border-[1px] rounded-full border-blue-200 w-ful focus:outline-none focus:bg-white focus:border-blue-500"
          type="text"
          placeholder="Search Twitter"
        />
      </div>
    </section>
  );
};

export default Widgets;
