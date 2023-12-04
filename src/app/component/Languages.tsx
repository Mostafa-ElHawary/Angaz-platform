import Image from "next/image";
import React, { useState } from "react";

const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState("EN");

  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "AR" ? "EN" : "AR");
    // Add logic here to switch languages in your application
    // For demo purposes, this code just toggles between AR and EN
  };

  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center font-semibold text-[#1967D3]"
    >
      {currentLanguage}
      {currentLanguage === "AR" ? (
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg"
          alt="Egypt Flag"
          width={30}
          height={30}
          className="w-6 h-6 mr-2 rounded-full"
        />
      ) : (
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg"
          alt="England Flag"
          width={30}
          height={30}
          className="w-6 h-6 mr-2 rounded-full"
        />
      )}
    </button>
  );
};

export default LanguageSwitcher;
