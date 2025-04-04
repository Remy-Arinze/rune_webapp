"use client";
import { useState, useRef } from "react";

type Option = {
  value: string;
  label: string;
};

export function SelectDropdown({
  options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ],
  placeholder = "Select an option",
}: {
  options?: Option[];
  placeholder?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: Option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <div className="relative w-full" ref={dropdownRef}>
      {/* Select Trigger */}
      <button
        onClick={toggleDropdown}
        className={`w-full px-4 py-2 text-left bg-[var(--background)] border rounded-lg shadow-sm focus:outline-none  transition-all duration-200 ${
          isOpen ? " outline-[var(--primary)] border-[var(--primary)]" : "border-[var(--primary)]"
        }`}
      >
        <div className="flex items-center justify-between">
          <span className="truncate text-[14px]">
            {selectedOption?.label || placeholder}
          </span>
          <svg
            className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
              isOpen ? "transform rotate-180" : ""
            }`}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-10 w-full mt-1 bg-[var(--dark)] border border-[var(--dark)]  rounded-lg shadow-lg overflow-hidden">
          <ul className="py-1 overflow-auto max-h-60">
            {options.map((option) => (
              <li
                key={option.value}
                onClick={() => handleOptionClick(option)}
                className={`px-4 py-2 hover:text-black cursor-pointer text-[13px] hover:bg-white transition-colors ${
                  selectedOption?.value === option.value
                    ? "bg-white text-black"
                    : "text-gray-400"
                }`}
              >
                {option.label}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}