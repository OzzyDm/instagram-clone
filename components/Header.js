import Image from "next/image";
import { SearchIcon, PlusCircleIcon } from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "@/atom/modalAtom";

function Header() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      <div className="flex items-center justify-between max-w-6xl pt-6 pb-6 mx-4 xl:mx-auto">
        {/* Left */}
        <div className="realtive hidden lg:inline-grid cursor-pointer">
          <Image
            src="http://www.jennexplores.com/wp-content/uploads/2015/09/Instagram_logo_black.png"
            height={96}
            width={96}
            className="object-contain"
          />
        </div>
        <div className="realtive lg:hidden cursor-pointer">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/800px-Instagram_logo_2016.svg.png"
            height={96}
            width={40}
            className="object-contain"
          />
        </div>
        {/* Middle */}
        <div className="relative mt-1">
          <div className="absolute top-2 left-2">
            <SearchIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          />
        </div>
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <HomeIcon className="hidden lg:inline-flex h-6 cursor-pointer hover:scale-125 transition-transfrom duration-200 ease-out" />
          {session ? (
            <>
              <PlusCircleIcon className="h-6 cursor-pointer hover:scale-125 transition-transfrom duration-200 ease-out" />
              <img
                onClick={signOut}
                src={session.user.image}
                alt="user-image"
                className="h-10 rounded-full cursor-pointer"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign in</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
