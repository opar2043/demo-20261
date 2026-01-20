import React, { useState } from "react";

const About = () => {
  const [showFull, setShowFull] = useState(false);

  const shortText = `
In recent years, the online gaming and betting industry in Bangladesh has seen exponential growth, attracting players who seek excitement and rewarding experiences. As more people embrace digital platforms, the demand for reliable and diverse gaming options has surged. Our platform stands out as a top choice, offering an extensive range of games and betting opportunities from renowned providers worldwide.
`;

  const fullText = `
In recent years, the online gaming and betting industry in Bangladesh has seen exponential growth, attracting players who seek excitement and rewarding experiences. As more people embrace digital platforms, the demand for reliable and diverse gaming options has surged. Our platform stands out as a top choice, offering an extensive range of games and betting opportunities from renowned providers worldwide.

With online betting becoming a mainstream entertainment choice, players now rely on platforms that offer both trust and variety. Among the most established names are Baji, Jeetbuzz, Six6s, Badsha, Bagh, and Citinow. These platforms deliver premium sports and casino betting experiences, featuring a broad spectrum of options including spreads, parlays, live bets, teasers, and prop wagers to satisfy every betting style.

One of the key factors that set us apart is the sheer variety of gaming options we offer. We’ve partnered with some of the most reputable game providers in the industry to bring you a world-class gaming experience. Whether you're into sports betting, casino games, or unique online gaming experiences, we’ve got you covered.

Our platform features games from Microgaming, SABA Sports, SBO Sports, Pocket Games, CQ9, JDB, Evolution, Big Gaming, BPOKER, KA Gaming, WorldMatch, LUDO, UG Sports, PLAYSTAR, SPRIBE, and many more.

When it comes to online gaming and betting in Bangladesh, our platform is second to none. We prioritize safety, security, and fair play, ensuring that your gaming experience is both enjoyable and secure.

If you’re ready to take your gaming and betting experience to the next level, join us today and start exploring all that our platform has to offer. Remember, your next big win could be just a click away!
`;

  return (
    <div className="w-full mx-auto px-4 md:px-12 py-10 bg-transparent">
      {/* Heading */}
      <h2 className="text-[#667281] font-bold uppercase text-lg mb-4">
        Baji Bangladesh - Leading Online Gaming and Betting Platform in Bangladesh
      </h2>

      {/* Text */}
      <p
        className="text-[#63717F] leading-relaxed text-sm whitespace-pre-line"
      >
        {showFull ? (
          <>
            {highlightText(fullText)}
          </>
        ) : (
          <>
            {highlightText(shortText)}
          </>
        )}
      </p>

      {/* Show More / Less */}
      <button
        onClick={() => setShowFull(!showFull)}
        className="mt-4 text-[#D09A48] font-medium text-sm hover:underline"
      >
        {showFull ? "Show Less" : "Show Full"}
      </button>
    </div>
  );
};

// 🔹 Highlight 5–6 important words in yellow + bold
const highlightText = (text) => {
  const highlights = [
    "Baji",
    "Microgaming",
    "SABA Sports",
    "Evolution",
    "fair play",
    "big win",
  ];

  let result = text;

  highlights.forEach((word) => {
    const regex = new RegExp(`(${word})`, "gi");
    result = result.replace(
      regex,
      `<span class="text-[#D09A48] font-bold">$1</span>`
    );
  });

  return <span dangerouslySetInnerHTML={{ __html: result }} />;
};

export default About;
