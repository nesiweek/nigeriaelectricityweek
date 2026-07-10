import Image from "next/image";

export default function Logo({ size = 52 }: { size?: number }) {
    return (
        <Image
            src="/nesi-logo-navy.jpeg"
            alt="NESI Week logo"
            width={size}
            height={size}
            priority
        />
    );
}