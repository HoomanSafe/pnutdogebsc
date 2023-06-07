import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdOutlineRocketLaunch } from "react-icons/md";
import { AiOutlineSafety } from "react-icons/ai";
import { RiSpaceShipLine } from "react-icons/ri";

const Map = () => {
  return (
    <section className="py-[50px] w-full bg-pr">
      <div className="container text-center ">
        <h1 className="font-secondary text-5xl md:text-6xl capitalize font-Japanese_3017">
          roadmap
        </h1>

        <VerticalTimeline className="mt-10 text-start" lineColor="#fff">
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "transparent", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid green" }}
            iconStyle={{ background: "black", color: "#fff" }}
            icon={<MdOutlineRocketLaunch />}
          >
            <h3 className="font-secondary uppercase vertical-timeline-element-title font-Audiowide text-3xl">
              phase 1
            </h3>
            <ul className="flex flex-col gap-2 mt-5  list-inside">
              <li className="capitalize ">Create Website & Social Media</li>
              <li className="capitalize">Fair Launch</li>
              <li className="capitalize">Memes</li>
              <li className="capitalize">Community Building Initiatives</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "black", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid #FFE083" }}
            iconStyle={{ background: "black", color: "#fff" }} // icon={<WorkIcon />}
            icon={<AiOutlineSafety />}
          >
            <h3 className="font-secondary vertical-timeline-element-title text-3xl capitalize">
              PHASE 2
            </h3>
            <ul className="flex flex-col gap-2 mt-5  list-inside">
              <li className="capitalize">500+ wallet holders</li>
              <li className="capitalize">Dextools Trending</li>
            </ul>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ backgroundColor: "transparent" }}
            iconStyle={{ background: "black", color: "#000" }}
            icon={<RiSpaceShipLine />}
          >
            <h3 className="font-secondary vertical-timeline-element-title text-3xl capitalize">
              PHASE 3
            </h3>
            <ul className="flex flex-col gap-2 mt-5  list-inside">
              <li className="capitalize"> Coin gecko listing</li>
              <li className="capitalize">CMC listing</li>
              <li className="capitalize">Dextool trending</li>
            </ul>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
};

export default Map;
