import Navbar from "../components/Navbar";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Root() {
  return (
    <>
    <div className="bg-hand h-screen bg-contain bg-no-repeat bg-left bg-[#7E94F8]" id="home">
        <section className="flex flex-col h-screen">
          <div className="flex flex-col gap-6 flex-grow justify-center items-center -translate-y-8">
            <div className="text-white pl-96 ">
              <h1 className="font-Mont font-semibold text-8xl md:text-6xl">Basket your dreams.</h1>
              <h2 className="font-Mont text-lg md:text-4xl">Track your gains.</h2>
            </div> 
            <a
              href="#main"
              className="mr-24 text-lg font-bold px-6 py-3 text-[#7E94F8] rounded-md bg-white hover:-translate-y-0.5 transition duration-300 hover:shadow-lg shadow-slate-900"
            >
              Explore
            </a>
          </div>
        </section>
      </div> 


      <main className="max-w-6xl my-4 mx-auto px-6" id="main">
        <section className="flex flex-col h-screen">
          <Navbar />
          <div className="flex flex-col text-center gap-6 flex-grow justify-center items-center -translate-y-8">
            <div>
              <h1 className="font-Mont font-[400] text-4xl md:text-6xl">Basket your dreams.</h1>
              <h2 className="font-Mont font-medium text-2xl md:text-4xl">Track your gains.</h2>
            </div>
            <div>
              <p className="font-Lora w-2/3 mx-auto">
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
              className="text-lg font-medium px-6 py-3 text-white rounded-md bg-gradient-to-br from-lightVio to-violet hover:-translate-y-0.5 transition duration-300 hover:shadow-lg shadow-slate-900"
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
