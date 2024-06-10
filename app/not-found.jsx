import Link from "next/link";

export default function NotFound() {
  return (
    <main className="text-center text-white h-dvh mt-8 sm:mt-20">
      <h2 className="text-3xl py-2">Something went wrong!</h2>
      <h4 className="text-lg pb-2">
        We could not find the page you were looking for.
      </h4>
      <button className="btn btn-outline w-32 btn-white">
        <Link href="/">Home</Link>
      </button>
    </main>
  );
}
