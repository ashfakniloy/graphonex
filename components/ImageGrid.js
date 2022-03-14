import Image from "next/image";

export default function ImageGrid({ image }) {
  return (
    <div className="">
      <div className="bg-slate-600 w-[360px] h-[250px] overflow-hidden">
        <Image
          src={image}
          alt=""
          className="hover:scale-110 hover:opacity-50 duration-500"
          width={360}
          height={260}
        />
      </div>
    </div>
  );
}
