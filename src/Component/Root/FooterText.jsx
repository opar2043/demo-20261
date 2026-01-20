import React from "react";

const FooterText = () => {
  return (
    <div className="w-full mx-auto px-4 md:px-8 py-10 b">
      {/* Bottom Bar */}
      <div className="flex flex-row-reverse justify-end gap-4 border-y border-[#262626] text-[#657381] bg-transparent">
        <div className="flex flex-col gap-3 py-3">
          <p className="text-[#26B588] text-xs font-bold">Win Like A King</p>
          <p className="text-xs text-[#657381]">
            © 2026 Baji Copyrights. All Rights Reserved
          </p>
        </div>

        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-[#141515] flex items-center justify-center">
            <img
              src="https://img.b112j.com/bj/h5/assets/v3/images/logo.png?v=1768302048599&source=drccdnsrc"
              alt="baji logo"
              className="w-5 h-5 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Legal Text */}
      <div className="mt-6 space-y-4 text-sm text-[#657381] leading-relaxed">
        <p>
          Baji.com is owned and operated by Northern Lights Limited Holdings
          Limited. registration number: 15839, registered address: Hamchhako,
          Mutsamudu, Autonomous Island of Anjouan, Union of Comoros.
        </p>

        <p>
          Contact us{" "}
          <span className="text-[#26B588]">
            northernlightslimited81@gmail.com
          </span>
          .
        </p>

        <p>
          Baji.com is licensed and regulated by the Government of the Autonomous
          Island of Anjouan, Union of Comoros and operates under License No.
          ALSI-202410030-FI1. Baji.com has passed all regulatory compliance and
          is legally authorized to conduct gaming operations for any and all
          games of chance and wagering.
        </p>
      </div>
    </div>
  );
};

export default FooterText;
