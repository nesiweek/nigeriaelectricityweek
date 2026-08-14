import Image from "next/image";

const NATIVE_WIDTH = 1813;
const NATIVE_HEIGHT = 616;
const ASPECT_RATIO = NATIVE_WIDTH / NATIVE_HEIGHT;

export default function Logo({ height = 40 }: { height?: number }) {
    const width = Math.round(height * ASPECT_RATIO);

    return (
        <Image
            src="/nesiweek-new-logo.png"
            alt="NESI Week — Nigeria Electricity Supply Industry Week"
            width={width}
            height={height}
            style={{ width, height }}
            priority
        />
    );
}
