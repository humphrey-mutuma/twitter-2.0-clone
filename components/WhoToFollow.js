const WhoToFollow = ({userToFollowImage, userToFollowName, userToFollowUsername}) => {
  return (
    <div className="flex items-center justify-between p-5 w-full cursor-pointer hover:bg-gray-200">
      <div className="flex items-center justify-between ">
        <img
          className="h-12 w-12 rounded-full object-cover"
          src={userToFollowImage}
          alt=""
        />
        <p className=" text-sm ml-2">
          <span className="font-bold hover:underline">{userToFollowName}</span>{" "}
          <br /> {userToFollowUsername}
        </p>
      </div>
      <button className=" justify-end bg-black text-white rounded-full p-2 pl-3 pr-3 ">
        Follow
      </button>
    </div>
  );
};

export default WhoToFollow;
