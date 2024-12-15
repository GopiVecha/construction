import * as React from "react";

function MyComponent() {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      <div className="flex overflow-hidden flex-col justify-center items-center px-16 py-4 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between w-full max-w-[1216px] max-md:max-w-full">
          <div className="flex gap-3.5 text-3xl font-bold text-blue-800 whitespace-nowrap">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/ae9f6629a664464194fa830eed3252340376b3a486ab6637454dc06462a7a864?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
              className="object-contain shrink-0 aspect-[0.79] w-[38px]"
            />
            <div className="my-auto basis-auto">TheBox</div>
          </div>
          <div className="flex flex-wrap gap-10 items-start my-auto text-lg text-zinc-900 max-md:max-w-full">
            <div>Home</div>
            <div>About Us</div>
            <div>Projects</div>
            <div>Services</div>
            <div className="font-semibold text-orange-400">Contact Us</div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden relative flex-col items-end pt-60 pl-20 w-full min-h-[646px] max-md:pt-24 max-md:pl-5 max-md:max-w-full">
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ba9b52373f94993e0639a40383ca15a36bf56537d9a544b88db3f692f5fc113a?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba9b52373f94993e0639a40383ca15a36bf56537d9a544b88db3f692f5fc113a?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba9b52373f94993e0639a40383ca15a36bf56537d9a544b88db3f692f5fc113a?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba9b52373f94993e0639a40383ca15a36bf56537d9a544b88db3f692f5fc113a?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba9b52373f94993e0639a40383ca15a36bf56537d9a544b88db3f692f5fc113a?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba9b52373f94993e0639a40383ca15a36bf56537d9a544b88db3f692f5fc113a?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba9b52373f94993e0639a40383ca15a36bf56537d9a544b88db3f692f5fc113a?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ba9b52373f94993e0639a40383ca15a36bf56537d9a544b88db3f692f5fc113a?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
          className="object-cover absolute inset-0 size-full"
        />
        <div className="relative self-start text-7xl font-semibold text-slate-800 w-[556px] max-md:max-w-full max-md:text-4xl">
          Building things is our mission.
        </div>
        <div className="flex relative flex-col items-center px-2.5 py-6 mt-12 max-w-full text-center text-white bg-blue-700 rounded-sm min-h-[150px] w-[416px] max-md:mt-10">
          <div className="text-xl font-bold">Feature Projects</div>
          <div className="mt-5 text-2xl">
            The National University of Architecture
          </div>
        </div>
        <div className="flex relative gap-px max-w-full w-[416px]">
          <div className="flex overflow-hidden flex-1 gap-2.5 justify-center items-center px-5 py-3 bg-slate-800 min-h-[40px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a18b672b644c3726224156cfbff54afae5af6085caf5a9eee7742774427a597e?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
              className="object-contain self-stretch my-auto aspect-[1.59] fill-white w-[27px]"
            />
          </div>
          <div className="flex overflow-hidden flex-1 gap-2.5 justify-center items-center px-5 py-3 bg-slate-800 min-h-[40px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6193735f5a1f8ea74f7d2345f63315b7545306ced233b71e17927b0256a9ea85?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
              className="object-contain self-stretch my-auto aspect-[1.45] fill-white w-[26px]"
            />
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1020px] max-md:max-w-full">
          <div className="self-center text-4xl font-bold text-center text-slate-800">
            Our Reputation
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center pt-5 pr-5 pb-10 pl-5 w-full bg-white rounded border-solid border-[1.4px] border-zinc-200 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/aeb08d5cca5a6343d7fc38c5105c970c6a3a98193a9893eda4d4b54b6eb86c98?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                    className="object-contain w-10 aspect-square"
                  />
                  <div className="mt-5 text-xl font-bold text-slate-700">
                    Best Services
                  </div>
                  <div className="mt-5 text-base text-slate-400">
                    Nullam senectus porttitor in eget. Eget rutrum leo interdum.
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center pt-5 pr-5 pb-10 pl-5 w-full bg-white rounded border-solid border-[1.4px] border-zinc-200 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/64ff929556f3a86f7d3256b49e90d78dc0fd5264f7eac4ac4404e75e50bc0f11?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                    className="object-contain w-10 aspect-square"
                  />
                  <div className="mt-5 text-xl font-bold text-slate-700">
                    Best Teams
                  </div>
                  <div className="mt-5 text-base text-slate-400">
                    Cursus semper tellus volutpat aliquet lacus.{" "}
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center pt-5 pr-5 pb-10 pl-5 w-full bg-white rounded border-solid border-[1.4px] border-zinc-200 max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/acba0e6adace6cc5c81cd8db96ba8cf7ced34e2176f50e59f38ed6bc7aee2077?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                    className="object-contain w-10 aspect-square"
                  />
                  <div className="mt-5 text-xl font-bold text-slate-700">
                    Best Designs
                  </div>
                  <div className="mt-5 text-base text-slate-400">
                    Ultricies at ipsum nunc, tristique nam lectus.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col items-end px-20 pt-36 pb-72 w-full text-white bg-white max-md:px-5 max-md:py-24 max-md:max-w-full">
        <div className="flex overflow-hidden flex-col items-start px-16 py-14 mb-0 max-w-full bg-blue-800 rounded-sm shadow-xl w-[488px] max-md:px-5 max-md:mb-2.5">
          <div className="text-4xl font-bold">About us</div>
          <div className="self-stretch mt-9 text-xl">
            For more than 30 years we have been delivering world-class
            construction and we’ve built many lasting relationships along the
            way. 

We’ve matured into an industry leader and trusted resource
            for those seeking quality, innovation and reliability when building
            in the U.S.
          </div>
          <div className="gap-2.5 self-stretch px-5 py-4 mt-20 text-lg font-semibold text-center text-blue-800 bg-white rounded-md border-2 border-blue-800 border-solid max-md:mt-10">
            More on Our History
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col items-center px-20 pt-11 pb-20 w-full bg-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1008px] max-md:max-w-full">
          <div className="max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center items-center px-5 py-10 mt-20 w-full text-xl font-semibold text-center text-blue-800 whitespace-nowrap bg-white rounded shadow-2xl min-h-[181px] max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5a09fafdc31ceb60e3007258a004f8e11a441185e82c1c1baae8a35c47c92c3?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                    className="object-contain w-10 aspect-square"
                  />
                  <div className="flex mt-5 bg-zinc-200 min-h-[2px] w-[60px]" />
                  <div className="mt-5">Construction</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow text-center whitespace-nowrap max-md:mt-10">
                  <div className="self-center text-4xl font-bold text-slate-800">
                    Services
                  </div>
                  <div className="flex flex-col justify-center items-center px-5 py-10 mt-9 text-xl font-semibold text-white bg-blue-800 rounded shadow-2xl min-h-[181px]">
                    <img
                      loading="lazy"
                      src="https://cdn.builder.io/api/v1/image/assets/TEMP/d4cc138f5749dbc612aa7ad82b26c74eb59622ef362a124182138d9793faf53a?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                      className="object-contain w-10 aspect-square"
                    />
                    <div className="flex mt-5 bg-zinc-200 min-h-[2px] w-[60px]" />
                    <div className="mt-5">Renovation</div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center items-center px-5 py-10 mt-20 w-full text-xl font-semibold text-center text-blue-800 whitespace-nowrap bg-white rounded shadow-2xl min-h-[181px] max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/659ba15fd40f5b26e47cd2f2a075a23261988ca6d6f5ea54edb7ff38034af7ef?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                    className="object-contain w-10 aspect-square"
                  />
                  <div className="flex mt-5 bg-zinc-200 min-h-[2px] w-[60px]" />
                  <div className="mt-5">Consultation</div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-12 max-md:mt-10 max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center items-center px-5 py-10 w-full text-xl font-semibold text-center text-white bg-blue-800 rounded shadow-2xl min-h-[181px] max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/f56eca019434424adb1a51f8bbfb165349c56340ab62c37c18e5bd4fdce1f37b?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                    className="object-contain w-10 aspect-square"
                  />
                  <div className="flex mt-5 bg-zinc-200 min-h-[2px] w-[60px]" />
                  <div className="mt-5">Repair Services</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center items-center px-5 py-10 w-full text-xl font-semibold text-center text-blue-800 whitespace-nowrap bg-white rounded shadow-2xl min-h-[181px] max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/672cf638214ef09a22af835d7c83806618383935083f8d92fb926ba11a7a980a?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                    className="object-contain w-10 aspect-square"
                  />
                  <div className="flex mt-5 bg-zinc-200 min-h-[2px] w-[60px]" />
                  <div className="mt-5">Architecture</div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col grow justify-center items-center px-5 py-10 w-full text-xl font-semibold text-center text-white whitespace-nowrap bg-blue-800 rounded shadow-2xl min-h-[181px] max-md:mt-10">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/849ffa823768553e8133297b123d2476881709e0e0853e926c85e6ec61c6a3ea?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                    className="object-contain w-10 aspect-square"
                  />
                  <div className="flex mt-5 bg-zinc-200 min-h-[2px] w-[60px]" />
                  <div className="mt-5">Electric</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col items-center px-20 pt-24 pb-14 w-full bg-white max-md:px-5 max-md:pt-24 max-md:max-w-full">
        <div className="flex z-10 items-start max-w-full w-[308px]">
          <div className="flex flex-col grow shrink-0 justify-center self-end py-8 pl-8 mt-5 mr-0 bg-white rounded border border-white border-solid shadow-lg basis-0 w-fit">
            <div className="text-7xl font-semibold text-slate-800 max-md:text-4xl">
              84
            </div>
            <div className="flex gap-3 pl-4 max-w-full text-2xl text-slate-500 w-[273px]">
              <div className="flex shrink-0 h-7 bg-orange-400 w-[7px]" />
              <div className="my-auto w-[238px]">Happy Clients</div>
            </div>
          </div>
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/93bb50e841595b2d8be199a1a8c6973b091f77439b245e3648094825911cd4d6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/93bb50e841595b2d8be199a1a8c6973b091f77439b245e3648094825911cd4d6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93bb50e841595b2d8be199a1a8c6973b091f77439b245e3648094825911cd4d6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/93bb50e841595b2d8be199a1a8c6973b091f77439b245e3648094825911cd4d6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/93bb50e841595b2d8be199a1a8c6973b091f77439b245e3648094825911cd4d6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/93bb50e841595b2d8be199a1a8c6973b091f77439b245e3648094825911cd4d6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/93bb50e841595b2d8be199a1a8c6973b091f77439b245e3648094825911cd4d6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/93bb50e841595b2d8be199a1a8c6973b091f77439b245e3648094825911cd4d6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
            className="object-contain shrink-0 self-start aspect-square w-[97px]"
          />
        </div>
        <div className="flex z-10 items-start self-start mt-0 max-w-full w-[394px]">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ddbcd3dfa5cab2eabb56e0616c7c86f9b7724131784b4d7cc2f5b81d265d6a98?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddbcd3dfa5cab2eabb56e0616c7c86f9b7724131784b4d7cc2f5b81d265d6a98?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddbcd3dfa5cab2eabb56e0616c7c86f9b7724131784b4d7cc2f5b81d265d6a98?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddbcd3dfa5cab2eabb56e0616c7c86f9b7724131784b4d7cc2f5b81d265d6a98?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddbcd3dfa5cab2eabb56e0616c7c86f9b7724131784b4d7cc2f5b81d265d6a98?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddbcd3dfa5cab2eabb56e0616c7c86f9b7724131784b4d7cc2f5b81d265d6a98?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddbcd3dfa5cab2eabb56e0616c7c86f9b7724131784b4d7cc2f5b81d265d6a98?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ddbcd3dfa5cab2eabb56e0616c7c86f9b7724131784b4d7cc2f5b81d265d6a98?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
            className="object-contain shrink-0 aspect-square w-[79px]"
          />
          <div className="flex flex-col grow shrink-0 justify-center items-start p-8 mt-12 bg-white rounded border border-white border-solid shadow-lg basis-0 w-fit max-md:px-5 max-md:mt-10">
            <div className="text-7xl font-semibold text-center text-slate-800 max-md:text-4xl">
              123
            </div>
            <div className="flex gap-3 pl-4 max-w-full text-2xl text-slate-500 w-[273px]">
              <div className="flex shrink-0 h-7 bg-orange-400 w-[7px]" />
              <div className="my-auto w-[238px]">Projects Completed</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col self-end -mt-48 max-w-full w-[359px]">
          <div className="text-6xl font-bold text-blue-800 max-md:text-4xl">
            30 Years Experience
          </div>
          <div className="self-start mt-10 text-xl text-slate-600">
            Our company has been the leading provided construction services to
            clients throughout the USA since 1988.
          </div>
        </div>
        <img
          loading="lazy"
          srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/25ff944ff985a239db91df21a73292e4257c4ee7d96e9d1a8b2826a148706790?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/25ff944ff985a239db91df21a73292e4257c4ee7d96e9d1a8b2826a148706790?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25ff944ff985a239db91df21a73292e4257c4ee7d96e9d1a8b2826a148706790?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/25ff944ff985a239db91df21a73292e4257c4ee7d96e9d1a8b2826a148706790?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/25ff944ff985a239db91df21a73292e4257c4ee7d96e9d1a8b2826a148706790?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/25ff944ff985a239db91df21a73292e4257c4ee7d96e9d1a8b2826a148706790?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/25ff944ff985a239db91df21a73292e4257c4ee7d96e9d1a8b2826a148706790?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/25ff944ff985a239db91df21a73292e4257c4ee7d96e9d1a8b2826a148706790?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
          className="object-contain z-10 mt-0 aspect-square w-[93px]"
        />
        <div className="flex flex-col justify-center py-8 pl-8 mt-0 max-w-full bg-white rounded border border-white border-solid shadow-lg w-[276px] max-md:pl-5">
          <div className="text-7xl font-semibold text-slate-800 max-md:text-4xl">
            37
          </div>
          <div className="flex gap-3 pl-4 w-full text-2xl text-slate-500">
            <div className="flex shrink-0 h-7 bg-orange-400 w-[7px]" />
            <div className="my-auto w-[238px]">Awards Win</div>
          </div>
        </div>
        <div className="flex flex-wrap gap-5 justify-between max-w-full w-[859px]">
          <div className="flex items-start">
            <div className="flex flex-col grow shrink-0 justify-center self-start p-8 mr-0 bg-white rounded border border-white border-solid shadow-lg basis-0 w-fit max-md:px-5">
              <div className="text-7xl font-semibold text-slate-800 max-md:text-4xl">
                30
              </div>
              <div className="flex gap-3 pl-4 max-w-full text-2xl text-slate-500 w-[273px]">
                <div className="flex shrink-0 h-7 bg-orange-400 w-[7px]" />
                <div className="my-auto w-[238px]">Years in Business</div>
              </div>
            </div>
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/1acdff5140a66eee293ba537c1aa5dde77495a2b228fa914fc801098f90f5a59?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/1acdff5140a66eee293ba537c1aa5dde77495a2b228fa914fc801098f90f5a59?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1acdff5140a66eee293ba537c1aa5dde77495a2b228fa914fc801098f90f5a59?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/1acdff5140a66eee293ba537c1aa5dde77495a2b228fa914fc801098f90f5a59?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/1acdff5140a66eee293ba537c1aa5dde77495a2b228fa914fc801098f90f5a59?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/1acdff5140a66eee293ba537c1aa5dde77495a2b228fa914fc801098f90f5a59?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/1acdff5140a66eee293ba537c1aa5dde77495a2b228fa914fc801098f90f5a59?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/1acdff5140a66eee293ba537c1aa5dde77495a2b228fa914fc801098f90f5a59?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
              className="object-contain shrink-0 self-end mt-28 aspect-square w-[84px] max-md:mt-10"
            />
          </div>
          <div className="gap-2.5 self-start px-5 py-4 mt-6 text-lg font-semibold text-center text-white bg-blue-800 rounded-sm">
            Contact Us
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col w-full bg-white max-md:max-w-full">
        <div className="flex relative flex-col justify-center items-center px-16 py-24 w-full min-h-[300px] max-md:px-5 max-md:max-w-full">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/5a009b2e3cdd6e47e7e572be8ecab1df148e6abc4932e0c9ac68644bdeef6cdc?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a009b2e3cdd6e47e7e572be8ecab1df148e6abc4932e0c9ac68644bdeef6cdc?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a009b2e3cdd6e47e7e572be8ecab1df148e6abc4932e0c9ac68644bdeef6cdc?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a009b2e3cdd6e47e7e572be8ecab1df148e6abc4932e0c9ac68644bdeef6cdc?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a009b2e3cdd6e47e7e572be8ecab1df148e6abc4932e0c9ac68644bdeef6cdc?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a009b2e3cdd6e47e7e572be8ecab1df148e6abc4932e0c9ac68644bdeef6cdc?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a009b2e3cdd6e47e7e572be8ecab1df148e6abc4932e0c9ac68644bdeef6cdc?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/5a009b2e3cdd6e47e7e572be8ecab1df148e6abc4932e0c9ac68644bdeef6cdc?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
            className="object-cover absolute inset-0 size-full"
          />
          <div className="relative w-full max-w-[1168px] max-md:max-w-full">
            <div className="flex gap-5 max-md:flex-col">
              <div className="flex flex-col w-[76%] max-md:ml-0 max-md:w-full">
                <div className="flex relative flex-col grow max-md:mt-10 max-md:max-w-full">
                  <div className="text-4xl font-bold text-white max-md:max-w-full">
                    Free consultation with exceptional quality
                  </div>
                  <div className="self-start mt-8 text-2xl text-white underline decoration-auto decoration-solid underline-offset-auto">
                    Just one call away:{" "}
                    <span className="text-white underline">+84 1102 2703</span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col ml-5 w-[24%] max-md:ml-0 max-md:w-full">
                <div className="relative gap-2.5 self-stretch px-5 py-4 my-auto w-full text-lg font-semibold text-center text-white rounded-sm border-2 border-white border-solid max-md:mt-10">
                  Get your consultation
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col items-center px-16 pt-24 pb-36 w-full bg-white max-md:px-5 max-md:pb-24 max-md:max-w-full">
        <div className="flex flex-wrap gap-5 justify-between items-start -mb-7 w-full max-w-[1216px] max-md:mb-2.5 max-md:max-w-full">
          <div className="flex flex-col items-start self-start text-2xl font-medium whitespace-nowrap text-slate-300">
            <div className="self-stretch text-4xl font-bold text-slate-800 max-md:mr-2.5">
              Projects
            </div>
            <div className="flex gap-4 items-center mt-10 font-bold text-center text-blue-800">
              <div className="flex shrink-0 self-stretch my-auto w-1 h-7 bg-blue-800" />
              <div className="self-stretch my-auto">All</div>
            </div>
            <div className="flex gap-4 items-center self-stretch mt-5 text-center">
              <div className="flex shrink-0 self-stretch my-auto w-1 h-7" />
              <div className="self-stretch my-auto">Commercial</div>
            </div>
            <div className="flex gap-4 items-center mt-5 text-center">
              <div className="flex shrink-0 self-stretch my-auto w-1 h-7" />
              <div className="self-stretch my-auto">Residential</div>
            </div>
            <div className="flex gap-4 items-center mt-5 text-center">
              <div className="flex shrink-0 self-stretch my-auto w-1 h-7" />
              <div className="self-stretch my-auto">Other</div>
            </div>
          </div>
          <div className="flex flex-col self-end mt-20 max-md:mt-10 max-md:max-w-full">
            <div className="max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white rounded-sm max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/51f42fd41d60bc44a528072913c8d8c70be19964e9fd8d2201895559e86fa713?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/51f42fd41d60bc44a528072913c8d8c70be19964e9fd8d2201895559e86fa713?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51f42fd41d60bc44a528072913c8d8c70be19964e9fd8d2201895559e86fa713?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/51f42fd41d60bc44a528072913c8d8c70be19964e9fd8d2201895559e86fa713?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/51f42fd41d60bc44a528072913c8d8c70be19964e9fd8d2201895559e86fa713?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/51f42fd41d60bc44a528072913c8d8c70be19964e9fd8d2201895559e86fa713?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/51f42fd41d60bc44a528072913c8d8c70be19964e9fd8d2201895559e86fa713?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/51f42fd41d60bc44a528072913c8d8c70be19964e9fd8d2201895559e86fa713?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                      className="object-contain w-full aspect-[1.56]"
                    />
                    <div className="flex flex-col justify-center px-3 pt-3 pb-4 w-full bg-blue-800">
                      <div className="text-xl font-bold">
                        Wildstone Infra Hotel
                      </div>
                      <div className="mt-3 text-lg">
                        2715 Ash Dr. San Jose, South Dakota
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white rounded-sm max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/a85d6aac14ae442f65783e6bae5edd9ad6bd00a8ca000f6969cf4689792df1e6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/a85d6aac14ae442f65783e6bae5edd9ad6bd00a8ca000f6969cf4689792df1e6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a85d6aac14ae442f65783e6bae5edd9ad6bd00a8ca000f6969cf4689792df1e6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/a85d6aac14ae442f65783e6bae5edd9ad6bd00a8ca000f6969cf4689792df1e6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/a85d6aac14ae442f65783e6bae5edd9ad6bd00a8ca000f6969cf4689792df1e6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/a85d6aac14ae442f65783e6bae5edd9ad6bd00a8ca000f6969cf4689792df1e6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/a85d6aac14ae442f65783e6bae5edd9ad6bd00a8ca000f6969cf4689792df1e6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/a85d6aac14ae442f65783e6bae5edd9ad6bd00a8ca000f6969cf4689792df1e6?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                      className="object-contain w-full aspect-[1.56]"
                    />
                    <div className="flex flex-col justify-center px-3 pt-3 pb-4 w-full bg-blue-800">
                      <div className="text-xl font-bold">
                        Wish Stone Building
                      </div>
                      <div className="mt-3 text-lg">
                        2972 Westheimer Rd. Santa Ana, Illinois{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-8 max-md:max-w-full">
              <div className="flex gap-5 max-md:flex-col">
                <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white rounded-sm max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/54ff1c06cf6e5aa9b57a8b8050d60bf357db92110762ff260ff3417e94179058?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/54ff1c06cf6e5aa9b57a8b8050d60bf357db92110762ff260ff3417e94179058?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/54ff1c06cf6e5aa9b57a8b8050d60bf357db92110762ff260ff3417e94179058?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/54ff1c06cf6e5aa9b57a8b8050d60bf357db92110762ff260ff3417e94179058?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/54ff1c06cf6e5aa9b57a8b8050d60bf357db92110762ff260ff3417e94179058?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/54ff1c06cf6e5aa9b57a8b8050d60bf357db92110762ff260ff3417e94179058?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/54ff1c06cf6e5aa9b57a8b8050d60bf357db92110762ff260ff3417e94179058?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/54ff1c06cf6e5aa9b57a8b8050d60bf357db92110762ff260ff3417e94179058?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                      className="object-contain w-full aspect-[1.56]"
                    />
                    <div className="flex flex-col justify-center px-3 pt-3 pb-4 w-full bg-blue-800">
                      <div className="text-xl font-bold">
                        Mr. Parkinston’s House
                      </div>
                      <div className="mt-3 text-lg">
                        3517 W. Gray St. Utica, Pennsylvania
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
                  <div className="flex flex-col grow text-white rounded-sm max-md:mt-8">
                    <img
                      loading="lazy"
                      srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/9d80c8042eea73f44d863ed57644276749914ff9200f0903a1960c2202a7e975?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d80c8042eea73f44d863ed57644276749914ff9200f0903a1960c2202a7e975?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d80c8042eea73f44d863ed57644276749914ff9200f0903a1960c2202a7e975?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d80c8042eea73f44d863ed57644276749914ff9200f0903a1960c2202a7e975?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d80c8042eea73f44d863ed57644276749914ff9200f0903a1960c2202a7e975?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d80c8042eea73f44d863ed57644276749914ff9200f0903a1960c2202a7e975?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d80c8042eea73f44d863ed57644276749914ff9200f0903a1960c2202a7e975?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/9d80c8042eea73f44d863ed57644276749914ff9200f0903a1960c2202a7e975?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                      className="object-contain w-full aspect-[1.56]"
                    />
                    <div className="flex flex-col justify-center px-3 pt-3 pb-4 w-full bg-blue-800">
                      <div className="text-xl font-bold">Oregano Height</div>
                      <div className="mt-3 text-lg">
                        2464 Royal Ln. Mesa, New Jersey{" "}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap gap-8 justify-between items-center mt-8 w-full max-md:max-w-full">
              <div className="flex overflow-hidden gap-2.5 justify-center items-center self-stretch px-5 py-6 my-auto bg-slate-800 min-h-[64px] min-w-[240px] w-[295px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/3be4877770fd10447651c8215aa47b3be9cc58e3907ea4519aabeb136b96ab11?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                  className="object-contain self-stretch my-auto aspect-[1.63] fill-white w-[26px]"
                />
              </div>
              <div className="flex gap-4 items-center self-stretch my-auto">
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 bg-blue-800 rounded-full fill-blue-800" />
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-neutral-100 fill-neutral-100" />
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-neutral-100 fill-neutral-100" />
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-neutral-100 fill-neutral-100" />
                <div className="flex shrink-0 self-stretch my-auto w-4 h-4 rounded-full bg-neutral-100 fill-neutral-100" />
              </div>
              <div className="flex overflow-hidden gap-2.5 justify-center items-center self-stretch px-5 py-6 my-auto bg-slate-800 min-h-[64px] min-w-[240px] w-[295px]">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/1d6189b8b0921062be35b303724a85b99ce28ffdf509848a51edc0d6993aa3f5?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                  className="object-contain self-stretch my-auto aspect-[1.45] fill-white w-[26px]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-16 w-full text-lg bg-neutral-100 max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col max-w-full w-[592px]">
          <div className="self-center text-4xl font-bold text-slate-800 max-md:max-w-full">
            What can us do for you?
          </div>
          <div className="self-center mt-5 text-xl text-center text-slate-800 max-md:max-w-full">
            We are ready to work on a project of any complexity, whether it’s
            commercial or residential.
          </div>
          <div className="flex flex-wrap gap-8 mt-10 w-full text-red-400 max-md:max-w-full">
            <div className="flex-auto gap-2.5 self-stretch px-2 py-2.5 bg-white rounded border border-solid border-zinc-200">
              <span className="text-slate-400">Your Name</span>
              <span className="font-bold text-red-400">*</span>
            </div>
            <div className="flex-auto gap-2.5 self-stretch px-2 py-2.5 bg-white rounded border border-solid border-zinc-200">
              <span className="text-slate-400">Email</span>
              <span className="font-bold text-red-400">*</span>
            </div>
          </div>
          <div className="flex flex-wrap gap-8 mt-5 w-full max-md:max-w-full">
            <div className="flex flex-auto gap-10 justify-between items-center px-2 py-2.5 text-red-400 bg-white rounded border border-solid border-zinc-200">
              <div className="self-stretch my-auto">
                <span className="text-slate-400">Reason for Contacting</span>
                <span className="font-bold text-red-400">*</span>
              </div>
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/de6f5d348678d03439c1c26159ceac4a8a600ca5fd2a5810fafe2261c394ea50?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                className="object-contain shrink-0 self-stretch my-auto w-5 aspect-square"
              />
            </div>
            <div className="flex-auto gap-2.5 self-stretch px-2 py-2.5 whitespace-nowrap bg-white rounded border border-solid border-zinc-200 text-slate-400">
              Phone
            </div>
          </div>
          <div className="gap-2.5 px-2 pt-2.5 pb-28 mt-5 whitespace-nowrap bg-white rounded border border-solid border-zinc-200 min-h-[135px] text-slate-400 max-md:pb-24">
            Message
          </div>
          <div className="self-start mt-2 text-base text-slate-500">
            <span className="text-red-700">*</span>{" "}
            <span className="text-slate-500">indicates a required field</span>
          </div>
          <div className="gap-2.5 self-center px-5 py-4 mt-7 max-w-full font-semibold text-center text-white whitespace-nowrap bg-blue-800 rounded-sm w-[271px]">
            Submit
          </div>
        </div>
      </div>
      <div className="flex overflow-hidden flex-col justify-center items-center px-20 py-20 w-full bg-white max-md:px-5 max-md:max-w-full">
        <div className="flex flex-col w-full max-w-[1216px] max-md:max-w-full">
          <div className="flex flex-wrap gap-5 justify-between max-md:max-w-full">
            <div className="flex flex-col items-start self-start text-xl max-md:max-w-full">
              <div className="flex gap-3.5 items-start self-stretch max-md:max-w-full">
                <div className="font-medium text-blue-800">Address:</div>
                <div className="capitalize text-slate-800">
                  6391 Elgin St. Celina, Delaware 10299
                </div>
              </div>
              <div className="flex gap-9 items-start mt-8">
                <div className="font-medium text-blue-800">Phone:</div>
                <div className="capitalize text-slate-800">+84 1102 2703</div>
              </div>
              <div className="flex gap-10 items-start mt-8 whitespace-nowrap">
                <div className="font-medium text-blue-800">Email:</div>
                <div className="text-black">hello@thebox.com</div>
              </div>
            </div>
            <div className="flex flex-col max-md:max-w-full">
              <div className="flex gap-2 w-full max-md:max-w-full">
                <div className="flex flex-col grow shrink-0 basis-0 w-fit">
                  <div className="self-start text-xl font-medium text-blue-800">
                    Newsletter:
                  </div>
                  <div className="gap-2.5 self-stretch px-2 py-2.5 mt-5 text-lg bg-white rounded border border-solid border-zinc-200 text-slate-400">
                    Your email here
                  </div>
                </div>
                <div className="gap-2.5 self-end px-5 py-2.5 mt-11 text-lg font-semibold text-center text-white whitespace-nowrap bg-orange-400 rounded min-h-[41px] max-md:mt-10">
                  Subscribe
                </div>
              </div>
              <div className="self-start mt-11 text-xl font-medium text-blue-800 max-md:mt-10">
                Social:
              </div>
            </div>
          </div>
          <div className="flex flex-wrap gap-120 mt-4 max-w-full w-[952px]">
            <div className="flex flex-1 gap-3.5 text-3xl font-bold text-blue-800 whitespace-nowrap">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/52c4adb5ecfbd02f8f0d1dae33e5cb518570b2f66384b38d418935b461296e20?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                className="object-contain shrink-0 aspect-[0.79] w-[38px]"
              />
              <div className="my-auto basis-auto">TowerEdge</div>
            </div>
            <div className="flex flex-1 gap-5 my-auto">
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3dd2eec2117215ec9e82ed0ab136cd18c900258d75c9f24655a69649c9ee4265?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                className="object-contain shrink-0 w-10 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/e220a2be92c4ebe324b72f875baed770636dabd66f5a0787ef2bfa5f97fd1fc1?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                className="object-contain shrink-0 w-10 aspect-square"
              />
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/314efb2f750f646d2d83f16cc3791eb6fd39cbc1495d160ae22b8a50712d77d8?placeholderIfAbsent=true&apiKey=fd68332350f04fa6815471d918ff3511"
                className="object-contain shrink-0 w-10 aspect-square"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="overflow-hidden px-16 py-7 w-full text-base text-white bg-blue-800 max-md:px-5 max-md:max-w-full">
        TowerEdge © 2024. All Rights Reserved
      </div>
    </div>
  );
}

export default MyComponent;