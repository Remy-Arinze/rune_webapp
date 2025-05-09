import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';

type InputType = 
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'date'
  | 'time'
  | 'textarea'
  | 'select'
  | 'search';

type Option = {
  value: string | number;
  label: string;
};

interface BaseInputProps {
  type?: InputType;
  label?: string;
  error?: string;
  className?: string;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  options?: Option[];
  border?: boolean;
  borderColor?: string;
  errorBorderColor?: string;
  showSearchIcon?: boolean;
  placeholder? :string;
}

type InputProps = BaseInputProps & (
  | (Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { type?: Exclude<InputType, 'select' | 'textarea'> })
  | (Omit<SelectHTMLAttributes<HTMLSelectElement>, 'type'> & { type: 'select' })
  | (React.TextareaHTMLAttributes<HTMLTextAreaElement> & { type: 'textarea' })
);

const SearchIcon = () => (
  <svg 
    className="w-5 h-5 text-gray-400" 
    fill="none" 
    stroke="currentColor" 
    viewBox="0 0 24 24" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <path 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      strokeWidth={2} 
      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
    />
  </svg>
);


// ... (keep previous type definitions)

const Input = React.forwardRef<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement, InputProps>(
  (
    {
      type = 'text',
      label,
      error,
      className = '',
      containerClassName = '',
      labelClassName = '',
      errorClassName = '',
      options,
      border = true,
      borderColor = 'border-gray-300', // Changed to full class names
      errorBorderColor = 'border-red-500', // Changed to full class names
      showSearchIcon = true,
      placeholder = type === 'search' ? 'Search...' : undefined,
      ...props
    },
    ref
  ) => {
    // Base styling classes - now using template literals for conditional classes
    const baseClasses = [
      'w-full',
      'px-4',
      'py-2',
      'bg-white',
      'rounded-md',
      'focus:outline-none',
      'focus:ring-2',
      'transition',
      'duration-200',
      border ? 'border' : 'border-0',
      error ? errorBorderColor : borderColor,
      className // Include custom className at the end
    ].join(' ');

    const errorClasses = [
      errorBorderColor,
      `focus:ring-${errorBorderColor.split('-')[1]}-500` // Extract color from border class
    ].join(' ');

    const renderInput = () => {
      if (type === 'textarea') {
        return (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={`${baseClasses} ${error ? errorClasses : ''} min-h-[100px]`}
            placeholder={placeholder}
            {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
          />
        );
      }

      if (type === 'select') {
        return (
          <select
            ref={ref as React.Ref<HTMLSelectElement>}
            className={`${baseClasses} ${error ? errorClasses : ''} appearance-none`}
            {...props as React.SelectHTMLAttributes<HTMLSelectElement>}
          >
            {options?.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        );
      }

      return (
        <div className={`relative ${type === 'search' ? 'flex items-center' : ''}`}>
          {type === 'search' && showSearchIcon && (
            <div className="absolute left-3 pointer-events-none">
              <SearchIcon />
            </div>
          )}
          <input
            ref={ref as React.Ref<HTMLInputElement>}
            type={type === 'search' ? 'text' : type}
            className={`${baseClasses} ${error ? errorClasses : ''} ${
              type === 'search' && showSearchIcon ? 'pl-10' : ''
            }`}
            placeholder={placeholder}
            {...props as React.InputHTMLAttributes<HTMLInputElement>}
          />
        </div>
      );
    };

    return (
      <div className={`mb-4 ${containerClassName}`}>
        {label && (
          <label className={`block text-sm font-medium text-gray-700 mb-1 ${labelClassName}`}>
            {label}
          </label>
        )}
        {renderInput()}
        {error && (
          <p className={`mt-1 text-sm text-red-600 ${errorClassName}`}>
            {error}
          </p>
        )}
      </div>
    );
  }
);


Input.displayName = 'Input';

export default Input;