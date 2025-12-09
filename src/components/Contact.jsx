import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
    const [status, setStatus] = useState("");
    const [loading, setLoading] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus("");

        emailjs
            .sendForm(
                "service_jwmn25y", // Service ID
                "template_ujfq30p", // Template ID
                formRef.current,
                "NXwzzm1MisXVflJl7" // Public Key
            )
            .then(
                (result) => {
                    setStatus("✅ Merci pour votre message !");
                    setLoading(false);
                    formRef.current.reset();

                    // Effacer le message après 5 secondes
                    setTimeout(() => setStatus(""), 5000);
                },
                (error) => {
                    setStatus("❌ Une erreur est survenue. Réessayez.");
                    setLoading(false);
                }
            );
    };

    return (
        <section className="reveal py-20 px-6 bg-[#0D1117]" id="contact">
            <div className="max-w-7xl mx-auto text-center">
                <h2 className="text-4xl font-bold text-[#E6EDF3] mb-6 font-satoshi">
                    Contactez-moi
                </h2>
                <p className="text-lg text-[#5B5B5B] mb-8 font-inter">
                    Vous pouvez me joindre à mon email professionnel : <a href="mailto:dontono.contact@gmail.com" className="text-[#00BFA6] hover:underline">dontono.contact@gmail.com</a>
                </p>

                {/* Formulaire de contact */}
                <form ref={formRef} onSubmit={handleSubmit} className="max-w-2xl mx-auto mb-8">
                    <div className="mb-4">
                        <input 
                            type="text" 
                            name="name"
                            placeholder="Votre nom" 
                            className="w-full px-4 py-3 bg-[#161B22] text-[#E6EDF3] border border-[#21262D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <input 
                            type="email" 
                            name="email"
                            placeholder="Votre email" 
                            className="w-full px-4 py-3 bg-[#161B22] text-[#E6EDF3] border border-[#21262D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <textarea 
                            name="message"
                            placeholder="Votre message" 
                            rows="5"
                            className="w-full px-4 py-3 bg-[#161B22] text-[#E6EDF3] border border-[#21262D] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#00BFA6]"
                            required
                        ></textarea>
                    </div>
                    <button 
                        type="submit" 
                        disabled={loading}
                        className={`w-full bg-[#00BFA6] hover:bg-[#00D8A1] text-[#0D1117] px-5 py-3 rounded-lg font-medium transition-all duration-300 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
                    >
                        {loading ? "Envoi en cours..." : "Envoyer"}
                    </button>
                    {status && <p className="mt-4 text-[#E6EDF3] font-inter">{status}</p>}
                </form>

                {/* Liens sociaux */}
                <div className="flex justify-center gap-6 mb-8">
                    <a href="https://github.com/7S-Coder?tab=repositories" target="_blank" rel="noopener noreferrer" className="text-[#E6EDF3] hover:text-[#00BFA6] transition-colors">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/dylan-eglantine-0541ab161/" target="_blank" rel="noopener noreferrer" className="text-[#E6EDF3] hover:text-[#00BFA6] transition-colors">
                        LinkedIn
                    </a>
                    <a href="https://www.malt.fr/profile/dylaneglantine1" target="_blank" rel="noopener noreferrer" className="text-[#E6EDF3] hover:text-[#00BFA6] transition-colors">
                        Malt
                    </a>
                    <a href="https://www.fiverr.com/s/7YNYq3y" target="_blank" rel="noopener noreferrer" className="text-[#E6EDF3] hover:text-[#00BFA6] transition-colors">
                        Fiverr
                    </a>
                    <a href="https://studio.dontono.fr/" target="_blank" rel="noopener noreferrer" className="text-[#E6EDF3] hover:text-[#00BFA6] transition-colors">
                        dontono.fr
                    </a>
                </div>

                {/* Bouton Calendly */}
                <a 
                    href="https://calendly.com/siete7am-contact/30min" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-[#00BFA6] hover:bg-[#00D8A1] text-[#0D1117] px-5 py-3 rounded-lg font-medium transition-all duration-300"
                >
                    Prendre rendez-vous
                </a>
            </div>
        </section>
    );
}

export default Contact;
