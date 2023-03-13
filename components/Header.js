import Image from "next/image";

function Header() {
  return (
    <div>
      <div className="flex items-center justify-between max-w-6xl">
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
        <h1>Right side</h1>
      </div>
    </div>
  );
}

export default Header;
