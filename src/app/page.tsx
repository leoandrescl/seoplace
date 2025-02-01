import Image from "next/image";
import React, { useRef } from "react";
import emailjs from 'emailjs-com';

export default function Home() {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs.sendForm('service_2474mjt', 'template_cnn9xxn', form.current, 'xkH_nYuRwJ2LhwLQ1')
        .then((result) => {
          console.log(result.text);
          alert('Mensaje enviado con éxito!');
        }, (error) => {
          console.log(error.text);
          alert('Hubo un error al enviar el mensaje.');
        });
    }
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      {/* Hero Section */}
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start text-center sm:text-left">
        <Image
          className="dark:invert"
          src="/seoplace-logo.png"  // Cambia a tu logo
          alt="Seoplace Logo"
          width={180}
          height={38}
          priority
        />
        <h1 className="text-4xl font-semibold text-primary-600 dark:text-primary-300">
          Bienvenido a Seoplace
        </h1>
        <p className="text-lg text-primary-800 dark:text-primary-200 mt-4">
          Somos una agencia digital especializada en SEO, marketing en línea y soluciones personalizadas para tu negocio.
        </p>

        {/* Servicios */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="service-card p-6 border rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <h2 className="text-xl font-bold text-primary-600 dark:text-primary-200">SEO</h2>
            <p className="mt-4">Mejora el posicionamiento de tu sitio web y haz crecer tu presencia en línea.</p>
          </div>
          <div className="service-card p-6 border rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <h2 className="text-xl font-bold text-primary-600 dark:text-primary-200">Publicidad Digital</h2>
            <p className="mt-4">Atrae clientes con campañas de publicidad efectiva en Google Ads, Facebook y más.</p>
          </div>
          <div className="service-card p-6 border rounded-lg shadow-lg hover:bg-gray-100 dark:hover:bg-gray-800">
            <h2 className="text-xl font-bold text-primary-600 dark:text-primary-200">Desarrollo Web</h2>
            <p className="mt-4">Diseñamos sitios web modernos, responsivos y optimizados para convertir visitas en clientes.</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 flex gap-4 items-center justify-center sm:justify-start">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-primary-600 text-white hover:bg-primary-500 text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="#contacto"
          >
            <span>Contáctanos</span>
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://seoplace.cl"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visita nuestro sitio
          </a>
        </div>

        {/* Formulario de Contacto */}
        <section id="contacto" className="mt-12 w-full max-w-2xl">
          <h2 className="text-2xl font-bold text-primary-600 dark:text-primary-200 mb-6">Contáctanos</h2>
          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-primary-800 dark:text-primary-200">Nombre</label>
              <input type="text" name="user_name" required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-800 dark:text-primary-200">Email</label>
              <input type="email" name="user_email" required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <div>
              <label className="block text-sm font-medium text-primary-800 dark:text-primary-200">Mensaje</label>
              <textarea name="message" required className="w-full p-2 border rounded dark:bg-gray-700 dark:border-gray-600" />
            </div>
            <button type="submit" className="px-4 py-2 bg-primary-600 text-white rounded hover:bg-primary-500">
              Enviar Mensaje
            </button>
          </form>
        </section>
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#contacto"
        >
          <Image
            aria-hidden
            src="/contact.svg"  
            alt="Contact icon"
            width={16}
            height={16}
          />
          Contáctanos
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://seoplace.cl/servicios"
        >
          <Image
            aria-hidden
            src="/services.svg"  
            alt="Services icon"
            width={16}
            height={16}
          />
          Nuestros Servicios
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://seoplace.cl/blog"
        >
          <Image
            aria-hidden
            src="/blog.svg"  
            alt="Blog icon"
            width={16}
            height={16}
          />
          Visita nuestro Blog
        </a>
      </footer>
    </div>
  );
}