import Image from "next/image";

export default function Logo({ size = 84 }: { size?: number }) {
    return (
        <Image
            src="/nesiweek-logo.png"
            alt="NESI Week logo"
            width={size}
            height={size}
            priority
        />
    );
}