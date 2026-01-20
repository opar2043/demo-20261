import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTelegramPlane,
  FaWhatsapp,
  FaPinterestP,
} from "react-icons/fa";

const brandPartners = [
  {
    name: "Cazvip",
    image:
      "https://img.b112j.com/bj/h5/assets/images/footer/gaming_license.png?v=1768302048599&source=drccdnsrc",
  },
  {
    name: "Gaming Curaçao",
    image:
      "https://img.b112j.com/bj/h5/assets/v3/images/icon-set/official-brand-partner-type/cazvip.png?v=1768302048599&source=drccdnsrc",
  },
    {
    name: "Responsible Gaming",
    image:
      "https://img.b112j.com/bj/h5/assets/images/footer/gaming_license.png?v=1768302048599&source=drccdnsrc",
  },
];

const socials = [
  { icon: <FaFacebookF />, link: "#" },
  { icon: <FaInstagram />, link: "#" },
  { icon: <FaPinterestP />, link: "#" },
  { icon: <FaYoutube />, link: "#" },
  { icon: <FaTelegramPlane />, link: "#" },
  { icon: <FaWhatsapp />, link: "#" },
];

const OfficialPartner = () => {
  return (
    <div
     className="border-y border-[#262626] w-full mx-auto px-4 md:px-8 py-6"
    >
      <div className="grid grid-cols-2 md:grid-cols-3 ">
        {brandPartners.map((item, index) => (
          <div className="flex flex-col gap-1 justify-center">
            <p className="font-bold text-[#26B588]">{item.name}</p>
            <img
              key={index}
              src={item.image}
              alt={item.name}
              className="w-16 h-10"
            />
          </div>
        ))}
      </div>

      {/* <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        {socials.map((item, index) => (
          <a
            key={index}
            href={item.link}
            style={{
              color: "#657381",
              fontSize: "20px",
              border: "1px solid #657381",
              padding: "10px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "40px",
              height: "40px",
            }}
          >
            {item.icon}
          </a>
        ))}
      </div> */}
    </div>
  );
};

export default OfficialPartner;
