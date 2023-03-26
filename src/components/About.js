import stock_prices from "../resources/stock_prices.svg";
import bg_image from "../resources/about.jpg";

export default function About() {
  return (
    <>
      <section className="bg-about1 h-screen bg-fixed bg-cover flex" id="about">
        <div className="grid grid-cols-2">
          <div className="p-10 flex flex-col justify-center gap-6 bg-gray-300/50 backdrop-blur-md">
            <div className="pb-4">
              <h1 className="font-Lora text-4xl underline underline-offset-8 decoration-violet text-white">
                About Baskcrypt
              </h1>
            </div>
            <div className="pt-4">
              <p className="font-Mont font-xl font-medium text-black">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Porta lorem mollis aliquam ut porttitor leo a diam. In fermentum
                et sollicitudin ac orci phasellus. Massa enim nec dui nunc
                mattis enim ut. Hendrerit gravida rutrum quisque non tellus orci
                ac. Diam donec adipiscing tristique risus nec feugiat in.
                Faucibus scelerisque eleifend donec pretium vulputate sapien.
                Libero id faucibus nisl egestas quis ipsum suspendisse ultrices
                gravida dictum. Cursus eget nunc scelerisque
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-about1 h-screen bg-fixed bg-cover flex">
        <div className="w-1/2 ml-auto">
          <div className="p-10 h-screen flex flex-col justify-center gap-6 bg-gray-300/50 backdrop-blur-md">
            <div className="pb-4">
              <h1 className="font-Lora text-4xl underline underline-offset-8 decoration-violet text-white">
                Tracking baskets
              </h1>
            </div>
            <div className="pt-4">
              <p className="font-Mont font-medium text-black">
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
