import axios from "axios";
import Image from "next/image";
import Link from "next/link";

// This component fetches memes and renders them on the homepage
export default async function Home() {
  // Fetch the memes data directly in the component
  const res = await axios.get("https://api.imgflip.com/get_memes");
  const memes = res.data.data.memes;

  return (
    <main>
      <h1 className="text-5xl text-center pt-8">MemeVerse</h1>
      <p className="text-center text-lg opacity-60 mt-2 mb-6">
        Generate Your Memes with MemeVerse!
      </p>

      <div className="flex flex-wrap justify-center gap-[35px] border-solid border-white border-2 mx-[50px] rounded-3xl border-opacity-35 backdrop-blur-md bg-opacity-50">
        {/* Map through the fetched memes and display each one */}
        {memes.map((item) => (
          <div key={item.id} className="flex flex-col items-center justify-center">
            <Image
              src={item.url}
              alt={item.name}
              className="w-40 h-40 mt-5"
              width={160}
              height={160}
              priority
            />
            <Link href={`/detail/${item.id}`}>
              <button className="btn btn-outline btn-primary mt-5 rounded-full mb-5">
                Create
                <svg
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6 ml-2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                  />
                </svg>
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}
