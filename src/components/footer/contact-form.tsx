'use client'

import { useState } from 'react';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        const response = await fetch('/api/contact', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, message }),
        });

        if (response.ok) {
            setSuccess('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        } else {
            const errorData = await response.json();
            setError(errorData.error || 'Something went wrong');
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="w-full lg:w-1/2 h-auto bg-orange-primary px-4 lg:px-16 py-16 flex flex-col justify-start items-start gap-8"
        >
            <h1 className="text-[#2A2A2A] font-rubik text-3xl md:text-4xl font-bold tracking-wider">Kontakt</h1>
            <div className="w-[50px] h-[5px] bg-[#2A2A2A]"></div>
            <div className="w-full flex flex-col justify-start items-center gap-4">
                <div className="w-full flex flex-row justify-start items-center gap-4 md:gap-8">
                    <input
                        type="text"
                        id="name"
                        className="w-1/2 py-4 px-4 font-rubik text-black text-lg font-extralight"
                        placeholder="Ime"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                    <input
                        type="text"
                        id="email"
                        className="w-1/2 py-4 px-4 font-rubik text-black text-lg font-extralight"
                        placeholder="Email / broj telefona"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <textarea
                    id="textarea"
                    className="w-full py-4 px-4 pb-16 font-rubik text-black text-lg font-extralight"
                    placeholder="Poruka / upit"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                ></textarea>
                <div className="w-full flex flex-row items-end justify-end">
                    <button type="submit">
                        <p className="text-base font-rubik font-semibold text-white hover:text-black tracking-widest px-6 py-3 border-4 border-white bg-transparent hover:bg-white transition-all duration-500">
                            POŠALJI
                        </p>
                    </button>
                </div>
                {error && <p className="text-red-500">{error}</p>}
                {success && <p className="text-green-500">{success}</p>}
            </div>
        </form>
    );
};

export default ContactForm;
