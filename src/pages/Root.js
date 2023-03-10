import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
      <main className="max-w-6xl my-4 mx-auto px-6">
        <section className="flex flex-col h-screen">
          <Navbar />
          <div className="flex flex-col text-center gap-6 flex-grow justify-center items-center -translate-y-8">
            <div>
              <h1 className="text-4xl md:text-6xl">Basket your dreams.</h1>
              <h2 className="text-2xl md:text-4xl">Track your gains.</h2>
            </div>
            <div>
              <p className="w-2/3 mx-auto">
                <span className="bg-yellow-200 px-2 py-1 rounded-md">
                  baskcrypt
                </span>{" "}
                is a crypto-tracking website that let's you create baskets of
                your favorite cryptos to collectively track them by your
                requirements.
              </p>
            </div>
            <a
              href="/baskets"
              className="font-thin px-6 py-3 text-neutral-100 rounded-md bg-gradient-to-br from-cyan-400 to-teal-600 hover:-translate-y-0.5 transition duration-300 hover:shadow-lg shadow-slate-900"
            >
              Baskets
            </a>
          </div>
        </section>
        <About />
      </main>
      <Footer />
    </>
  );
}
