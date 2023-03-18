import minifaker from "minifaker";
import "minifaker/locales/en";
import { useEffect, useState } from "react";
import Story from "./Story";

function Stories() {
  const [story, setStory] = useState([]);

  useEffect(() => {
    const storyUsers = minifaker.array(20, (i) => ({
      username: minifaker.username({ locale: "en" }).toLowerCase(),
      img: `https://i.pravatar.cc/150?img=${Math.ceil(Math.random() * 70)}`,
      id: i,
    }));
    setStory(storyUsers);
  }, []);

  return (
    <div className="flex space-x-2 p-6 bg-white mt-8 border-gray-200 border overflow-x-scroll rounded-sm scrollbar-none">
      {story.map((user) => (
        <Story key={user.id} username={user.username} img={user.img} />
      ))}
    </div>
  );
}

export default Stories;
