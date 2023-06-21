import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  Icon: string;
  text: string;
  altText: string;
}

export default function Logo({ Icon, text, altText }: LogoProps) {
  return (
    <Link href={"/"} className={`flex gap-4 text-3xl font-bold button`}>
      <div className="flex items-center gap-4 justify">
        <div className="relative flex w-8 h-8 m-1">
          <Image priority={true} src={Icon} alt={altText} fill />
        </div>
        <div className="hidden sm:block font-lilita">{text}</div>
      </div>
    </Link>
  );
}
