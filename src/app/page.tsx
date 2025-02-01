import Image from "next/image";

export default function Home() {
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
      </main>

      {/* Footer */}
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="#contacto"
        >
          <Image
            aria-hidden
            src="/contact.svg"  // Usa tu propio icono
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
            src="/services.svg"  // Usa tu propio icono
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
            src="/blog.svg"  // Usa tu propio icono
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