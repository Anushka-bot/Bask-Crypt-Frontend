import stock_prices from "../resources/stock_prices.svg";
import bg_image from "../resources/about.jpg";

export default function About() {
  return (
    <>
      <section
        className="h-screen bg-fixed bg-cover flex"
        style={{
          backgroundImage: `url(${bg_image})`,
        }}
      >
        <div className="grid grid-cols-2">
          <div className="p-10 flex flex-col justify-center gap-6 bg-gray-300/30 backdrop-blur-md">
            <div className="pb-4">
              <h1 className="text-4xl underline underline-offset-8 decoration-sky-500 text-neutral-100/80">
                Track baskets
              </h1>
            </div>
            <div className="pt-4">
              <p className="text-neutral-300">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Porta lorem mollis aliquam ut porttitor leo a diam. In fermentum
                et sollicitudin ac orci phasellus. Massa enim nec dui nunc
                mattis enim ut. Hendrerit gravida rutrum quisque non tellus orci
                ac. Diam donec adipiscing tristique risus nec feugiat in.
                Faucibus scelerisque eleifend donec pretium vulputate sapien.
                Libero id faucibus nisl egestas quis ipsum suspendisse ultrices
                gravida dictum. Cursus eget nunc scelerisque viverra mauris.
              </p>
            </div>
          </div>
          <img
            src={stock_prices}
            alt="stock_prices"
            className="my-auto px-10"
          />
        </div>
      </section>
      <section className="h-screen flex">
        <div className="w-1/2 ml-auto">
          <div className="p-10 h-screen flex flex-col justify-center gap-6 bg-gray-300/30 backdrop-blur-md">
            <div className="pb-4">
              <h1 className="text-4xl underline underline-offset-8 decoration-sky-500 text-neutral-800/80">
                Track baskets
              </h1>
            </div>
            <div className="pt-4">
              <p className="text-neutral-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Porta lorem mollis aliquam ut porttitor leo a diam. In fermentum
                et sollicitudin ac orci phasellus. Massa enim nec dui nunc
                mattis enim ut. Hendrerit gravida rutrum quisque non tellus orci
                ac. Diam donec adipiscing tristique risus nec feugiat in.
                Faucibus scelerisque eleifend donec pretium vulputate sapien.
                Libero id faucibus nisl egestas quis ipsum suspendisse ultrices
                gravida dictum. Cursus eget nunc scelerisque viverra mauris.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
