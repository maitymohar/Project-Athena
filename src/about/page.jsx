export default function About() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#070614]">
      <img
        src="https://res.cloudinary.com/dqcrkrtyr/image/upload/v1733829420/dots_rqtxh8.png"
        alt=""
        className="absolute h-screen"
      />

      <div className="bg-[#0E0D209C] border-[#8d19b733] border-2 rounded-lg p-10 text-center w-11/12 max-w-4xl shadow-lg border border-gray-700">
        <img src="../about/rect1.png" width="20px" alt="" />
        {/* Title */}
        <h2 className="text-3xl font-bold text-[#A546FF] mb-6 font-monsterrat">
          About us
        </h2>

        {/* Description */}
        <p className="text-gray-300 text-lg mb-8 font-robotomono">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae
          ab illo inventore veritatis et quasi architecto beatae vitae dicta
          sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut.
        </p>

        {/* Buttons */}
        <div className="flex flex-col items-center gap-6 p-6">
          {/* First Row */}

          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-[194.4px]">
            <button className="relative overflow-hidden rounded-lg px-16 py-8">
              <span
                aria-hidden
                className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-[#BC00FF80] before:via-[#00000080]  before:to-via-[#BC00FF80]"
              />
              <span className="absolute inset-px z-10 flex items-center justify-center rounded-lg bg-[#0200039c] bg-gradient-to-t from-[#080010] to-[#1102189c] text-neutral-300">
                OpenSource
              </span>
            </button>
            <button className="relative overflow-hidden rounded-lg px-16 py-8">
              <span className="absolute inset-px z-10 flex items-center justify-center rounded-lg bg-[#0200039c] bg-gradient-to-t from-[#080010] to-[#1102189c] text-neutral-300">
                Cyber sec
              </span>
              <span
                aria-hidden
                className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-[#BC00FF80] before:via-[#00000080]  before:to-via-[#BC00FF80]"
              />
            </button>
          </div>
          {/* Second Row */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-8 lg:gap-[190px]">
            <button className="relative overflow-hidden rounded-lg px-16 py-8">
              <span className="absolute inset-px z-10 flex items-center justify-center rounded-lg bg-[#0200039c] bg-gradient-to-t from-[#080010] to-[#1102189c] text-neutral-300">
                Web Dev
              </span>
              <span
                aria-hidden
                className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-[#BC00FF80] before:via-[#00000080]  before:to-via-[#BC00FF80]"
              />
            </button>
            <button className="relative overflow-hidden rounded-lg px-16 py-8">
              <span className="absolute inset-px z-10 flex items-center justify-center rounded-lg bg-[#0200039c] bg-gradient-to-t from-[#080010] to-[#1102189c] text-neutral-300">
                App Dev
              </span>
              <span
                aria-hidden
                className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-[#BC00FF80] before:via-[#00000080]  before:to-via-[#BC00FF80]"
              />
            </button>
            <button className="relative overflow-hidden rounded-lg px-16 py-8">
              <span className="absolute inset-px z-10 flex items-center justify-center rounded-lg bg-[#0200039c] bg-gradient-to-t from-[#080010] to-[#1102189c] text-neutral-300">
                AI ML
              </span>
              <span
                aria-hidden
                className="absolute inset-0 z-0 scale-x-[2.0] blur before:absolute before:inset-0 before:top-1/2 before:aspect-square before:animate-disco before:bg-gradient-conic before:from-[#BC00FF80] before:via-[#00000080]  before:to-via-[#BC00FF80]"
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
