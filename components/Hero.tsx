"use client";

import Image from "next/image";

import { CustomButton } from "@components";

const Hero = () => {
  const handleScroll = () => {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="hero">
      <div className="flex-1 pt-32 padding-x">
        <h1 className="hero__title">
          Louez une voiture :<br /> c'est rapide !
        </h1>

        <p className="hero__subtitle">
          Simplifiez votre expérience de location de voiture grâce à notre
          processus de réservation moderne.
        </p>

        <CustomButton
          title="Réserver maintenant !"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src="/hero.png" alt="hero" fill className="object-contain" />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
