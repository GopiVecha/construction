import React from "react";

const Card = ({ imgSrc, title, description, list }) => (
    <div className="relative flex items-end w-[300px] h-[250px] rounded-[15px] p-6 bg-white shadow-lg border-2 transition-transform duration-400 ease-out hover:translate-y-[20px] group">
        {/* <div className="absolute top-0 left-0 w-full h-full bg-black/60 rounded-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        <img
            src={imgSrc}
            alt={title}
            className="absolute top-0 left-0 w-full h-full object-cover rounded-[15px]"
        />
        <div className="absolute top-4 left-4 z-20 text-white text-xl font-bold">
            {title}
        </div> */}
        <div className="absolute top-0 left-0 w-full h-full bg-indigo-800 bg-opacity-90 p-4 rounded-[15px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
        {/* <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/fd68332350f04fa6815471d918ff3511/ac1ffa92df1b0212c11ace71661d0e95c8febccd12061480635ff3e32604c58f?apiKey=fd68332350f04fa6815471d918ff3511&"
            className="object-contain self-center w-10 aspect-square"
        /> */}
        {/* <div className="text-2xl font-bold absolute top-4 left-8 z-20 text-indigo-700 group-hover:text-white">
            {title}
        </div> */}
        <div className="text-2xl text-center font-bold absolute top-[40%] left-12 z-20 text-indigo-700 group-hover:text-white group-hover:top-4 group-hover:left-6">
            {title}
        </div>
        {/* Info */}
        <div className="relative z-20 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transform translate-y-[10px] transition-all duration-500">
            {/* <h1 className="text-xl font-bold">{title}</h1> */}
            {/* <p className="mt-2 text-sm tracking-wide">{description}</p> */}
            <ul role="list" className="list-disc pl-5 list-outside">
               {list.map((item, index) => (<li key={index} className="text-base text-left my-2">{item}</li>))}
            </ul>
        </div>
    </div>
);

const CardList = () => {
  const cards = [
    {
      imgSrc:
        "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
      title: "Engineering",
      description:
        "Lorem Ipsum is simply dummy text from the printing and typesetting industry.",
      list: ["Telecommunications Upgrades", "Design", "Civil & Electrical Construction", "Tower Services"]
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
      title: "Site Development",
      description:
        "Lorem Ipsum is simply dummy text from the printing and typesetting industry.",
      list: ["Telecommunications Upgrades", "Design", "Civil & Electrical Construction", "Tower Services"]
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&fit=crop&w=311&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
      title: "Small Cell & Fiber",
      description:
        "Lorem Ipsum is simply dummy text from the printing and typesetting industry.",
      list: ["Telecommunications Upgrades", "Design", "Civil & Electrical Construction", "Tower Services"]
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
      title: "Site Acquisition",
      description:
        "Lorem Ipsum is simply dummy text from the printing and typesetting industry.",
      list: ["Telecommunications Upgrades", "Design", "Civil & Electrical Construction", "Tower Services"]
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1425342605259-25d80e320565?auto=format&fit=crop&w=750&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
      title: "Utility/Oil & Gas",
      description:
        "Lorem Ipsum is simply dummy text from the printing and typesetting industry.",
      list: ["Telecommunications Upgrades", "Design", "Civil & Electrical Construction", "Tower Services"]
    },
    {
      imgSrc:
        "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?auto=format&fit=crop&w=311&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
      title: "Project Management",
      description:
        "Lorem Ipsum is simply dummy text from the printing and typesetting industry.",
      list: ["Telecommunications Upgrades", "Design", "Civil & Electrical Construction", "Tower Services"]
    },
  ];

  return (
    <div className="flex items-center my-10 justify-center w-full h-screen">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-[1000px] mx-auto mb-[100px]">
        {cards.map((card, index) => (
          <Card
            key={index}
            imgSrc={card.imgSrc}
            title={card.title}
            description={card.description}
            list={card.list}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
