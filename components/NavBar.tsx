import Image from 'next/image';

export default function NavBar() {
    return (
        <nav className="flex w-[86.5625rem] h-24 bg-black">
            <Image
            src="assets/shared/logo.svg"
            alt="logo"
            width={48}
            height={48}
            className="object-contain"
            />
        </nav>
    );
}