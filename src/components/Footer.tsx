import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-walterWhite p-5">
      <Image src="/logo.png" alt="Vacay Trips" width={133} height={23} />
      <p className="text-sm font-medium mt-1 text-primaryDarker">
        Todos os direitos reservados.
      </p>
    </footer>
  );
};

export default Footer;
