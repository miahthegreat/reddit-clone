"use client";

import Image from "next/image";

function CustomImageRenderer({ data }: any) {
  const src = data.file.url;

  return (
    <div className="relative min-h-[15rem] w-full">
      <Image
        alt="image"
        className="rounded-lg object-cover shadow-lg ring-1 ring-black-300/20"
        fill
        src={src}
      />
    </div>
  );
}

export default CustomImageRenderer;
