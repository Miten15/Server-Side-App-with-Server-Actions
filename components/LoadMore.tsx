"use client";
import { fetchAnime } from "@/app/action";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { useInView } from "react-intersection-observer";
import AnimeCard, { AnimeProp } from "./AnimeCard";

function LoadMore() {
  const [page, setPage] = useState(2);
  const [data, setData] = useState<AnimeProp[]>([]);
  const [ref, inView] = useInView();

  const loadMoreAnime = useCallback(async () => {
    const newAnime = await fetchAnime(page);
    setData((prevData) => [...prevData, ...newAnime]);
    setPage((prevPage) => prevPage + 1);
  }, [page]);

  useEffect(() => {
    if (inView) {
      loadMoreAnime();
    }
  }, [inView, loadMoreAnime]);

  return (
    <>
      <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {data.map((item: AnimeProp, index: number) => (
          <AnimeCard key={item.id} anime={item} index={index} />
        ))}
      </section>
      <section className="flex justify-center items-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
}

export default LoadMore;
