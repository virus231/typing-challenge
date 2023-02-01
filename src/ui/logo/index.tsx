import Image from "next/image";

export const Logo = () => {
  return <div className="flex cursor-pointer select-none items-center tracking-wide">
    <Image
      src="/img/logo.svg"
      width={32}
      height={32}
      alt="Logo"
    />
  </div>
}