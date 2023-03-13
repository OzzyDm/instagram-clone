import Image from "next/image";
import { SearchIcon } from "@heroicons/react/outline";

function Header() {
  return (
    <div className="flex items-center justify-between max-w-6xl pt-5">
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
      <h1>Right side</h1>
    </div>
  );
}

export default Header;
