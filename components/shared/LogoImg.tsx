import Image from "next/image";
import React from "react";

const LogoImg = () => {
  return (
    <>
      <Image
        src={`https://www.entertab.net/img/logo-dark.png`}
        alt="logo"
        className="block dark:hidden"
        width={230}
        height={47}
      />

      <Image
        src={`https://www.entertab.net/img/logo-light.png`}
        alt="logo"
        className="hidden dark:block"
        width={230}
        height={47}
      />
    </>
  );
};

export default LogoImg;
