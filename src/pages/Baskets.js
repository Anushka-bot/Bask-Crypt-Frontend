import Navbar from "../components/Navbar";
import Basket from "../components/Basket";

export default function Baskets() {
  return (
    <main className="max-w-6xl my-4 mx-auto px-6">
      <Navbar />
      <section className="mx-auto flex flex-wrap justify-between gap-6 mt-20 p-10">
        <Basket
          img_src={
            "https://pbs.twimg.com/media/Fq0ygs2WIAEXrUN?format=jpg&name=900x900"
          }
        />
      </section>
    </main>
  );
}
