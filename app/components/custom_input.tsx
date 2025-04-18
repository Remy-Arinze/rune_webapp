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
  | 'select';

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
}

type InputProps = BaseInputProps & (
  | (Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> & { type?: Exclude<InputType, 'select' | 'textarea'> })
  | (Omit<SelectHTMLAttributes<HTMLSelectElement>, 'type'> & { type: 'select' })
  | (React.TextareaHTMLAttributes<HTMLTextAreaElement> & { type: 'textarea' })
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
      ...props
    },
    ref
  ) => {
    // Base styling classes
    const baseClasses = 'w-full px-4 py-2 bg-white rounded-md focus:outline-none focus:ring-2 border border-gray-300 transition duration-200';
    const errorClasses = 'border-red-500 focus:ring-red-500';

    const renderInput = () => {
      if (type === 'textarea') {
        return (
          <textarea
            ref={ref as React.Ref<HTMLTextAreaElement>}
            className={`${baseClasses} ${error ? errorClasses : ''} ${className} min-h-[100px]`}
            {...props as React.TextareaHTMLAttributes<HTMLTextAreaElement>}
          />
        );
      }

      if (type === 'select') {
        return (
          <select
            ref={ref as React.Ref<HTMLSelectElement>}
            className={`${baseClasses} ${error ? errorClasses : ''} ${className} appearance-none`}
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
        <input
          ref={ref as React.Ref<HTMLInputElement>}
          type={type}
          className={`${baseClasses} ${error ? errorClasses : ''}  ${className}`}
          {...props as React.InputHTMLAttributes<HTMLInputElement>}
        />
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