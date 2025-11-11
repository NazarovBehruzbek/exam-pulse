'use client';
import { useState } from 'react';
import { Apple, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import Rimg from "@/assets/register-img.png";
import Image from 'next/image';
import { useParams } from 'next/navigation';

export default function SignUpPage() {
    const [showPassword, setShowPassword] = useState(false);
    const {locale} = useParams()
    return (
        <div className="min-h-screen flex flex-col md:flex-row bg-gray-900">
            {/* Left side (Image + text) */}
            <div className="hidden md:flex md:w-1/2 relative items-end justify-center">
                {/* Background image */}
                <Image
                    src={Rimg}
                    alt="Online Imtihon Platformasi"
                    width={800}
                    height={600}
                    className="absolute inset-0 w-full h-full object-cover"
                    priority
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>

                {/* Top bar */}
                <div className="absolute top-4 left-0 right-0 px-6 flex items-center justify-between z-20">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={48}
                        height={48}
                        className="object-contain"
                    />
                    <a
                        href={`/${locale}/`}
                        className="flex items-center gap-2 text-white font-medium hover:underline"
                    >
                        <ArrowLeft className="w-5 h-5" />
                        Back to website
                    </a>
                </div>

                {/* Hero text */}
                <div className="z-20 text-white text-center mb-12 px-6">
                    <h2 className="text-3xl font-bold mb-4 leading-snug">
                        Capturing Moments, Creating Memories
                    </h2>
                    <div className="flex justify-center gap-2 mt-2">
                        <span className="w-3 h-3 rounded-full bg-white/50"></span>
                        <span className="w-3 h-3 rounded-full bg-white"></span>
                        <span className="w-3 h-3 rounded-full bg-white/50"></span>
                    </div>
                </div>
            </div>

            {/* Right side (Form) */}
            <div className="flex w-full md:w-1/2 items-center justify-center p-6 sm:p-8">
                <div className="w-full max-w-md sm:max-w-lg bg-gray-800 rounded-xl p-6 sm:p-8 shadow-lg">
                    <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2 text-center md:text-left">
                        Create an account
                    </h1>
                    <p className="text-gray-400 mb-6 text-center md:text-left">
                        Already have an account?{' '}
                        <a href={`/${locale}/login`} className="text-purple-400 hover:underline">Log in</a>
                    </p>

                    <form className="space-y-4">
                        {/* Name inputs */}
                        <div className="flex flex-wrap sm:flex-row gap-3">
                            <input
                                type="text"
                                placeholder="First name"
                                className="flex-1 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
                            />
                            <input
                                type="text"
                                placeholder="Last name"
                                className="flex-1 p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
                            />
                        </div>

                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
                        />

                        <div className="relative">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                placeholder="Enter your password"
                                className="w-full p-3 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-purple-400"
                            />
                            <button
                                type="button"
                                onClick={() => setShowPassword(!showPassword)}
                                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
                            >
                                {showPassword ? (
                                    <EyeOff className="w-5 h-5" />
                                ) : (
                                    <Eye className="w-5 h-5" />
                                )}
                            </button>
                        </div>

                        <div className="flex items-start sm:items-center gap-2">
                            <input type="checkbox" id="terms" className="mt-1 sm:mt-0" />
                            <label htmlFor="terms" className="text-gray-400 text-sm">
                                I agree to the{' '}
                                <a href="#" className="text-purple-400 hover:underline">Terms & Conditions</a>
                            </label>
                        </div>

                        <button
                            type="submit"
                            className="w-full bg-purple-600 hover:bg-purple-700 text-white py-3 rounded-lg font-medium transition-colors"
                        >
                            Create account
                        </button>
                    </form>

                    {/* Divider */}
                    <div className="flex items-center my-4">
                        <hr className="flex-1 border-gray-600" />
                        <span className="mx-2 text-gray-400 text-sm">Or register with</span>
                        <hr className="flex-1 border-gray-600" />
                    </div>

                    {/* Social buttons */}
                    <div className="flex flex-col sm:flex-row gap-3">
                        <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg border border-gray-600">
                            <Apple className="w-5 h-5" /> Google
                        </button>
                        <button className="flex-1 flex items-center justify-center gap-2 bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg border border-gray-600">
                            <Apple className="w-5 h-5" /> Apple
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
