import {
  DotsHorizontalIcon,
  HeartIcon,
  ChatIcon,
  BookmarkIcon,
  EmojiHappyIcon,
} from "@heroicons/react/outline";
import { useSession } from "next-auth/react";

function Post({ img, userImg, caption, username, id }) {
  const { data: session } = useSession();

  return (
    <div className="bg-white my-7 border rounded-md">
      {/* PostHeader */}
      <div className="flex items-center p-5">
        <img
          className="h-12 w-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>

      {/* PostImage */}
      <img className="object-cover w-full" src={img} />

      {/* PostButtons */}

      {session && (
        <div className="flex justify-between p-4">
          <div className="flex space-x-4">
            <HeartIcon className="btn" />
            <ChatIcon className="btn" />
          </div>
          <BookmarkIcon className="btn" />
        </div>
      )}

      {/* PostComments */}

      <p className="p-5 truncate">
        <span className="font-bold mr-2">{username}</span>
        {caption}
      </p>

      {/* PostInputBox */}
      {session && (
        <form className="flex items-center p-4">
          <EmojiHappyIcon className="h-7" />
          <input
            type="text"
            placeholder="Enter your comment..."
            className="border-none flex-1 focus:ring-0"
          />
          <button className="text-blue-400 font-bold">Post</button>
        </form>
      )}
    </div>
  );
}

export default Post;
