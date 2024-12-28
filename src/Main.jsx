import * as React from "react";
import { useEffect } from "react"
import { motion } from "framer-motion";
import Slider from './Carousel/Slider';
import CardList from "./Carousel/Card";
import AboutUs from "./Carousel/AboutUs";
import QuoteBlock from "./Carousel/QuoteBlock";


function Main() {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };
  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3, delayChildren: 0.5 },
    },
  };
  const hoverEffect = {
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  };
  // useEffect(() => {
  //   window.scrollTo(0,0)
  // },[])
  return (
    <motion.div className="flex overflow-hidden flex-col bg-stone-800" initial="hidden" animate="visible">
      <motion.div className="flex overflow-hidden z-10 flex-col justify-center items-center px-16 py-2 w-full text-base font-semibold text-indigo-800 bg-white max-md:px-5 max-md:max-w-full" variants={fadeIn}>
        <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1145px] max-md:max-w-full">
          <motion.img
            loading="lazy"
            //srcSet="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&"
            src="/towerEdge1.png"
            className="object-cover  my-auto w-[22%] cursor-pointer"
            onClick={() => window.location.reload()}
            initial={{ opacity: 0, x: -100}}
            transition={{ type: "spring", stiffness: 300, delay: 0.5}}
            animate={{ opacity: 1, x: 0}}
          />
          <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
            <a href="#aboutus" className="self-stretch my-auto text-lg">About us</a>
            <a href="#services" className="self-stretch my-auto text-lg">Services </a>
            <a href="#contactus" className="gap-2.5 self-stretch p-4 my-auto w-52 text-white bg-indigo-800 rounded-xl border border-orange-100 border-solid">
              Contact us
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div className="flex relative flex-col flex-wrap gap-5 justify-between items-start px-20 pt-8 pb-12 w-full min-h-[720px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <motion.img
          loading="lazy"
          src="/CoverPhoto.jpg"
          //srcSet="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&"
          className="object-cover absolute inset-0 size-full"
          // className="absolute top-0 left-0 w-full h-full object-cover"
          variants={fadeIn}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-800 to-transparent opacity-60"></div>
        <motion.div className="flex flex-row items-center  justify-center gap-8" variants={staggerContainer}>
          <motion.div className="flex relative flex-col left-[10%] min-h-[506px] max-md:max-w-full" variants={slideUp}>
            <div className="text-6xl mx-64 my-24 font-bold text-balance text-balance text-white max-md:max-w-full max-md:text-4xl">
               Building the Future <br />with <br /> Precision and Innovation
            </div>
            {/* <div className="text-xl font-bold text-white max-md:mt-10 max-md:max-w-full">
              "With a focus on excellence, we build more than just structures <br /> —we build the future of connectivity."{" "}
            </div> */}
            <QuoteBlock />
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="flex flex-col w-full bg-white max-md:max-w-full">
        <motion.div
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center pt-px pr-36 pb-52 pl-36 w-full  h-[750px]  min-h-[750px] max-md:px-5 max-md:pb-24 max-md:max-w-full"
          variants={staggerContainer}
        >
          <div className="flex gap-2.5 items-center py-4 max-w-full text-2xl font-medium text-indigo-700 whitespace-nowrap w-[1154px]">
            <div className="flex flex-col justify-center self-stretch my-auto">
              <div className="gap-2.5 self-stretch">Services</div>
              <div className="mt-2.5 max-w-full border-2 border-solid border-indigo-700 min-h-[2px] w-[100px]" />
            </div>
          </div>
          <CardList />
        </motion.div>
        <AboutUs/>
        <div className="flex flex-col pb-11 w-full bg-blue-950 max-md:max-w-full">
          <div className="flex gap-2.5 items-center py-4 pr-36 pl-36 text-2xl font-medium whitespace-nowrap text-zinc-300 max-md:px-5 max-md:mr-0.5">
            <div className="flex flex-col justify-center self-stretch my-auto w-[100px]">
              <div className="gap-2.5 self-start">Gallery</div>
              <div className="mt-2.5 w-[80%] border-2 border-indigo-800 border-solid min-h-[2px]" />
            </div>
          </div>
          <div className="flex flex-col px-14 w-screen max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-10 justify-between items-start my-10 max-md:mt-10 max-md:max-w-full">
              <Slider />
            </div>
          </div>
        </div>
        <div id="contactus" className="flex flex-col w-full font-medium min-h-[757px] max-md:max-w-full">
          <div className="flex gap-2.5 items-center py-4 pr-36 pl-36 w-full text-2xl text-indigo-700 max-md:px-5 max-md:max-w-full">
            <div className="flex flex-col justify-center self-stretch my-auto">
              <div className="gap-2.5 self-stretch">Let’s get in touch!</div>
              <div className="mt-2.5 max-w-full border-2 border-white border-solid min-h-[2px] w-[100px]" />
            </div>
          </div>
          <div className="flex flex-wrap flex-1 gap-10 self-center mt-8 max-w-full h-full font-semibold w-[1154px]">
            <div className="flex flex-col pb-7 text-base min-w-[240px] text-slate-400 w-[448px] max-md:max-w-full">
              <div className="flex flex-col justify-between p-4 w-full min-h-[365px] max-md:max-w-full">
                <div className="gap-2.5 self-stretch p-4 w-full rounded-xl">
                  <input
                    id="email"
                    type="email"
                    className="w-full p-2 mt-1 rounded-xl border border-slate-400 bg-slate-200"
                    placeholder="Enter your email"
                    required
                  />
                </div>
                <div className="gap-2.5 px-4 pt-2 pb-40 mt-14 w-full rounded-xl min-h-[20px] h-[200px]  max-md:pb-24 max-md:mt-10">
                  <textarea
                    id="message"
                    className="w-full p-2 mt-1 rounded-xl border border-slate-400 bg-slate-200"
                    placeholder="Enter your message"
                    rows="5"
                    required
                  />
                </div>
                <button className="flex-1 shrink gap-2 self-stretch px-4 py-5 mx-16  max-w-full text-center text-white whitespace-nowrap bg-indigo-800 rounded-xl min-h-[64px] w-[221px] max-md:mt-10">
                  Send
                </button>
              </div>

            </div>
            <div className="shrink-0 w-px border-2 border-solid border-slate-600 h-[491px]" />
            <div className="flex flex-col justify-center self-start px-4 py-8 min-h-[491px] min-w-[240px] w-[448px] max-md:max-w-full">
              <div className="flex flex-col flex-1 w-full">
                <div className="flex gap-5 items-start px-4 py-2.5 w-full whitespace-nowrap min-h-[85px]">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/88655b3f4fc274c1de587ba8768984d7ef9db46a0d6677b8153eb2329b68f996?apiKey=fd68332350f04fa6815471d918ff3511&"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                  <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px]">
                    <div className="gap-5 self-start text-base text-slate-700">
                      Telephone:
                    </div>
                    <div className="mt-5 text-sm tracking-widest text-indigo-800">
                      +91-9703030996
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-start px-4 py-2 mt-4 w-full text-base whitespace-nowrap rounded-xl">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/12666b269aceb5f3463b9b409d973144606d402c158b45d77851cda5e0667170?apiKey=fd68332350f04fa6815471d918ff3511&"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                  <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px]">
                    <div className="gap-5 self-start text-slate-700">
                      Linkedin
                    </div>
                    <div className="mt-5 text-indigo-800">https://www.linkedin.com/company/toweredge-engineering-consultants/</div>
                  </div>
                </div>
                <div className="flex gap-5 items-start px-4 py-2 mt-4 w-full text-base whitespace-nowrap rounded-xl">
                  <img
                    loading="lazy"
                    //src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/12666b269aceb5f3463b9b409d973144606d402c158b45d77851cda5e0667170?apiKey=fd68332350f04fa6815471d918ff3511&"
                    src="/emailLogo.png"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                  <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px]">
                    <div className="gap-5 self-start text-slate-700">
                      Email
                    </div>
                    <div className="mt-5 text-indigo-800">
                      info@toweredgeconsultants.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-hidden h-96 grid grid-rows-3 w-full justify-items-center bg-indigo-800 max-md:px-5 max-md:max-w-full">
            <img
              loading="lazy"
              src="/FooterWhite.png"
              className="object-contain h-36 justify-center mt-2"
            />
            <div className=" mt-12 leading-8 tracking-wide text-lg w-[32%] text-wrap  text-white  max-md:px-5 max-md:max-w-full">
                #9, 2nd Floor Vinayagar Trade Centre, 
                <br/>VIP Road,
                <br/>
                CBM Compound, <br/>
                Visakhapatnam, 530003, IN
            </div>
            <div className="overflow-hidden mb-2 font-semibold text-xl content-end max-md:px-5 max-md:max-w-full">
               © 2024 TowerEdge Copyright - All Rights Reserved
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
}

export default Main;