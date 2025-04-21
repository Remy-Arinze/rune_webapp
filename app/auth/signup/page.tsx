'use client'
import React, { useState } from 'react';
import { FaGoogle, FaChessKnight } from 'react-icons/fa';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';
import GameButton from '@/app/components/custom_button';
import { CountryDropdown } from 'react-country-region-selector';
import Input from '@/app/components/custom_input';
import { useRegisterMutation } from '@/services/modules/authApi';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const SignUp = () => {
  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [registerUser, { isLoading }] = useRegisterMutation();
  const router = useRouter();

  // password visibility
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    country: '',
    skillLevel: 'new_to_chess',
  });

  const validateStep1 = () => {
    const newErrors: Record<string, string> = {};
    
    // Email validation
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    
    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const validateStep2 = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.username) {
      newErrors.username = 'Username is required';
    }
    
    if (!formData.country) {
      newErrors.country = 'Country is required';
    }
    
    if (!formData.skillLevel) {
      newErrors.skillLevel = 'Skill level is required';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors[name];
        return newErrors;
      });
    }
  };

  const handleCountrySelect = (val: string) => {
    setFormData(prev => ({
      ...prev,
      country: val
    }));
    
    // Clear country error when selected
    if (errors.country) {
      setErrors(prev => {
        const newErrors = { ...prev };
        delete newErrors.country;
        return newErrors;
      });
    }
  };

  const handleContinue = async () => {
    if (step === 1) {
      if (validateStep1()) {
        setStep(2);
      }
    } else {
      if (validateStep2()) {
        await handleRegister();
      }
    }
  };

  const handleRegister = async () => {
    try {
      // Prepare the data for registration (exclude confirmPassword)
      const { confirmPassword, ...registrationData } = formData;
      console.log('Registration data:', confirmPassword);
      const response = await registerUser(registrationData).unwrap();
      console.log('Registration response:', response);
      toast.success('Registration successful! Redirecting...');
      router.push('/dashboard'); // Or wherever you want to redirect after registration
    } catch (err) {
      // toast.error(err.data?.message || 'Registration failed. Please try again.');
      console.error('Registration error:', err);
    }
  };

  const skillLevels = [
    { value: 'new_to_chess', label: 'New To Chess' },
    { value: 'beginner', label: 'Beginner' },
    { value: 'intermediate', label: 'Intermediate' },
    { value: 'advanced', label: 'Advanced' },
    
  ];

  return (
    <div className="min-h-screen relative bg-[var(--dark)] flex flex-col items-center justify-center p-4 overflow-hidden">
      <div className="absolute top-4 right-4 bg-[var(--primary)] text-[var(--background)] px-3 py-1 rounded-full text-sm">
        {step}/2
      </div>
      <div className="w-full max-w-md rounded-lg shadow-md p-8 relative">
        {/* Logo */}
        <div className="flex items-center justify-center mb-10">
          <Image src="/assets/logo.png" alt="logo" width={120} height={60} />
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-center mb-2">
          {step === 1 ? 'Create your Rune account' : 'Complete your profile'}
        </h2>

        {/* Forms container */}
        <div className="relative w-full overflow-hidden">
          {/* First form */}
          <div 
            className={`transition-all duration-500 ${step === 1 ? 'translate-x-0' : '-translate-x-full absolute'}`}
            style={{ width: '100%' }}
          >
  <div className="space-y-4">
    <Input
      name="email"
      type="email"
      placeholder="Email"
      value={formData.email}
      onChange={handleChange}
      className='placeholder:text-[var(--background)] text-[var(--background)]'
      error={errors.email}
    />
    
    <div className="relative">
      <Input
        name="password"
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className='placeholder:text-[var(--background)] text-[var(--background)]'
        error={errors.password}
      />
      <button
        type="button"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
    
    <div className="relative">
      <Input
        name="confirmPassword"
        type={showConfirmPassword ? 'text' : 'password'}
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className='placeholder:text-[var(--background)] text-[var(--background)]'
        error={errors.confirmPassword}
      />
      <button
        type="button"
        className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
      >
        {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
      </button>
    </div>
    
    <GameButton 
      className='w-full' 
      onClick={handleContinue}
      disabled={
        !formData.email || 
        !formData.password || 
        !formData.confirmPassword || 
        formData.password !== formData.confirmPassword || 
        isLoading
      }
    >
      <p className='text-[var(--background)]'>
        {isLoading ? 'Processing...' : 'Continue'}
      </p>
    </GameButton>
  </div>
          </div>

          {/* Second form */}
          <div 
            className={`transition-all duration-500 ${step === 2 ? 'translate-x-0' : 'translate-x-full absolute'}`}
            style={{ width: '100%' }}
          >
            <div className="space-y-4">
              <Input
                name="username"
                type="text"
                placeholder="Username"
                value={formData.username}
                onChange={handleChange}
                className='placeholder:text-[var(--background)]'
                error={errors.username}
              />
              
              <div className="relative">
                <CountryDropdown
                  value={formData.country}
                  onChange={handleCountrySelect}
                  className="w-full px-4 py-2 bg-white rounded-md outline-none  transition duration-200 text-gray-800"
                />
                {errors.country && (
                  <p className="text-red-500 text-xs mt-1">{errors.country}</p>
                )}
              </div>

              <Input
                name="skillLevel"
                type="select"
                value={formData.skillLevel}
                onChange={handleChange}
                options={skillLevels}
                className='placeholder:text-[var(--background)] text-[var(--background)]'
                error={errors.skillLevel}
              />

              <div className="flex gap-2">
                <button
                  onClick={() => setStep(1)}
                  className="px-4 py-2 text-[var(--primary)] hover:underline"
                >
                  Back
                </button>
                <GameButton 
                  className='w-full' 
                  onClick={handleContinue}
                  disabled={!formData.username || !formData.country || !formData.skillLevel || isLoading}
                >
                  <p className='text-[var(--background)]'>
                    {isLoading ? 'Registering...' : 'Complete Registration'}
                  </p>
                </GameButton>
              </div>
            </div>
          </div>
        </div>

        {/* Divider - Only show on first step */}
        {step === 1 && (
          <>
            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300"></div>
              <span className="mx-4 text-gray-500">OR</span>
              <div className="flex-grow border-t border-gray-300"></div>
            </div>

            {/* Social Login */}
            <div className="space-y-3">
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition duration-200">
                <FaGoogle className="text-red-500" />
                Continue with Google
              </button>
              <button className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-50 transition duration-200">
                <FaChessKnight className="text-green-700" />
                Continue with Chess.com
              </button>
            </div>
          </>
        )}

        {/* Footer */}
        <p className="text-center text-sm text-gray-500 mt-6">
          {step === 1 ? (
            <>Already have an account? <a href="/auth/login" className="text-[var(--primary)] hover:underline">Log in</a></>
          ) : null}
        </p>
      </div>
    </div>
  );
};

export default SignUp;