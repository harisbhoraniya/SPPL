"use client";

import { cn } from "@/lib/utils";
import { BodyCopyText } from "./BodyCopyText";

const AnimatedButton = ({ text, className }) => {
  return (
    <button className={cn("px-6 py-3 rounded-lg bg-[#f97316] border-2 border-[#f97316] group ", className)}>
      <BodyCopyText className={"text-white transition-all duration-300"}>
        {text}
      </BodyCopyText>
    </button>
  );
};

export default AnimatedButton;