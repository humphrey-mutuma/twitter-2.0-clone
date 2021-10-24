import {
  addDoc,
  collection,
  doc,
  getDoc,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "@firebase/firestore";
import { getDownloadURL, ref, uploadString } from "@firebase/storage";
import {
  SparklesIcon,
  PhotographIcon,
  GiftIcon,
  EmojiHappyIcon,
  CalendarIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";
import { db, storage } from "../firebase";
import TweetCard from "./TweetCard";

const Feed = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const filePicker = useRef(null);
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [tweetValue, setTweetValue] = useState("");
  const [tweets, setTweets] = useState([]);

  // upload to firebase storage
  // upload image to firebase

  const uploadPhoto = async (e) => {
    e.preventDefault();
    // trigger opening of the modal if the user tries to tweet while not logged in
    if (!session) {
      setOpen(true);
    } else {
      if (loading) return;
      setLoading(true);
      setSelectedFile(null);
      setTweetValue("");
      // create a post and add to firestore
      // we'll get an id of newly created post
      // upload image to storage with the post id
      // get the download URL from storage
      // update origin post with the image url
      const docRef = await addDoc(collection(db, "tweets"), {
        username: session.user.username,
        name: session.user.name,
        tweet: tweetValue,
        profileImg: session.user.image,
        timestamp: serverTimestamp(),
        likes: [],
      });

      // get the post id
      // console.log("new doc added with id ", docRef.id);
      // upload image to firebase storage
      const imageRef = ref(storage, `tweets/${docRef.id}/image`);

      if (selectedFile) {
        await uploadString(imageRef, selectedFile, "data_url").then(
          async (Snapshot) => {
            // get the  download URL
            const downloadURL = await getDownloadURL(imageRef);

            // update the post in firestore using the doc id
            await updateDoc(doc(db, "tweets", docRef.id), {
              image: downloadURL,
            });
          }
        );
      }

      setLoading(false);
    }
  };

  // add image
  const addImageToPost = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setSelectedFile(readerEvent.target.result);
    };
  };

  // ********************************************************/
  // fetch data from firestore
  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(db, "tweets"), orderBy("timestamp", "desc")),
      (snapshot) => {
        setTweets(snapshot.docs);
      }
    );
    return unsubscribe;
  }, [db]);
  // *****************************************************

  return (
    <main>
      <nav
        onClick={() => router.push("/")}
        className="sticky top-0 z-10 bg-white flex justify-between items-center h-[3rem] border-b-[1px] cursor-pointer"
      >
        <h1 className="font-bold ml-4 text-lg">Home</h1>
        <SparklesIcon className="h-6 w-6 mr-4 " />
      </nav>
      {/* tweets section */}
      <section className="w-full flex  border-b-[1px]">
        <img
          className="h-12 w-12 rounded-full m-4 object-cover"
          src={session?.user.image}
          alt=""
        />
        <div className="flex-1 mr-4">
          <form onSubmit={uploadPhoto}>
            <textarea
              required
              onChange={(e) => setTweetValue(e.target.value)}
              value={tweetValue}
              placeholder="What's happening? "
              rows="1"
              className="p-3 text-xl w-full focus:outline-none  focus:border-transparent scrollbar-hide"
              type="text"
            />

            {/* show the selected image preview if available and remove on click event */}
            {selectedFile && (
              <div>
                <img
                  src={selectedFile}
                  className="w-full object-contain cursor-pointer rounded-2xl"
                  onClick={() => setSelectedFile(null)}
                  alt=""
                />
              </div>
            )}

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
                  <span
                    onClick={() => filePicker.current.click()}
                    className="flex items-center"
                  >
                    <PhotographIcon className=" w-8 h-8 text-blue-500" />{" "}
                    {selectedFile ? (
                      <span>Uploaded</span>
                    ) : (
                      <span> No file Selected</span>
                    )}
                  </span>
                  {/* hidden input for file picking */}
                  <input
                    ref={filePicker}
                    onChange={addImageToPost}
                    type="file"
                    hidden
                  />
                </span>

                {/* disable and change button color if both input fields are empty */}
                <button
                  disabled={tweetValue.trim() === "" && !selectedFile}
                  onClick={uploadPhoto}
                  className={` ${
                    tweetValue.trim() === "" && !selectedFile && "bg-blue-300"
                  } bg-blue-500 h-10 w-20 text-sm  m-2 text-white p-2 rounded-full`}
                >
                  Tweet
                </button>
              </section>
            </section>
          </form>
        </div>
      </section>

      {/* feet tweets */}
      {/* post */}

      <section>
        {tweets.map((tweet) => (
          <TweetCard
            key={tweet.id}
            tweetId={tweet.id}
            tweetText={tweet.data().tweet}
            tweetImage={tweet.data().image}
            userImage={tweet.data().profileImg}
            username={tweet.data().username}
            name={tweet.data().name}
          />
        ))}
      </section>
    </main>
  );
};

export default Feed;
