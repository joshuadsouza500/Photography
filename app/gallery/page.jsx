import GalleryComp from "../components/PageComp/GalleryComp";
import { getVideos, getWorks } from "@/lib/contentful";

export default async function Page() {
  const works = await getWorks();
  const videos = await getVideos();
  return (
    <>
      <main className="bg-background1 mx-2 md:mx-10 text-white md:py-6">
        <div className="text-center pb-10">
          <h1 className="font-inria text-5xl pt-2">Gallery</h1>
        </div>
        <GalleryComp works={works} videos={videos} />
      </main>
    </>
  );
}
