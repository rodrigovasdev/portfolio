"use client";
import { useState } from "react";
import emailjs from '@emailjs/browser';

export default function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsLoading(true);
        setError(null);

        try {
            // Configuración de EmailJS desde variables de entorno
            const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
            const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
            const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

            if (!serviceId || !templateId || !publicKey) {
                throw new Error('Falta la configuración de EmailJS');
            }

            await emailjs.sendForm(serviceId, templateId, e.currentTarget, publicKey);
            setIsSubmitted(true);
        } catch (error) {
            console.error('Error sending email:', error);
            setError('No se pudo enviar el mensaje. Inténtalo nuevamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section id="contact" className="p-5 md:p-20 py-18">
            <div className="px-4 mx-auto max-w-screen-md">
                <h2 className="mb-4 text-7xl tracking-tight font-extrabold text-gray-900 text-center ">Work Wi<span className="text-purple-500">th Me</span></h2>
                {isSubmitted ? (
                    <div className="text-center">
                        <h3 className="text-2xl font-bold text-gray-900">¡Gracias!</h3>
                        <p className="text-gray-500">Nos pondremos en contacto contigo pronto.</p>
                    </div>
                ) : (
                    <>
                        <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 sm:text-xl">
                            ¿Quieres colaborar conmigo? Envíame un mensaje y te responderé lo antes posible.
                        </p>
                        <form onSubmit={handleSubmit} className="space-y-8">
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">
                                    Tu correo
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="from_email"
                                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                                    placeholder="nombre@correo.com"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900">
                                    Asunto
                                </label>
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Cuéntame en qué puedo ayudarte"
                                    required
                                />
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900">
                                    Tu mensaje
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500"
                                    placeholder="Escribe tu mensaje..."
                                    required
                                ></textarea>
                            </div>
                            {error && (
                                <div className="text-red-500 text-sm">
                                    {error}
                                </div>
                            )}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={`bg-blue-500 cursor-pointer hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg ${
                                    isLoading ? 'opacity-50 cursor-not-allowed' : ''
                                }`}
                            >
                                {isLoading ? 'Enviando...' : 'Enviar mensaje'}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </section>
    );
}