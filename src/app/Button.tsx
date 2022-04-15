import { ButtonHTMLAttributes } from "react";

export default function Button({
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button {...props} className="px-6 py-4 bg-blue-700 text-white rounded">
      {props.children}
    </button>
  );
}
