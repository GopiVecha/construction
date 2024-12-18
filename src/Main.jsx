import * as React from "react";
import { motion } from "framer-motion";

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
  return (
    <motion.div className="flex overflow-hidden flex-col bg-stone-800" initial="hidden" animate="visible">
      <motion.div className="flex overflow-hidden z-10 flex-col justify-center items-center px-16 py-2 w-full text-base font-semibold text-indigo-800 bg-white max-md:px-5 max-md:max-w-full" variants={fadeIn}>
        <div className="flex flex-wrap gap-10 justify-between items-center w-full max-w-[1145px] max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/e22622f681002c872f62bf9daddc6cd0edec43587445e2b5e9c6c1e0edc05842?apiKey=fd68332350f04fa6815471d918ff3511&"
            className="object-contain shrink-0 self-stretch my-auto aspect-[4.02] w-[221px]"
          />
          <div className="flex flex-wrap gap-10 items-center self-stretch my-auto min-w-[240px] max-md:max-w-full">
            <a href="#aboutus" className="self-stretch my-auto">About us</a>
            <a href="#services" className="self-stretch my-auto">Services </a>
            <a href="#contactus" className="gap-2.5 self-stretch p-4 my-auto w-52 text-white bg-indigo-800 rounded-xl border border-orange-100 border-solid">
              Contact us
            </a>
          </div>
        </div>
      </motion.div>
      <motion.div className="flex relative flex-col flex-wrap gap-5 justify-between items-start px-20 pt-8 pb-12 w-full min-h-[767px] max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <motion.img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/201b6f2c9265d50b5153d3442b24e6b19c714878ddbb158f430983fdb610f6f5?apiKey=fd68332350f04fa6815471d918ff3511&"
          className="object-cover absolute inset-0 size-full"
          variants={fadeIn}
        />
        <motion.div className="flex flex-row gap-20" variants={staggerContainer}>
          <motion.div className="flex relative flex-col justify-between min-h-[506px] max-md:max-w-full" variants={slideUp}>
            <div className="text-7xl font-bold text-balance text-balance text-white max-md:max-w-full max-md:text-4xl">
              Building the Future <br />with <br /> Precision and Innovation
            </div>
            <div className="mt-11 text-2xl text-white max-md:mt-10 max-md:max-w-full">
              With a focus on excellence, we build more than just structures <br /> —we build the future of connectivity.{" "}
            </div>
            <motion.div className="flex flex-col justify-between items-center mx-20 mt-11 w-52 max-w-full text-base font-semibold bg-white rounded-xl min-h-[64px] text-neutral-700 max-md:mt-10" whileHover={{ scale: 1.05 }}>
              <div className="flex gap-6 justify-between items-center px-4 py-3 max-w-full rounded-xl min-h-[64px] w-[152px]">
                <div className="self-stretch my-auto">Call Us</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/fc4702b7c1c85898df89ad5619ab4463e3e812b706bf15ba8593bbf260ddc658?apiKey=fd68332350f04fa6815471d918ff3511&"
                  className="object-contain shrink-0 self-stretch my-auto w-10 aspect-square"
                />
              </div>
            </motion.div>
          </motion.div>
          <div className="flex relative flex-col">
            <motion.div initial={{ x: 250, opacity: 0 }} animate={{ x: 10, opacity: 1 }} transition={{ delay: 0.3, type: 'spring' }} className="flex flex-col justify-between items-center max-w-[120px] px-4 pt-4 pb-14 rounded-xl bg-white bg-opacity-90 min-h-[105px] max-h-[120px] ">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/3c9ead4fc4bffc733b773a961ef25d2ffd9e5054057de952171330b33883d5d8?apiKey=fd68332350f04fa6815471d918ff3511&"
                className="object-contain aspect-square w-[50px]"
              />
              <span className="text-sm text-indigo-900 font-bold ">100% Happy Clients</span>
            </motion.div>
            <motion.div initial={{ x: 250, opacity: 0 }} animate={{ x: 10, opacity: 1 }} transition={{ delay: 0.4, type: 'spring' }} className="flex flex-col justify-between items-center max-w-[120px] px-4 pt-4 pb-14 mt-20 rounded-xl bg-white bg-opacity-90 min-h-[105px] max-h-[120px] max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/339b90c436601e2c111105c87a56ecc8b5c255bfec5c8d0d35b7f7e567836c19?apiKey=fd68332350f04fa6815471d918ff3511&"
                className="object-contain aspect-square w-[50px]"
              />
              <span className="text-sm text-indigo-900 font-bold ">Maintain Schedule</span>
            </motion.div>
            <motion.div initial={{ x: 250, opacity: 0 }} animate={{ x: 10, opacity: 1 }} transition={{ delay: 0.5, type: 'spring' }} className="flex flex-col justify-between items-center max-w-[120px] px-4 pt-4 pb-14 mt-20 rounded-xl bg-white bg-opacity-90 min-h-[105px] max-h-[120px] max-md:mt-10">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/72e69ce5dc68f4886f641c81972f66608a0ab5a8aa4bf32866f5eaea3078ecbd?apiKey=fd68332350f04fa6815471d918ff3511&"
                className="object-contain aspect-square w-[50px]"
              />
              <span className="text-sm text-indigo-900 font-bold ">Well Constructed</span>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <div className="flex flex-col w-full bg-white max-md:max-w-full">
        <motion.div
          id="services"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          className="flex flex-col items-center pt-px pr-36 pb-52 pl-36 w-full min-h-[763px] max-md:px-5 max-md:pb-24 max-md:max-w-full"
          variants={staggerContainer}
        >
          <div className="flex gap-2.5 items-center py-4 max-w-full text-2xl font-medium text-indigo-700 whitespace-nowrap w-[1154px]">
            <div className="flex flex-col justify-center self-stretch my-auto">
              <div className="gap-2.5 self-stretch">Services</div>
              <div className="mt-2.5 max-w-full border-2 border-solid border-indigo-700 min-h-[2px] w-[100px]" />
            </div>
          </div>
          <div className="flex flex-col items-center p-4 mt-16 w-full text-base text-center max-w-[1149px] text-slate-700 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-wrap gap-5 justify-center items-center max-w-full h-[166px] w-[1018px]">
              <div className="flex flex-col self-stretch px-4 py-5 my-auto bg-white rounded-3xl h-[171px] min-h-[167px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[174px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/ac1ffa92df1b0212c11ace71661d0e95c8febccd12061480635ff3e32604c58f?apiKey=fd68332350f04fa6815471d918ff3511&"
                  className="object-contain self-center w-10 aspect-square"
                />
                <div className="flex-1 mt-4">
                  Forensic Structural Engineering
                </div>
              </div>
              <div className="flex flex-col self-stretch px-4 pt-4 pb-11 my-auto whitespace-nowrap bg-white rounded-3xl h-[171px] min-h-[167px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[174px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/1cb44d82477227935cf2ceb4c4937ebe58db60a443a9d5cde81b2a4bafb77f48?apiKey=fd68332350f04fa6815471d918ff3511&"
                  className="object-contain self-center w-10 aspect-square"
                />
                <div className="flex-1 mt-4">Additions</div>
              </div>
              <div className="flex flex-col self-stretch px-4 pt-4 pb-8 my-auto bg-white rounded-3xl h-[171px] min-h-[167px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[174px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/9a405d5128cc99400c5013fcbf5ad4707fdd346177f8642f2f4dd09e78c4a4c6?apiKey=fd68332350f04fa6815471d918ff3511&"
                  className="object-contain self-center w-10 aspect-square"
                />
                <div className="flex-1 mt-4">New constructions</div>
              </div>
              <div className="flex flex-col self-stretch p-4 my-auto bg-white rounded-3xl h-[171px] min-h-[167px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[174px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/b1572bdd8a54355c2984dd00249537003b58634a435630a6c5d401b00e73eb80?apiKey=fd68332350f04fa6815471d918ff3511&"
                  className="object-contain self-center w-10 aspect-square"
                />
                <div className="flex-1 mt-4">
                  Structural Drawings and Blueprints
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-10 justify-center items-center mt-12 max-w-full w-[936px] max-md:mt-10">
              <div className="flex flex-col self-stretch px-4 py-5 my-auto bg-white rounded-3xl h-[171px] min-h-[167px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[174px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/b26da564aea6717862407f5d7e5f9dffab46366980c47060f97e4f80e9988e36?apiKey=fd68332350f04fa6815471d918ff3511&"
                  className="object-contain self-center w-10 aspect-square"
                />
                <div className="flex-1 mt-4">
                  Concrete Repair and Corrosion Mitigation
                </div>
              </div>
              <div className="flex flex-col self-stretch px-4 pt-4 pb-8 my-auto bg-white rounded-3xl h-[171px] min-h-[167px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[174px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/3f84f016978a26fee931f3d2eb608af13624a12645550fd54991af3856414df5?apiKey=fd68332350f04fa6815471d918ff3511&"
                  className="object-contain self-center w-10 aspect-square"
                />
                <div className="flex-1 mt-4">Structural Fatigue Analysis</div>
              </div>
              <div className="flex flex-col self-stretch px-4 pt-4 pb-8 my-auto bg-white rounded-3xl h-[171px] min-h-[167px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[174px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/9cfbc9ac14fedf0fb5ef038004aaad71259e530419c4be4f4373c500c54bf380?apiKey=fd68332350f04fa6815471d918ff3511&"
                  className="object-contain self-center w-10 aspect-square"
                />
                <div className="flex-1 mt-4">Multi Family Homes</div>
              </div>
              <div className="flex flex-col self-stretch px-4 pt-4 pb-8 my-auto bg-white rounded-3xl h-[171px] min-h-[167px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[174px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/15cec47da67f49a9f532a99fe9daf8c31fe9cd773afc95a3b5f773580438a366?apiKey=fd68332350f04fa6815471d918ff3511&"
                  className="object-contain self-center w-10 aspect-square"
                />
                <div className="flex-1 mt-4">Commercial Projects</div>
              </div>
            </div>
          </div>
        </motion.div>
        {/* <div id="aboutus" className="flex flex-col items-center self-center w-full max-w-[1440px] min-h-[841px] max-md:max-w-full">
          <div className="flex gap-2.5 items-center py-4 max-w-full text-2xl font-medium text-indigo-700 w-[1142px]">
            <div className="flex flex-col justify-center self-stretch my-auto">
              <div className="gap-2.5 self-stretch">About TowerEdge</div>
              <div className="mt-2.5 max-w-full border-2 border-solid border-indigo-700 min-h-[2px] w-[180px]" />
            </div>
          </div>
          <div className="flex flex-wrap gap-10 justify-between items-center max-w-full text-base text-slate-700 w-[1154px]">
            <div className="self-stretch pl-4 my-auto min-w-[240px] w-[454px] max-md:max-w-full">
              At &nbsp;
              <span className="font-bold text-xl text-indigo-700">TowerEdge</span>,
              we are pioneers in providing cutting-edge solutions for the telecommunications and Infrastructure sectors. Specializing in tower design, construction, maintenance, and Management, we deliver high-quality services that enable Seamless connectivity and Operational Efficiency.
              <span className="text-slate-700">
                <strong className="text-xl font-bold">&nbsp;Founded in 2024</strong>, TowerEdge is committed to setting new standards in tower infrastructure. Our team of seasoned professionals brings together years of expertise, Innovative technologies, and a passion for excellence to every project we undertake. From initial planning and design to construction and ongoing management, we ensure that each tower is <b>built with</b>
                <strong className="text-xl font-bold text-indigo-700">&nbsp;Precision and Reliability</strong>.<br/>We understand the evolving demands of the telecommunications industry, and TowerEdge is proud to be at the forefront of delivering scalable, sustainable, and cost-effective solutions that empower our clients to stay ahead of the curve.Thank you for choosing TowerEdge. We are here to support your success, providing the foundation for robust, future-proof communications.
              </span>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&"
              className="object-contain self-stretch my-auto aspect-[0.95] min-w-[240px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[553px] max-md:max-w-full"
            />
          </div>
        </div> */}
        <section  className="py-24 relative">
          <div id="aboutus" className="w-full max-w-7xl px-4 md:px-5 lg:px-5 mx-auto">
            <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
              <div className="w-full h-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                <div className="w-full flex-col justify-start lg:items-start items-center gap-12 flex">
                  <div className="flex gap-2.5 items-center py-4 max-w-full text-2xl font-medium text-indigo-700 w-[1142px]">
                    <div className="flex flex-col justify-center self-stretch my-auto">
                      <div className="gap-2.5 self-stretch">About TowerEdge</div>
                      <div className="mt-2.5 max-w-full border-2 border-solid border-indigo-700 min-h-[2px] w-[190px]" />
                    </div>
                  </div>
                  <h2 className="text-gray-900 text-4xl font-bold font-manrope leading-normal lg:text-start text-center">Building Stronger Communities through Collaboration and Excellence in Construction</h2>
                  <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">
                    {/* Through collaborationperse perspectives and strengths 
                    are leveraged to create inclusive environments where everyone has the opportunity to thrive. This approach not only fosters personal growth and achievement but also strengthens the fabric of society. */}
                    At<strong className="text-indigo-700 text-xl">&nbsp;TowerEdge </strong>, We are pioneers in providing cutting-edge solutions for the telecommunications and Infrastructure sectors. Specializing in tower design, construction, maintenance, and Management, we deliver high-quality services that enable Seamless connectivity and Operational Efficiency.
                    <br/> <br/>
                      <strong >Founded in 2024</strong>, TowerEdge is committed to setting new standards in tower infrastructure.From initial planning and design to construction and ongoing management, we ensure that each tower is built with
                      <strong className="italic underline underline-offset-4 "> &nbsp;Precision and Reliability </strong>.
                    </p>
                </div>
              </div>
              <img
                //className="lg:mx-0 mx-auto h-full rounded-3xl object-cover"
                // src="https://pagedone.io/asset/uploads/1717751272.png"
                srcSet="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/4de93980a2e6cfda5ca22bb2d5764ac1640d814e8c2878062664933eb5b2b32c?apiKey=fd68332350f04fa6815471d918ff3511&"
                className="object-contain self-stretch my-auto aspect-[0.95] min-w-[240px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[553px] max-md:max-w-full"
                alt="about Us image"
              />
            </div>
          </div>
        </section>
        <div className="flex flex-col pb-11 w-full bg-blue-950 max-md:max-w-full">
          <div className="flex gap-2.5 items-center py-4 pr-36 pl-36 text-2xl font-medium whitespace-nowrap text-zinc-300 max-md:px-5 max-md:mr-0.5">
            <div className="flex flex-col justify-center self-stretch my-auto w-[100px]">
              <div className="gap-2.5 self-start">Gallery</div>
              <div className="mt-2.5 w-full border-2 border-indigo-800 border-solid min-h-[2px]" />
            </div>
          </div>
          <div className="flex flex-col px-14 mt-36 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="ml-20 text-base text-slate-200 w-[580px] max-md:max-w-full">
              Lorem ipsum dolor sit amet consectetur. Vitae platea quam gravida
              suspendisse. Augue massa cum dolor nisl ultricies.
            </div>
            <div className="flex flex-wrap gap-10 justify-between items-start mt-40 max-md:mt-10 max-md:max-w-full">
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/be744e72607fe1487df46c281e23e27399b8c5df4e9a49cefaafa779c29183b0?apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/be744e72607fe1487df46c281e23e27399b8c5df4e9a49cefaafa779c29183b0?apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/be744e72607fe1487df46c281e23e27399b8c5df4e9a49cefaafa779c29183b0?apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/be744e72607fe1487df46c281e23e27399b8c5df4e9a49cefaafa779c29183b0?apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/be744e72607fe1487df46c281e23e27399b8c5df4e9a49cefaafa779c29183b0?apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/be744e72607fe1487df46c281e23e27399b8c5df4e9a49cefaafa779c29183b0?apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/be744e72607fe1487df46c281e23e27399b8c5df4e9a49cefaafa779c29183b0?apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/be744e72607fe1487df46c281e23e27399b8c5df4e9a49cefaafa779c29183b0?apiKey=fd68332350f04fa6815471d918ff3511&"
                className="object-contain aspect-[1.95] min-w-[240px] w-[602px] max-md:max-w-full"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/bb523048b9fe90ee421e603f24d58827331b1a70948bb9a469f6a1e9f68b80be?apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/bb523048b9fe90ee421e603f24d58827331b1a70948bb9a469f6a1e9f68b80be?apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/bb523048b9fe90ee421e603f24d58827331b1a70948bb9a469f6a1e9f68b80be?apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/bb523048b9fe90ee421e603f24d58827331b1a70948bb9a469f6a1e9f68b80be?apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/bb523048b9fe90ee421e603f24d58827331b1a70948bb9a469f6a1e9f68b80be?apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/bb523048b9fe90ee421e603f24d58827331b1a70948bb9a469f6a1e9f68b80be?apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/bb523048b9fe90ee421e603f24d58827331b1a70948bb9a469f6a1e9f68b80be?apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/bb523048b9fe90ee421e603f24d58827331b1a70948bb9a469f6a1e9f68b80be?apiKey=fd68332350f04fa6815471d918ff3511&"
                className="object-contain aspect-[1.13] min-w-[240px] w-[349px]"
              />
              <img
                loading="lazy"
                srcSet="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/d03f4b83aff18593f7e1afd2a46ddbd677a46d41a36c0cbb863fe1d1edc2cb19?apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/d03f4b83aff18593f7e1afd2a46ddbd677a46d41a36c0cbb863fe1d1edc2cb19?apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/d03f4b83aff18593f7e1afd2a46ddbd677a46d41a36c0cbb863fe1d1edc2cb19?apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/d03f4b83aff18593f7e1afd2a46ddbd677a46d41a36c0cbb863fe1d1edc2cb19?apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/d03f4b83aff18593f7e1afd2a46ddbd677a46d41a36c0cbb863fe1d1edc2cb19?apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/d03f4b83aff18593f7e1afd2a46ddbd677a46d41a36c0cbb863fe1d1edc2cb19?apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/d03f4b83aff18593f7e1afd2a46ddbd677a46d41a36c0cbb863fe1d1edc2cb19?apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/d03f4b83aff18593f7e1afd2a46ddbd677a46d41a36c0cbb863fe1d1edc2cb19?apiKey=fd68332350f04fa6815471d918ff3511&"
                className="object-contain shrink-0 aspect-[0.91] min-w-[240px] w-[287px]"
              />
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
              {/* <div className="flex flex-col justify-between p-4 w-full min-h-[465px] max-md:max-w-full">
                <div className="gap-2.5 self-stretch p-4 w-full rounded-xl border border-solid bg-slate-200 border-slate-400">
                  Email :
                </div>
                <div className="gap-2.5 px-4 pt-2 pb-40 mt-14 w-full rounded-xl border border-solid bg-slate-200 border-slate-400 min-h-[194px] max-md:pb-24 max-md:mt-10">
                  Message :{" "}
                </div>
                <div className="flex-1 shrink gap-2 self-stretch px-4 py-5 mt-14 max-w-full text-center text-white whitespace-nowrap bg-indigo-800 rounded-xl min-h-[64px] w-[221px] max-md:mt-10">
                  Send
                </div>
              </div> */}
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
                      123456789
                    </div>
                  </div>
                </div>
                <div className="flex gap-5 items-start px-4 py-2 mt-4 w-full">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/dc3027afe6853e9672cc08fd2e6e50aa50a1ccc6fd5ceba1e40366d7b17da102?apiKey=fd68332350f04fa6815471d918ff3511&"
                    className="object-contain shrink-0 w-6 aspect-square"
                  />
                  <div className="flex flex-col flex-1 shrink justify-center basis-0 min-w-[240px]">
                    <div className="gap-5 self-start text-base whitespace-nowrap text-slate-700">
                      Address
                    </div>
                    <div className="mt-5 text-sm tracking-widest text-indigo-800">
                      Downs st. Vancouver,Canada
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
              </div>
            </div>
          </div>
          <div className="overflow-hidden px-16 py-14 mt-8 w-full text-base text-white bg-indigo-800 max-md:px-5 max-md:max-w-full">
            TowerEdge Copyright © 2024
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Main;