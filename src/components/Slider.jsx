"use client";
import React from "react";
import Image from "next/image";
import img from "../../public/next.svg";
import img2 from "../../public/globe.svg";
import img3 from "../../public/file.svg";

import Carousel from "react-bootstrap/Carousel";

function Slider() {
  console.log("here");
  return (
    <div className="flex flex-col">
      <Carousel fade data-bs-theme="dark">
        <Carousel.Item>
          <div className="h-44 w-44 bg-zinc-950">JJJJ</div>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="h-44 w-44 bg-zinc-950">JJJJ</div>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <div className="h-44 w-44 bg-zinc-950">JJJJ</div>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider;
