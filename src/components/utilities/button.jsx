import { cn } from "../../../utils/cn";

const Button = ({ title, leftIcon, rightIcon, containerClass, id }) => {
  return (
    <button
      className={cn(
        "group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black",
        containerClass
      )}
    >
      {leftIcon && leftIcon}
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        {title}
      </span>
      {rightIcon && rightIcon}
    </button>
  );
};

export default Button;
