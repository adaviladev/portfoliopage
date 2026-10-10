(() => {
  const translations = {
  "Adaviladev's Portfolio Page": "Portfolio de Álvaro Dávila",
  "Skip to main content": "Saltar al contenido principal",
  "Frontend Developer · Chile": "Desarrollador Frontend · Chile",
  "Turning ideas into thoughtful, easy-to-use interfaces through frontend development and problem solving.": "Transformo ideas en interfaces cuidadas y fáciles de usar mediante el desarrollo frontend y la resolución de problemas.",
  "JavaScript · React · Node.js · REST APIs": "JavaScript · React · Node.js · APIs REST",
  "Projects": "Proyectos",
  "About": "Sobre mí",
  "Tech Stack": "Tecnologías",
  "SELECTED WORK": "TRABAJOS DESTACADOS",
  "A selection of my web development work and interface design proposals.": "Una selección de mis proyectos de desarrollo web y propuestas de diseño de interfaces.",
  "Vehicle Management System": "Gestor de vehículos",
  "An API-powered vehicle management interface with a sortable, paginated table, filters and a map showing vehicle locations.": "Una interfaz de gestión de vehículos conectada a una API, con una tabla ordenable y paginada, filtros y un mapa con la ubicación de los vehículos.",
  "API integration": "Integración de APIs",
  "View project": "Ver proyecto",
  "View code": "Ver código",
  "REST API": "API REST",
  "Boss Machine REST API": "API REST Boss Machine",
  "A REST API built with Node.js and Express, with CRUD routes, custom middleware, validation and HTTP error handling. Automated tests cover the API with Mocha and Supertest.": "Una API REST desarrollada con Node.js y Express, con rutas CRUD, middleware personalizado, validaciones y manejo de errores HTTP. Incluye pruebas automatizadas con Mocha y Supertest.",
  "Translator Website": "Sitio de servicios de traducción",
  "A website presenting translation services in four languages, with rotating testimonials and interactive blog navigation.": "Un sitio que presenta servicios de traducción en cuatro idiomas, con testimonios rotativos y navegación interactiva del blog.",
  "Markdown Editor": "Editor de Markdown",
  "A Markdown editor with a live HTML preview. React and Redux keep the editor and preview in sync as you type.": "Un editor de Markdown con vista previa de HTML en tiempo real. React y Redux mantienen el editor y la vista previa sincronizados mientras escribes.",
  "Pokémon Search": "Buscador de Pokémon",
  "Search for a Pokémon or discover one at random, then explore its stats and details fetched from PokéAPI.": "Busca un Pokémon o descubre uno al azar y explora sus estadísticas y detalles obtenidos de PokéAPI.",
  "Task management": "Gestión de tareas",
  "Task Manager": "Gestor de tareas",
  "A task scheduling application that saves tasks locally so they remain available between visits.": "Una aplicación para organizar tareas que las guarda localmente para mantenerlas disponibles entre visitas.",
  "Local storage": "Almacenamiento local",
  "IP Geolocation": "Geolocalización de IP",
  "Look up an IP address to see its country, city and coordinates, with location data retrieved through RapidAPI.": "Consulta una dirección IP para ver su país, ciudad y coordenadas, con datos de ubicación obtenidos a través de RapidAPI.",
  "Text-based RPG": "Juego de rol de texto",
  "Role Playing Game": "Juego de rol",
  "A text-based role-playing game with combat mechanics, inventory management and random events.": "Un juego de rol basado en texto con mecánicas de combate, gestión de inventario y eventos aleatorios.",
  "Concept & wireframes": "Concepto y wireframes",
  "Proposal & design": "Propuesta y diseño",
  "Clinic App — Concept & Wireframes": "App para clínica — Concepto y wireframes",
  "Collaborated with a team to shape a proposed clinic application, contributing to discussions about the solution structure and frontend approach.": "Colaboré con un equipo en la propuesta de una aplicación para una clínica, participando en la definición de la estructura de la solución y del enfoque frontend.",
  "Created and presented Figma wireframes covering multiple screens and data visualizations. The project is at the proposal stage; development has not started.": "Creé y presenté wireframes en Figma de distintas pantallas y visualizaciones de datos. El proyecto está en etapa de propuesta; el desarrollo aún no ha comenzado.",
  "Wireframing": "Diseño de wireframes",
  "Solution planning": "Planificación de la solución",
  "Team collaboration": "Colaboración en equipo",
  "I'm Álvaro, a": "Soy Álvaro,",
  "frontend developer": "desarrollador frontend",
  "working with JavaScript and React. I enjoy": "y trabajo con JavaScript y React. Disfruto la",
  "problem solving": "resolución de problemas",
  "and turning ideas into clear, easy-to-use interfaces. I'm also building my skills in Node.js, Express and automated testing.": "y transformar ideas en interfaces claras y fáciles de usar. También estoy ampliando mis conocimientos de Node.js, Express y pruebas automatizadas.",
  "My experience in translation and localization has taught me to pay attention to detail, communicate clearly and consider the people I'm creating something for.": "Mi experiencia en traducción y localización me ha enseñado a prestar atención a los detalles, comunicarme con claridad y tener en cuenta a las personas para quienes creo algo.",
  "I'd like to bring that mix of technical skills and experience to a frontend team, building useful applications and learning from the people I work with.": "Me gustaría aportar esta combinación de habilidades técnicas y experiencia a un equipo frontend, creando aplicaciones útiles y aprendiendo de las personas con las que trabajo.",
  "My frontend toolkit, supported by backend fundamentals and automated testing.": "Mis herramientas de frontend, complementadas con fundamentos de backend y pruebas automatizadas.",
  "Styling": "Estilos",
  "Backend foundations": "Fundamentos de backend",
  "Tools & testing": "Herramientas y pruebas",
  "CONTACT": "CONTACTO",
  "Let’s work together": "Trabajemos juntos",
  "Have a frontend opportunity in mind? I’d be happy to hear from you.": "¿Tienes una oportunidad en frontend? Me encantará conversar contigo.",
  "Email me": "Escríbeme",
  "Phone:": "Teléfono:",
  "Back to top": "Volver arriba",
  "Technologies and features": "Tecnologías y características",
  "Tools and contributions": "Herramientas y aportes",
  "Vehicle management interface with a search button and vehicle table": "Interfaz del gestor de vehículos con un botón de búsqueda y una tabla de vehículos",
  "Translator Website interface": "Interfaz del sitio de servicios de traducción",
  "Markdown Editor interface": "Interfaz del editor de Markdown",
  "Pokémon Search interface": "Interfaz del buscador de Pokémon",
  "IP Geolocation interface": "Interfaz del geolocalizador de IP"
};
  const root = document.documentElement;
  const storageKey = 'portfolio-language';
  let language = 'en';
  try {
    if (localStorage.getItem(storageKey) === 'es') language = 'es';
  } catch { /* Language switching also works without storage. */ }

  const translate = (text) => {
    const normalized = text.replace(/\s+/g, ' ').trim();
    if (Object.hasOwn(translations, normalized)) return translations[normalized];
    const profile = normalized.match(/^(GitHub|LinkedIn|Instagram) profile \(opens in a new tab\)$/);
    if (profile) return 'Perfil de ' + profile[1] + ' (se abre en una pestaña nueva)';
    const project = normalized.match(/^View (.+) (live|source code) \(opens in a new tab\)$/);
    if (project) return (project[2] === 'live' ? 'Ver proyecto: ' : 'Ver código de ') + (translations[project[1]] || project[1]) + ' (se abre en una pestaña nueva)';
    return text;
  };

  document.addEventListener('DOMContentLoaded', () => {
    const button = document.querySelector('.language-toggle');
    if (!button) return;
    // Keep original nodes to preserve icons, emphasis, event handlers and accordion state.
    const texts = [];
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    while (walker.nextNode()) {
      const node = walker.currentNode;
      if (node.parentElement.closest('script, style, .theme-toggle, .language-toggle')) continue;
      const original = node.nodeValue;
      if (translate(original.trim()) !== original.trim()) texts.push({ node, original });
    }
    const attributes = [];
    document.querySelectorAll('[aria-label], [alt]').forEach(node => {
      if (node.matches('.theme-toggle, .language-toggle')) return;
      for (const name of ['aria-label', 'alt']) {
        const original = node.getAttribute(name);
        if (original && translate(original) !== original) attributes.push({node, name, original});
      }
    });
    const title = document.title;
    const applyLanguage = () => {
      root.lang = language;
      texts.forEach(({node, original}) => {
        node.nodeValue = language === 'es' ? original.replace(original.trim(), translate(original.trim())) : original;
      });
      attributes.forEach(({node, name, original}) => node.setAttribute(name, language === 'es' ? translate(original) : original));
      document.title = language === 'es' ? translate(title) : title;
      button.textContent = language === 'es' ? 'Español' : 'English';
      button.setAttribute('aria-label', language === 'es' ? 'Español. Cambiar a inglés' : 'English. Switch to Spanish');
      document.dispatchEvent(new Event('languagechange'));
    };
    applyLanguage();
    button.hidden = false;
    button.addEventListener('click', () => {
      language = language === 'en' ? 'es' : 'en';
      applyLanguage();
      try { localStorage.setItem(storageKey, language); } catch { /* Optional persistence. */ }
    });
  });
})();
