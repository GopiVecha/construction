import React from 'react';
import { motion } from "framer-motion";

const AboutUs = () => {
    const aboutInfo = [
        {
          iconSrc:
            "/mission.png",
          title: "Our Mission",
          description:
            "To Shape the future of telecommunications with trusted expertise and a commitment to quality"
        },
        {
            iconSrc:
              "/vision.png",
            title: "Our Vision",
            description:
              "To be a trusted Leader in delivering innovative and reliable engineering solutions in Telecom and beyond",
        },
        // {
        //     iconSrc:
        //       "/team.png",
        //     title: "Core Values",
        //     description:
        //       "At TowerEdge, we are committed to upholding Integrity, pursuing Excellence, and fostering Collaboration to drive sustainable success and build lasting relationships"
        // }   
    ]
    
    return (
        <>
            <section className="py-24 relative">
                <motion.div 
                  id="aboutus"
                  className="w-full flex flex-col max-w-7xl px-4 md:px-5 lg:px-5 mx-auto"
                  initial={{ opacity: 0, y: 100}}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  whileInView={{ opacity: 1, y: 0}}
                  viewport={{ once: true }}
                >
                    <div className="w-full justify-start items-center gap-8 grid lg:grid-cols-2 grid-cols-1">
                        <div className="w-full h-full flex-col justify-start lg:items-start items-center gap-10 inline-flex">
                            <div className="w-full flex-col justify-start lg:items-start items-center gap-12 flex">
                                <div className="flex gap-2.5 items-center py-4 max-w-full text-2xl font-medium text-indigo-700 w-[1142px]">
                                    <div className="flex flex-col justify-center self-stretch my-auto">
                                        <div className="gap-2.5 self-stretch">About TowerEdge</div>
                                        <div className="mt-2.5 max-w-full border-2 border-solid border-indigo-700 min-h-[2px] w-[190px]" />
                                    </div>
                                </div>
                                <p className="text-gray-500 text-lg font-normal leading-relaxed lg:text-start text-center">
                                    At<strong className="text-indigo-700 text-xl">&nbsp;TowerEdge </strong>
                                    ,we are dedicated to providing innovative, reliable, and sustainable engineering solutions that meet the diverse needs of our clients. Specializing in structural and civil engineering for telecommunications infrastructure, we are committed to delivering high-quality services with an unwavering focus on safety, efficiency, and cost-effectiveness.
                                    <br /><br />
                                    {/* <p className="text-gray-500 text-base font-normal leading-relaxed lg:text-start text-center">With a team of experienced engineers and consultants, TowerEdge integrates cutting-edge technology, in-depth industry knowledge, and a customer-centric approach to ensure the success of every project. We partner with clients across various industries, offering tailored solutions for tower design, maintenance, site acquisition, and structural assessments.</p>
                                    <br /> <br /> */}
                                    <strong >Established in 2024</strong>, TowerEdge is committed to setting new standards in tower infrastructure.From initial planning and design to construction and ongoing management, we ensure that each tower is built with
                                    <strong className="italic underline underline-offset-4 "> <br/>Precision and Reliability </strong>.
                                </p>
                            </div>
                        </div>
                        <motion.img
                          src="/AboutUs.jpg"
                          className="object-fill self-stretch lg:ml-4 my-auto aspect-[0.95] min-w-[240px] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] w-[553px] h-[420px] max-md:max-w-full"
                          alt="about Us image"
                          initial={{ opacity: 0, x: 300}}
                          transition={{ type: "spring", delay: 0.5 }}
                          whileInView={{ opacity: 1, x: 0}}
                          viewport={{ once: true, delay: 0.5 }}
                        />
                    </div>
                    <div className="grid grid-cols-3 mt-16 h-36 gap-4">
                        {aboutInfo.map((info) => (
                            <div className="grid grid-rows-[1fr_2fr] h-[95%]  rounded-xl border-2">
                                <div className="flex flex-row h-[90%] mt-2">
                                    <img
                                        loading="lazy"
                                        src={info.iconSrc}
                                        className="object-contain mx-4 shrink-0 w-6 aspect-square"
                                    />
                                    <h1 className='text-black text-lg mt-1 font-semibold text-left'>{info.title}</h1>
                                </div>
                                <div className='p-2 mb-2 w-[95%] mx-2'>
                                    <p className='text-base text-gray-400 font-medium text-wrap text-left'>{info.description}</p>
                                </div>
                            </div>
                        ))}
                        <div className="grid grid-rows-[1fr_2fr] h-[95%]  rounded-xl border-2">
                                <div className="flex flex-row h-[90%] mt-2">
                                    <img
                                        loading="lazy"
                                        src="/team.png"
                                        className="object-contain mx-4 shrink-0 w-6 aspect-square"
                                    />
                                    <h1 className='text-black text-lg mt-1 font-semibold text-left'>Core Values</h1>
                                </div>
                                <div className='p-2 mb-2 w-[95%] mx-2'>
                                    <p className='text-base text-gray-400 font-medium text-wrap text-left'>
                                    At TowerEdge, we are committed to upholding <strong className='text-indigo-600  underline underline-offset-2 italic'>Integrity</strong>, pursuing <strong className='text-indigo-600 italic underline underline-offset-2'>Excellence</strong>, and fostering <strong className='text-indigo-600 underline underline-offset-2 italic'>Collaboration</strong> to drive sustainable success and build lasting relationships
                                    </p>
                                </div>
                        </div>
                    </div>
                </motion.div>
            </section>
        </>
    )
}

export default AboutUs
