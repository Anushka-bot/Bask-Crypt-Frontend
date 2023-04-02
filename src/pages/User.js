import React from "react";

export default function User() {
  const uploadedImage = React.useRef(null);
  const imageUploader = React.useRef(null);

  const handleImageUpload = e => {
    const [file] = e.target.files;
    if (file) {
      const reader = new FileReader();
      const { current } = uploadedImage;
      current.file = file;
      reader.onload = e => {
        current.src = e.target.result;
      };
      reader.readAsDataURL(file);
    }
  };

    return (
      <>
        <div className="bg-[#7E94F8] w-full h-screen absolute overflow-hidden">
            <a href="/" className="absolute left-[40px] top-[30px] font-Lora underline decoration-white text-3xl text-white z-30 mt-2">Baskcrypt</a>
            
            <div>
              <div className="box-border absolute w-[180px] h-[170px] left-[30px] top-[90px] bg-white cursor-pointer" onClick={() => imageUploader.current.click()}>
              <input type="file" accept="image/*" onChange={handleImageUpload} ref={imageUploader} className="hidden"/>
              <img ref={uploadedImage} className="w-full h-full absolute"/>
              </div>
            </div>
            
            <div>
                <p className="absolute w-[168px] h-[27px] left-[40px] top-[280px] font-Mont text-[20px] leading-[27px] text-white font-semibold">Anushka Bansal</p>
                <p className="absolute w-[149px] h-[19px] left-[40px] top-[320px] font-Mont text-[16px] leading-[19px] text-white/40 font-semibold">bansal@gmail.com</p>
                <div className="absolute w-[175px] h-[41px] left-[30px] top-[375px] bg-white rounded-[25px]">
                </div>
                <a href="/user" className="absolute w-[53px] h-[21px] left-[89px] top-[385px] font-Mont text-[17px] leading-[21px] text-violet font-semibold">Profile</a>
                <a href="/mybaskets" className="absolute w-[65px] h-[21px] left-[89px] top-[450px] font-Mont text-[17px] leading-[21px] text-white font-semibold">Baskets</a>
            </div>

          <section className="h-screen w-[1350px] bg-white rounded-[80px] left-[244px] top-0 absolute">
            <div>
              <p className="absolute w-[127px] h-[48px] left-[107px] top-[62px] font-Mont text-[40px] leading-[48px] text-violet font-bold">Profile</p>
              <p className="absolute w-[202px] h-[25px] left-[107px] top-[129px] font-Mont text-[18px] leading-[25px] text-violet font-semibold">General Information</p>
              <hr className="absolute w-[1084px] left-[107px] top-[174px] border-solid rounded-sm border-black/10"></hr>
            </div>
            <div className="absolute grid grid-rows-6 gap-7 top-[207px] left-[107px]">
                <div className="w-[105px] h-[40px] font-Lora text-[17px] text-violet">Email</div>
                <div className="w-[105px] h-[40px] font-Lora text-[17px] text-violet justify-center">Name</div>
                <div className="w-[105px] h-[40px] font-Lora text-[17px] text-violet">Phone</div>
                <div className="w-[105px] h-[40px] font-Lora text-[17px] text-violet">Date of birth</div>
                <div className="w-[105px] h-[40px] font-Lora text-[17px] text-violet">Gender</div>
                <div className="w-[105px] h-[40px] font-Lora text-[17px] text-violet">Country</div>
                <div className="w-[105px] h-[40px] font-Lora text-[17px] text-violet">Address</div>
            </div>
            <div className="absolute grid grid-rows-6 gap-7 top-[200px] left-[260px]">
                <input type="email" className="box-border w-[521px] h-[40px] left-[110px] bg-white rounded-[10px] border-solid border-black/10"/>
                <input type="text" className="box-border w-[521px] h-[40px] left-[110px] bg-white rounded-[10px] border-solid border-black/10"/>
                <input type="number" className="box-border w-[521px] h-[40px] left-[110px] bg-white rounded-[10px] border-solid border-black/10"/>
                <input type="date" className="box-border w-[521px] h-[40px] left-[110px] bg-white rounded-[10px] border-solid border-black/10"/>
                <input type="text" className="box-border w-[521px] h-[40px] left-[110px] bg-white rounded-[10px] border-solid border-black/10"/>
                <input type="text" className="box-border w-[521px] h-[40px] left-[110px] bg-white rounded-[10px] border-solid border-black/10"/>
                <input type="text" className="box-border w-[521px] h-[40px] left-[110px] bg-white rounded-[10px] border-solid border-black/10"/>
                <button type="button" className="box-border w-[521px] h-[40px] left-[110px] bg-violet rounded-[10px] border-solid border-black/10 text-white">Submit</button>
            </div>
          </section>
        </div>
      </>
    );
  }