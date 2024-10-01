// components/Textarea.tsx
import React from "react";

interface TextareaProps {
  id: string;
  name: string;
  placeholder?: string;
  rows?: number;
  maxLength?: number;
  required?: boolean;
  className?: string;
}

const Textarea: React.FC<TextareaProps> = ({
  id,
  name,
  placeholder = "Enter your message",
  rows = 5,
  maxLength = 5000,
  required = false,
  className = "",
}) => {
  return (
    <textarea
      id={id}
      name={name}
      placeholder={placeholder}
      rows={rows}
      maxLength={maxLength}
      required={required}
      className={`form-control rounded-lg py-3 px-4 border border-gray-300 outline-none block w-full text-base font-normal leading-6 text-gray-900 bg-white bg-clip-padding transition-colors duration-150 ease-in-out resize-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${className}`}
    />
  );
};

export default Textarea;
