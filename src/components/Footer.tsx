import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center bg-walterwhite p-5">
      <Image src="/logo.png" alt="Vacay Trips" width={133} height={23} />
      <p className="text-sm font-medium mt-1 text-primaryDarker">
        Todos os direitos reservados.
      </p>
    </div>
  );
};

export default Footer;
