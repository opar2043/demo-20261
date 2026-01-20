import React from "react";

const FooterText = () => {
  return (
    <div
     className="border-y border-[#262626] w-full mx-auto px-4 md:px-8 py-6"
    >
<div className="border-y border-[#262626] w-full px-4 md:px-8 py-8">
  <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-2">
    
    {/* Logo */}
    <img
      src="/logo.png"   // replace with your logo path
      alt="Baji Logo"
      className="h-8 object-contain"
    />

    {/* Tagline */}
    <p className="text-[#26B588] font-semibold">
      Win Like A King
    </p>

    {/* Copyright */}
    <p className="text-[#657381] text-sm">
      © 2026 Baji Copyrights. All Rights Reserved
    </p>

  </div>
</div>


      <p>
        Baji.com is owned and operated by Northern Lights Limited Holdings Limited.
        Registration number: 15839, registered address: Hamchhako, Mutsamudu,
        Autonomous Island of Anjouan, Union of Comoros.
      </p>

      <p>Contact us northernlightslimited81@gmail.com.</p>

      <p>
        Baji.com is licensed and regulated by the Government of the Autonomous
        Island of Anjouan, Union of Comoros and operates under License No.
        ALSI-202410030-FI1. Baji.com has passed all regulatory compliance and is
        legally authorized to conduct gaming operations for any and all games of
        chance and wagering.
      </p>
    </div>
  );
};

export default FooterText;
