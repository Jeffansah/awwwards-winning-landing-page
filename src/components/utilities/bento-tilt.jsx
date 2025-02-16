import { useRef, useState } from "react";
import { cn } from "../../../utils/cn";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");

  const itemRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (e.clientX - left) / width;

    const relativeY = (e.clientY - top) / height;

    const tiltX = 10 * (0.5 - relativeY);

    const tiltY = 10 * (0.5 - relativeX);

    const newTransformStyle = `perspective(1000px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;

    setTransformStyle(newTransformStyle);
  };

  const handleMouseLeave = (e) => {
    setTransformStyle("");
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      ref={itemRef}
      className={cn("cursor-pointer", className)}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export default BentoTilt;
