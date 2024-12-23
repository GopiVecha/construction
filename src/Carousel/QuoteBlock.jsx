import React from 'react';

const QuoteBlock = () => {
  const blockquoteStyle = {
    background: `
      linear-gradient(to right, #039be5 4px, transparent 4px) 0 100%,
      linear-gradient(to left, #039be5 4px, transparent 4px) 100% 0,
      linear-gradient(to bottom, #039be5 4px, transparent 4px) 100% 0,
      linear-gradient(to top, #039be5 4px, transparent 4px) 0 100%`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '20px 20px',
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-lg max-w-2xl mx-auto mt-8">
      <blockquote
        className="text-lg italic text-indigo-800 font-semibold p-2"
        style={blockquoteStyle}
      >
        <p>
          {/* "It’s good to meet you, Dr. Banner. Your work on anti-electron collisions is unparalleled. And I’m a huge fan of the way you lose control and turn into an enormous green rage monster." */}
          "With a focus on excellence, we build more than just structures; we build the future of connectivity."{" "}
        </p>
        <cite className="block mt-4 text-right font-semibold text-gray-900">- Katari Kanaka Chaitanya | Founder & MD </cite>
      </blockquote>
    </div>
  );
};

export default QuoteBlock;
