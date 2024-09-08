'use client';
import { useEffect } from 'react';
import { SetStateAction, useState } from 'react';
import Modal from "@/components/Modal/Modal";
import emailjs from 'emailjs-com'; // Import emailjs

const ContactForm = () => {
    // Initialize EmailJS in useEffect or globally
    useEffect(() => {
        emailjs.init("S07RkuRMn35bd01Nr");
    }, []);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const [errors, setErrors] = useState({ name: '', email: '', message: '' });

    const handleNameChange = (event: { target: { value: SetStateAction<string> } }) => {
        setName(event.target.value);
        if (event.target.value) {
            setErrors(prevErrors => ({ ...prevErrors, name: '' }));
        }
    };

    const handleEmailChange = (event: { target: { value: SetStateAction<string> } }) => {
        setEmail(event.target.value);
        if (event.target.value) {
            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }
    };

    const handleMessageChange = (event: { target: { value: SetStateAction<string> } }) => {
        setMessage(event.target.value);
        if (event.target.value) {
            setErrors(prevErrors => ({ ...prevErrors, message: '' }));
        }
    };

    async function sendDataToEmailService() {
        const form = document.querySelector('#email-form') as HTMLFormElement;

        // Use emailjs.sendForm to send the form data
        await emailjs.sendForm('service_anksd4q', 'template_h96jodq', form)
            .then(response => {
                console.log('SUCCESS!', response.status, response.text);
                setShowSuccessModal(true); // Show success modal
            })
            .catch(error => {
                console.error('FAILED...', error);
            });
    }

    const handleFormSubmit = async (event: any) => {
        event.preventDefault();

        // Validate form input
        const formErrors = { name: '', email: '', message: '' };
        let hasError = false;

        if (!name) {
            formErrors.name = 'Ispunite Vaše ime';
            hasError = true;
        }
        if (!email) {
            formErrors.email = 'Ispunite Vašu email adresu';
            hasError = true;
        }
        if (!message) {
            formErrors.message = 'Isprunite Vašu poruku';
            hasError = true;
        }

        setErrors(formErrors);

        if (hasError) return;

        try {
            await sendDataToEmailService();
            console.log('FORM SUBMITTED');
            setName('');
            setEmail('');
            setMessage('');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        } catch (error) {
            console.error('Error sending data:', error);
        }
    };

    const handleCloseModal = () => {
        setTimeout(() => {
            setShowSuccessModal(false);
        }, 300);
    };

    return (
        <>
            <form
                id="email-form"
                onSubmit={handleFormSubmit}
                className="w-full lg:w-1/2 h-auto bg-orange-primary px-4 lg:px-16 py-16 flex flex-col justify-start items-start gap-8"
            >
                <h1 className="text-[#2A2A2A] font-rubik text-3xl md:text-4xl font-bold tracking-wider">Kontakt</h1>
                <div className="w-[50px] h-[5px] bg-[#2A2A2A]"></div>
                <div className="w-full flex flex-col justify-start items-center gap-4">
                    <div className="w-full flex flex-row justify-start items-center gap-4 md:gap-8">
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="w-1/2 py-4 px-4 font-rubik text-black text-lg font-extralight"
                            placeholder="Ime"
                            value={name}
                            onChange={handleNameChange}
                            required
                        />
                        {errors.name && <div className="error">{errors.name}</div>}
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="w-1/2 py-4 px-4 font-rubik text-black text-lg font-extralight"
                            placeholder="Email / broj telefona"
                            value={email}
                            onChange={handleEmailChange}
                            required
                        />
                        {errors.email && <div className="error">{errors.email}</div>}
                    </div>
                    <input
                        id="message"
                        className="w-full py-4 px-4 pb-16 font-rubik text-black text-lg font-extralight"
                        placeholder="Poruka / upit"
                        value={message}
                        name="message"
                        onChange={handleMessageChange}
                        required
                    />
                    {errors.message && <div className="error">{errors.message}</div>}
                    <div className="w-full flex flex-row items-end justify-end">
                        <button type="submit">
                            <p className="text-base font-rubik font-semibold text-white hover:text-black tracking-widest px-6 py-3 border-4 border-white bg-transparent hover:bg-white transition-all duration-500">
                                POŠALJI
                            </p>
                        </button>
                    </div>
                </div>
            </form>
            {showSuccessModal &&
				<Modal onClose={handleCloseModal} />
            }
        </>
    );
};

export default ContactForm;
