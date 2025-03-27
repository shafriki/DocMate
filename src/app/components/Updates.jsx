import React from "react";
import Marquee from "react-fast-marquee";
import Link from "next/link";
import { MdLabelImportant } from "react-icons/md";

export default function Updates() {
  return (
    <div className="flex mx-2 mb-5 items-center gap-2 bg-base-200 p-2 text-xs md:text-base bg-gradient-to-r from-[#042020] via-[#1e4046] to-[#0EA5E9] text-white">
      <p className="bg-[#0EA5E9] px-4 py-2 text-white whitespace-nowrap">
      Medical Department
      </p>

      <Marquee autoFill={true} pauseOnHover={true}>
        <Link href="#" className="ml-10 flex items-center gap-1">
          <MdLabelImportant className="text-[#0EA5E9] text-xl" />
          Heart Surgery in Bangladesh – Advanced cardiac care with top surgeons and world-class hospitals.
        </Link>

        <Link href="#" className="ml-10 flex items-center gap-1">
          <MdLabelImportant className="text-[#0EA5E9] text-xl" />
          Neurosurgery in Bangladesh – Cutting-edge brain and spine treatments by expert neurosurgeons.
        </Link>

        <Link href="#" className="ml-10 flex items-center gap-1">
          <MdLabelImportant className="text-[#0EA5E9] text-xl" />
          Orthopedic Surgery in Bangladesh – Expert care for joint, bone treatments with top surgeons.
        </Link>

        <Link href="#" className="ml-10 flex items-center gap-1">
          <MdLabelImportant className="text-[#0EA5E9] text-xl" />
          Cancer Treatment in Bangladesh – Advanced oncology care with top specialists and cutting-edge technology.
        </Link>

        <Link href="#" className="ml-10 flex items-center gap-1">
          <MdLabelImportant className="text-[#0EA5E9] text-xl" />
          Organ Transplant in Bangladesh – Life-saving transplants with top specialists and world-class medical facilities.
        </Link>

        <Link href="#" className="ml-10 flex items-center gap-1">
          <MdLabelImportant className="text-[#0EA5E9] text-xl" />
          Spine Surgery in Bangladesh – Advanced treatment for spinal disorders with expert surgeons and world-class care.
        </Link>

      </Marquee>
    </div>
  );
}
