import Image from "next/image";
import Hamburger from "@/assets/icons/hamburger.svg";

export default function NavBar() {
  return (
    <div className="fixed top-0 left-0 right-0 bg-white">
      <div className="relative flex items-center justify-between px-4 h-14 border-b-2 border-gray-100 z-50">
        <div>
          <Image src={Hamburger} alt="menu" width={24} height={24} />
        </div>
        <div className="absolute inset-0 flex items-center justify-center font-bold text-lg">
          단어장
        </div>
        <div></div>
      </div>
    </div>
  );
}
