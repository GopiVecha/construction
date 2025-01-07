import * as React from "react";

// ImageThumbnail Component
function ImageThumbnail({ src, className }) {
    return (
        <img
            loading="lazy"
            src={src}
            alt=""
            className={`object-contain ${className}`}
        />
    );
}

// ThumbnailList Component
function ThumbnailList() {
    const thumbnails = [
        {
            //src: "https://cdn.builder.io/api/v1/image/assets/TEMP/c65c397ad63361c3b03d7d32d888deb9b808380d414f82d92b8b4a8918692ec6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511",
            src: "/call.png",
            className: "aspect-[1.06] p-4 w-[102px]",
            header: "Phone Number",
            details: "+91-9703030996",
            detailsAlign:""
        },
        {
            //src: "https://cdn.builder.io/api/v1/image/assets/TEMP/431779659fb39240dd35d9eb68726d617716c6d9a66652ec7c5d0a73194af12e?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511",
            src: "/linkedin.png",
            className: "p-4 mt-9 text-nowrap aspect-[1] w-[102px]",
            header: "Linkedin",
            details: "linkedin.com/company/toweredge-engineering-consultants",
            detailsAlign:""
        },
        {
            //src: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb0e99d62377640f871f656a7cff287f66cee48c5f638238c35e16dbf78b1bdd?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511",
            src: "/email.png",
            className: "mt-9 p-4 aspect-[1] w-[102px]",
            header: "Email Address",
            details: "info@toweredgeconsultants.com",
            detailsAlign: "mt-6"
        }
    ];

    return (
        <div className="flex flex-col">
            <div className="flex gap-2.5  py-4 pr-36 pl-12 w-full text-2xl text-indigo-700 max-md:px-5 max-md:max-w-full">
                <div className="flex flex-col  self-stretch my-auto">
                    <div className="gap-2.5 text-nowrap">Get in Touch With Us</div>
                    <div className="mt-2.5 max-w-full border-2 border-indigo-700 border-solid min-h-[2px] w-[220px]" />
                </div>
            </div>
            <div className="flex flex-col my-auto ml-10 py-12">
                {thumbnails.map((thumbnail, index) => (
                    <div className="flex">
                        <ImageThumbnail
                        key={index}
                        src={thumbnail.src}
                        className={thumbnail.className}
                        />
                        <div className={`flex flex-col  ${index == 1 ? 'mt-6' : 'mt-1'} text-black ${thumbnail.detailsAlign} w-[60%] items-start justify-center`}>
                            <h1 className="text-nowrap  text-xl">{thumbnail.header}</h1>
                            {index !== 0  ? 
                            <a href={ index == 1 ? `https:${thumbnail.details}` : `mailto:${thumbnail.details}`} target="_blank" className="text-base hover:underline hover:underline-offset-2 text-nowrap text-indigo-800 text-base font-bold mt-2">{thumbnail.details}</a>
                            :
                            <p className={`text-base text-nowrap text-gray-500 text-base font-semibold mt-2`}>{thumbnail.details}</p>
                        }
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

// ProductGallery Component
export function ProductGallery() {
    return (
        <div className="flex overflow-hidden flex-col w-full py-10 justify-center  max-md:px-5 max-md:py-24">
            <div className="flex flex-wrap gap-2 justify-between items-start px-20 pt-24 pb-8 w-full  bg-white rounded-xl max-md:px-5 max-md:pt-24 max-md:max-w-full">
                <ThumbnailList />
                <div className="flex flex-col self-start max-md:max-w-full">
                    <div className="z-10 self-end max-w-full w-[650px]">
                        <div className="flex gap-5 max-md:flex-col w-full">
                            <div className="flex flex-col rounded-lg bg-indigo-800 w-11/12 h-[512px] max-md:ml-0 max-md:w-full">
                                {/* <div className="flex shrink-0 mx-auto max-w-full rounded-xl h-[512px] w-[488px]" /> */}
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-[80%] mx-auto my-12 rounded-md text-slate-600 px-4 py-2 font-normal text-xl placeholder:text-slate-400 placeholder:text-left bg-white border focus:outline-none font-serif text-medium"
                                />

                                {/* Textarea for Message */}
                                <textarea
                                    placeholder="Enter Your Message Here"
                                    className="w-[80%] mx-auto my-4 h-[30%] rounded-md text-left text-slate-600 px-4 py-2 text-xl placeholder:text-slate-400 placeholder:text-left bg-white border focus:outline-none font-serif text-medium"
                                />

                                {/* Submit button */}
                                <button
                                    type="button"
                                    className="bg-indigo-600 w-[80%] text-xl h-16 mx-auto mb-12 mt-auto rounded-md transition-colors duration-300 hover:bg-indigo-700"
                                >
                                    Send Message
                                </button>

                            </div>
                            <div className="flex flex-col ml-5 w-3/12 max-md:ml-0 max-md:w-full">
                                <ImageThumbnail
                                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6408837a6163a80c33e980c6217dc0ba666a7a5671b4bb0bb92af2cfa991455f?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                                    className="shrink-0 mt-16 max-w-full aspect-square w-[167px] max-md:mt-10"
                                />
                            </div>
                        </div>
                    </div>
                    <ImageThumbnail
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/21c68948b599987f5b0e2006b8fe0f53a3af968adbca5a64d6c1078a11e570d5?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                        className="max-w-full aspect-square w-[107px]"
                    />
                </div>
            </div>
        </div>
    );
}
