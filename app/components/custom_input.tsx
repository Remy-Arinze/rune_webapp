import React, { InputHTMLAttributes, SelectHTMLAttributes } from 'react';

type InputType = 
  | 'text'
  | 'email'
  | 'password'
  | 'number'
  | 'tel'
  | 'date'
  | 'time'
  | 'datetime-local'
  | 'textarea'
  | 'select'
  | 'search'
  | 'toggle'; // NEW

type Option = {
  value: string | number;
  label: string;
};
interface BaseInputProps {
  type?: InputType;
  label?: string;
  error?: string;
  className?: string;
  disabled?: boolean;
  checked?: boolean;
  handleToggle?: (value: boolean) => void;
  containerClassName?: string;
  labelClassName?: string;
  errorClassName?: string;
  options?: Option[];
  border?: boolean;
  borderColor?: string;
  errorBorderColor?: string;
  showSearchIcon?: boolean;
  placeholder?: string;
  preventTextEdit?: boolean;
  // New toggle-specific props
  toggleBgColor?: string;
  toggleCheckedBgColor?: string;
  toggleThumbColor?: string;
  toggleWidth?: string | number;
  toggleHeight?: string | number;
  toggleThumbSize?: string | number;
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
      disabled,
      checked,
      border = true,
      handleToggle,
      borderColor = 'border-gray-300',
      errorBorderColor = 'border-red-500',
      showSearchIcon = true,
      placeholder = type ? (type === 'search' ? 'Search...' : undefined) : undefined,
      preventTextEdit = false,
      ...props
    },
    ref
  ) => {
    // Base styling classes
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
      className
    ].join(' ');

    const errorClasses = [
      errorBorderColor,
      `focus:ring-${errorBorderColor.split('-')[1]}-500`
    ].join(' ');

    const renderInput = () => {
if (type === 'toggle') {
        return (
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              className="sr-only peer"
              checked={checked}
              disabled={disabled}
              onChange={(e) => handleToggle && handleToggle(e.target.checked)}
            />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-0 peer-focus:ring-orange-400 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-black after:content-[''] after:absolute after:top-[1.5px] after:left-[1.5px] after:bg-[var(--background)] after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[var(--primary)]"></div>          </label>
        );
      }

      if (type === 'textarea') {
        return (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={`${baseClasses} ${error ? errorClasses : ''}  border border-gray-600 min-h-[100px] placeholder:text-[13px]`}
            placeholder={placeholder}
            {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
          />
        );
      }

      if (type === 'select') {
        return (
          <div className="relative">
            <select
              style={{ backgroundColor: 'var(--dark)' }}
              ref={ref as React.Ref<HTMLSelectElement>}
              className={`
                ${baseClasses} 
                ${error ? errorClasses : ''} 
                bg-[var(--background)] 
                text-white 
                text-[12px]
                focus:outline-none 
                 border border-gray-600
                focus:ring-1 
                focus:ring-[var(--primary)]
                appearance-none
                pr-8
              `}
              {...props as React.SelectHTMLAttributes<HTMLSelectElement>}
            >
              {options?.map((option) => (
                <option 
                  className="bg-[var(--background)] hover:bg-[var(--primary)]" 
                  key={option.value} 
                  value={option.value}
                >
                  {option.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-[var(--primary)]">
              <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
              </svg>
            </div>
          </div>
        );
      }

      // Handle datetime inputs
      if (type === 'date' || type === 'time' || type === 'datetime-local') {
        return (
          <div className="relative">
            <input
              ref={ref as React.Ref<HTMLInputElement>}
              type={type}
              style={{
                backgroundColor:"var(--dark)"
              }}
              className={`
                ${baseClasses} 
                ${error ? errorClasses : ''}
                ${preventTextEdit ? 'text-white' : ''}
                placeholder:text-[13px]
                pr-8
              `}
              placeholder={placeholder}
              onKeyDown={preventTextEdit ? (e) => e.preventDefault() : undefined}
              {...props as React.InputHTMLAttributes<HTMLInputElement>}
            />
            {/* Display selected date as visible text when preventTextEdit is true */}
            {preventTextEdit && props.value && (
              <div className="absolute left-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-700 text-[12px]">
                {type === 'date' 
                  ? new Date(props.value as string).toLocaleDateString()
                  : type === 'time'
                    ? new Date(`1970-01-01T${props.value}`).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    : new Date(props.value as string).toLocaleString()}
              </div>
            )}
          </div>
        );
      }

      // Default input (text, email, password, etc.)
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
            } placeholder:text-[13px]`}
            placeholder={placeholder}
            {...props as React.InputHTMLAttributes<HTMLInputElement>}
          />
        </div>
      );
    };

    return (
      <div className={`mb-4 ${containerClassName}`}>
        {label && (
          <label className={`block text-[12px] font-medium text-gray-300 mb-1 ${labelClassName}`}>
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