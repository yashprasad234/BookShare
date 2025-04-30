"use client"
import Image from "next/image";
import React from "react";
import Tag from "./Tag";
import { useRouter } from "next/navigation";

export default function Book({
  id,
  title,
  author,
  genre,
  coverImg,
  city,
  availableIn,
  mobile,
  email,
}: {
  id: number;
  title: string;
  author: string;
  genre: number[];
  coverImg: string;
  city?: string;
  availableIn: number;
  mobile?: string;
  email?: string;
}) {

  const router = useRouter();

  return (
    <div className="p-4">
      <div className="relative h-content">
        <Image
          src={coverImg ? coverImg : "/images/fallback-cover.webp"}
          alt={title}
          width={city ? 400 : 300}
          height={city ? 600 : 450}
          objectFit="cover"
          className={`${coverImg ? "" : "opacity-15"} object-contain` }
        />
        {coverImg ? null : (
          <div className="absolute top-1/2 left-1/2 bg-gray-50 border-1 border-slate-300 rounded-md text-sm w-max -translate-1/2 px-2">
            Cover Image Not Available
          </div>
        )}
        {!city && <button className="text-xs px-2 py-1 rounded-sm bg-black text-white hover:bg-white hover:text-black hover:outline-1 absolute top-0 right-0 cursor-pointer" onClick={() => router.push(`/books/${id}`)} >
          Borrow
        </button>}
      </div>
      <p className="text-lg font-serif font-bold">{title}</p>
      <p className="text-lg">
        Author: <span className="font-bold">{author}</span>
      </p>
      <p className="text-lg">
        Available:{" "}
        <span className="text-md">
          {availableIn == 0 ? "now" : `in ${availableIn} days`}
        </span>
      </p>
      {city && (
        <p className="text-lg">
          City: <span className="text-md">{city}</span>
        </p>
      )}
      {mobile && (
        <p className="text-lg">
          Mobile: <span className="text-md">{mobile}</span>
        </p>
      )}
      {email && (
        <p className="text-lg">
          Email: <span className="text-md">{email}</span>
        </p>
      )}
      <div className="flex flex-wrap gap-2">
        {genre.map((num, i) => (
          <div key={i}>
            <Tag num={num} />
          </div>
        ))}
      </div>
    </div>
  );
}
