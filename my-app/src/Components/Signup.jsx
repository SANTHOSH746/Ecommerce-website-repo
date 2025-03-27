import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import { IoPersonCircleSharp } from "react-icons/io5";
import axios from 'axios';

export const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [avatar, setAvatar] = useState(null);
    const [visible, setVisible] = useState(false);

    const handleFileSubmit = (e) => {
        const file = e.target.files[0];
        if (file) {
            setAvatar(file);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append('name', name);
        formData.append('email', email);
        formData.append('password', password);
        formData.append('avatar', avatar);

        const config = {
            headers: { 'Content-Type': 'multipart/form-data' },
            withCredentials: true // ✅ Ensures JWT cookie is stored in the browser
        };

        try {
            const res = await axios.post('http://localhost:5000/create-user', formData, config);
            console.log(res.data);
            alert("Signup successful! You are now logged in.");
        } catch (err) {
            console.error(err);
            alert("Signup failed. Please try again.");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    Register as a new user
                </h2>
            </div>
            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                                Full Name
                            </label>
                            <input type="text" name="name" required value={name} 
                                onChange={(e) => setName(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email address
                            </label>
                            <input type="email" name="email" required value={email} 
                                onChange={(e) => setEmail(e.target.value)}
                                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                            />
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <div className="mt-1 relative">
                                <input type={visible ? "text" : "password"} name="password" required value={password} 
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
                                />
                                {visible ? (
                                    <AiOutlineEye className="absolute right-2 top-2 cursor-pointer" size={25} onClick={() => setVisible(false)} />
                                ) : (
                                    <AiOutlineEyeInvisible className="absolute right-2 top-2 cursor-pointer" size={25} onClick={() => setVisible(true)} />
                                )}
                            </div>
                        </div>

                        <div>
                            <label htmlFor="avatar" className="block text-sm font-medium text-gray-700"></label>
                            <div className="mt-2 flex items-center">
                                <span className="inline-block h-8 w-8 rounded-full overflow-hidden">
                                    {avatar ? (
                                        <img src={URL.createObjectURL(avatar)} alt="avatar" className="h-full w-full object-cover rounded-full" />
                                    ) : (
                                        <IoPersonCircleSharp className='h-8 w-8' />
                                    )}
                                </span>
                                <label htmlFor="file-input" className="ml-5 flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm">
                                    <span>Upload a file</span>
                                    <input type="file" name="avatar" id="file-input" accept=".jpg,.jpeg,.png" 
                                        onChange={handleFileSubmit} className="sr-only" 
                                    />
                                </label>
                            </div>
                        </div>

                        <button type="submit" className="group relative w-full h-[40px] flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700">
                            Submit
                        </button>

                        <div className="w-full">
                            <h4>Already have an account?</h4>
                            <Link to="/login" className="text-blue-600 pl-2">Sign In</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};



