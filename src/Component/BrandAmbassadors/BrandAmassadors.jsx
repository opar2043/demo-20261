import React from "react";

const brandAmbassadors = [
  {
    name: "Mia Khalifa",
    year: "2024 - 2025",
    image:
      "https://img.b112j.com/bj/h5/assets/v3/images/ambassador/mia-k.png?v=1768302048599&source=drccdnsrc",
  },
  {
    name: "Kevin Pietersen",
    year: "2024 - 2026",
    image:
      "https://img.b112j.com/bj/h5/assets/v3/images/ambassador/mia-k.png?v=1768302048599&source=drccdnsrc",
  },
  {
    name: "Wasim Akram",
    year: "2024 - 2025",
    image:
      "https://img.b112j.com/bj/h5/assets/v3/images/ambassador/mia-k.png?v=1768302048599&source=drccdnsrc",
  },
  {
    name: "Atahar Ali Khan",
    year: "2024 - 2025",
    image:
      "https://img.b112j.com/bj/h5/assets/v3/images/ambassador/mia-k.png?v=1768302048599&source=drccdnsrc",
  },
  {
    name: "WYasa Sagar",
    year: "2024 - ",
    image:
      "https://img.b112j.com/bj/h5/assets/v3/images/ambassador/mia-k.png?v=1768302048599&source=drccdnsrc",
  },
  {
    name: "Yasa Sagar",
    year: "2024 - 2025",
    image:
      "https://img.b112j.com/bj/h5/assets/v3/images/ambassador/mia-k.png?v=1768302048599&source=drccdnsrc",
  },
  {
    name: "Yasa Sagar",
    year: "2024 - 2026",
    image:
      "https://img.b112j.com/bj/h5/assets/v3/images/ambassador/mia-k.png?v=1768302048599&source=drccdnsrc",
  },
];

const BrandAmbassadors = () => {
  return (
    <div className="border-y border-[#262626] w-full mx-auto px-4 md:px-8 py-6">
      {/* <div className="border-y border-[#262626] px-4 md:px-8 py-6"> */}
      <h3 className="text-[#26B588] font-bold mb-2">Brand Ambassadors</h3>

      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-7 justify-center items-center">
        {brandAmbassadors.map((item, index) => (
          <div key={index} className="flex gap-1 items-center">
            <img src={item.image} alt={item.name} className="w-8 h-8 " />
            <div className="flex flex-col">
              <p className="text-[#657381] text-[14px] font-semibold">
                {item.name}
              </p>
              <p style={{ color: "#657381", fontSize: "12px" }}>{item.year}</p>
            </div>
          </div>
        ))}
      </div>
      {/* </div> */}
    </div>
  );
};

export default BrandAmbassadors;
