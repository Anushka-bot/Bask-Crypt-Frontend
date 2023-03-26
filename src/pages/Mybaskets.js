export default function Mybaskets() {
    return (
      <>
        <div className="bg-[#7E94F8] w-full h-screen relative">
        <a href="/" className="absolute left-[40px] top-[30px] font-Lora underline decoration-white text-3xl text-white z-30 mt-2">Baskcrypt</a>
            <div className="box-border absolute w-[180px] h-[170px] left-[30px] top-[90px] border-solid rounded-[23px] border-black/10 bg-white"></div>
            <div>
                <p className="absolute w-[168px] h-[27px] left-[40px] top-[280px] font-Mont text-[20px] leading-[27px] text-white font-semibold">Anushka Bansal</p>
                <p className="absolute w-[149px] h-[19px] left-[40px] top-[320px] font-Mont text-[16px] leading-[19px] text-white/40 font-semibold">bansal@gmail.com</p>
                <div className="absolute w-[175px] h-[41px] left-[30px] top-[440px] bg-white rounded-[25px]">
                </div>
                <a href="/user" className="absolute w-[65px] h-[21px] left-[89px] top-[385px] font-Mont text-[17px] leading-[21px] text-white font-semibold">Profile</a>
                <a href="/mybaskets" className="absolute w-[53px] h-[21px] left-[89px] top-[450px] font-Mont text-[17px] leading-[21px] text-violet font-semibold">Baskets</a>
            </div>
          <section className="h-screen w-[1360px] bg-white rounded-[80px] left-[244px] top-0 absolute">
            <div>
              <p className="absolute w-[127px] h-[48px] left-[107px] top-[62px] font-Mont text-[40px] leading-[48px] text-violet font-bold">Baskets</p>
              <p className="absolute w-[202px] h-[25px] left-[107px] top-[129px] font-Mont text-[18px] leading-[25px] text-violet font-semibold">Public Baskets</p>
              <hr className="absolute w-[1084px] left-[107px] top-[174px] border-solid rounded-sm border-black/10"></hr>
            </div>
            
            <div className="grid grid-cols-3 gap-10">
                <div className="top-[207px] left-[107px] w-80 rounded-lg bg-white shadow-lg hover:-translate-y-1 duration-300 transition hover:shadow-xl ">
                    <div class="text-ellipsis p-6 h-auto">
                        <div className="mb-2">
                        <h5 className="text-xl font-medium leading-tight text-neutral-800">
                            Card title
                        </h5>
                        <h6 className="text-xs text-gray-400">Author Name</h6>
                        </div>
                        <p className="mb-4 text-sm text-neutral-600">
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content. Lorem, ipsum dolor s
                        </p>
                        </div>  
                    </div>
                </div>
          </section>
        </div>
      </>
    );
  }