import Image from "next/image";

function Page() {
  return (
    <div className="text-white flex flex-col gap-8 items-center justify-center px-16 py-8 text-center">
      <div>
        <h2 className="about-question">What is this site?</h2>
        <div className="about-answer">
          This is a hobby project built using Next.js and Tailwind CSS.
          <br />
          The basic idea is to create a Netflix-style UI for viewing film
          trailers.
        </div>
      </div>
      <div>
        <h2 className="about-question">Where does the data come from?</h2>
        <div className="about-answer">
          <div className="flex">
            <a
              href="https://www.themoviedb.org/"
              target="_blank"
              rel="noreferrer"
              className="flex-1 relative"
            >
              <Image
                src={
                  "https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg"
                }
                alt="The Movie Database Logo"
                fill
                unoptimized
              />
            </a>
            <div className="ml-4 flex-[4] md:flex-[5]">
              This product uses the TMDB API but is not endorsed or certified by
              TMDB.
            </div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="about-question">
          Will you improve the site and add more features?
        </h2>
        <div className="about-answer">
          Yes, I already have some things I want to add and improve already.
        </div>
      </div>
    </div>
  );
}

export default Page;
