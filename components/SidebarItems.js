const SidebarItems = ({ Icon, title }) => {
  return (
    <div className="flex items-center p-2 w-max cursor-pointer hover:bg-gray-200 rounded-full">
      <Icon className="h-8 w-8 text-gray-700" />
      <p className=" hidden md:inline-grid  ml-2 pr-3">{title}</p>
    </div>
  );
};

export default SidebarItems;
