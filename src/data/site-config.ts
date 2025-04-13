export type Image = {
    src: string;
    alt?: string;
    caption?: string;
};

export type Link = {
    text: string;
    href: string;
};

export type Hero = {
    title?: string;
    text?: string;
    image?: Image;
    actions?: Link[];
};

export type Subscribe = {
    title?: string;
    text?: string;
    formUrl: string;
};

export type SiteConfig = {
    website: string;
    logo?: Image;
    title: string;
    subtitle?: string;
    description: string;
    image?: Image;
    headerNavLinks?: Link[];
    footerNavLinks?: Link[];
    socialLinks?: Link[];
    hero?: Hero;
    subscribe?: Subscribe;
    postsPerPage?: number;
    projectsPerPage?: number;
};

const siteConfig: SiteConfig = {
    website: 'https://example.com',
    title: 'Franklin Pezo Montesinos',
    subtitle: 'Este es mi página personal, aqui podras encontrar todo sobre mi vida profesional',
    description: 'Astro.js and Tailwind CSS theme for blog and portfolio by justgoodui.com',
    image: {
        src: '/dante-preview.jpg',
        alt: 'Dante - Astro.js and Tailwind CSS theme'
    },
    headerNavLinks: [
        {
            text: 'Home',
            href: '/'
        },
        {
            text: 'Proyectos',
            href: '/proyectos'
        },
        {
            text: 'Portafolio',
            href: '/Portafolio'
        },
        {
            text: 'Github',
            href: 'https://github.com/franklinpezo'
        }
    ],
    footerNavLinks: [
        {
            text: 'A cerca de',
            href: '/A cerca de'
        },
        {
            text: 'Contacto',
            href: '/contacto'
        },
        {
            text: 'Terminos',
            href: '/terminos'
        }
    ],
    socialLinks: [
        {
            text: 'LinkedIn',
            href: 'https://www.linkedin.com/in/franklin-yimy-pezo-montesinos-133708359'
        },
        {
            text: 'Instagram',
            href: 'https://instagram.com/'
        },
        
    ],
    hero: {
        title: 'Hola y bienvenido a mi rincón de la web.',
        text: "Soy Franklin Pezo Montesinos, estudiante universitario, desarrollador web, dedicandome a los ámbitos de la colaboración y la inteligencia artificial. Mi enfoque se basa en la intuición, la investigación justa y el uso de la estética como catalizador para productos excepcionales. Aprecio profundamente el software de alta gama, el diseño visual y los principios del crecimiento impulsado por el producto. Explora algunos de mis proyectos de programación en <a href='https://github.com/FranklinPezo'>GitHub</a> ",
        image: {
            src: '/hero.jpeg',
            alt: 'Una persona sentada en un escritorio frente a una computadora'
        },
        actions: [
            {
                text: 'Get in Touch',
                href: '/contact'
            }
        ]
    },
    subscribe: {
        title: 'Suscríbete al boletín de Franklin',
        text: 'Una actualización semanal. Todas las últimas publicaciones directamente en tu bandeja de entrada..',
        formUrl: '#'
    },
    postsPerPage: 8,
    projectsPerPage: 8
};

export default siteConfig;
