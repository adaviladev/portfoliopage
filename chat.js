(() => {
  const copy = {
  "en": {
    "eyebrow": "PORTFOLIO ASSISTANT",
    "heading": "Want to know more about my profile?",
    "description": "Explore his profile through a few quick questions. Answers are prepared from his portfolio.",
    "welcome": "Hi! What would you like to know about Álvaro?",
    "assistant": "Portfolio assistant",
    "visitor": "You",
    "group": "Suggested questions",
    "log": "Conversation about Álvaro",
    "reset": "Clear conversation",
    "minimize": "Minimize assistant",
    "restore": "Expand assistant",
    "questions": {
      "about": "Tell me about him",
      "skills": "What technologies does he use?",
      "projects": "Which projects stand out?",
      "contact": "How can I contact him?"
    },
    "answers": {
      "about": "Álvaro is a frontend developer in Chile focused on JavaScript and React. His background in translation and localization brings attention to detail and clear communication. He wants to join a frontend team where he can contribute and continue learning.",
      "skills": "His core tools are HTML, CSS, JavaScript and React. He also uses Next.js, Tailwind CSS, Bootstrap and Sass, and is building experience with Node.js, Express, PostgreSQL and automated testing with Mocha and Supertest.",
      "projects": "The vehicle manager brings together API data, filters and a map. The Markdown editor demonstrates React and Redux. Boss Machine adds backend experience with Express and automated API tests. You can explore their demos and code in Projects.",
      "contact": "You can email Álvaro at alvarodaviladev@gmail.com or contact him on LinkedIn to discuss a frontend opportunity."
    },
    "email": "Email Álvaro",
    "linkedin": "LinkedIn profile",
    "newTab": "opens in a new tab"
  },
  "es": {
    "eyebrow": "ASISTENTE DEL PORTFOLIO",
    "heading": "¿Quieres saber más sobre mi perfil?",
    "description": "Conoce su perfil con algunas preguntas rápidas. Las respuestas están preparadas a partir de su portfolio.",
    "welcome": "¡Hola! ¿Qué te gustaría saber sobre Álvaro?",
    "assistant": "Asistente del portfolio",
    "visitor": "Tú",
    "group": "Preguntas sugeridas",
    "log": "Conversación sobre Álvaro",
    "reset": "Limpiar conversación",
    "minimize": "Minimizar asistente",
    "restore": "Expandir asistente",
    "questions": {
      "about": "Cuéntame sobre él",
      "skills": "¿Qué tecnologías usa?",
      "projects": "¿Qué proyectos destacan?",
      "contact": "¿Cómo puedo contactarlo?"
    },
    "answers": {
      "about": "Álvaro es desarrollador frontend en Chile, enfocado en JavaScript y React. Su experiencia en traducción y localización aporta atención al detalle y comunicación clara. Busca integrarse a un equipo frontend donde pueda contribuir y seguir aprendiendo.",
      "skills": "Sus herramientas principales son HTML, CSS, JavaScript y React. También usa Next.js, Tailwind CSS, Bootstrap y Sass, y está ampliando su experiencia con Node.js, Express, PostgreSQL y pruebas automatizadas con Mocha y Supertest.",
      "projects": "El gestor de vehículos integra datos de una API, filtros y un mapa. El editor de Markdown demuestra el uso de React y Redux. Boss Machine suma experiencia de backend con Express y pruebas automatizadas de la API. En Proyectos puedes explorar sus demos y código.",
      "contact": "Puedes escribir a Álvaro a alvarodaviladev@gmail.com o contactarlo por LinkedIn para conversar sobre una oportunidad frontend."
    },
    "email": "Escribir a Álvaro",
    "linkedin": "Perfil de LinkedIn",
    "newTab": "se abre en una pestaña nueva"
  }
};
  document.addEventListener('DOMContentLoaded', () => {
    const panel = document.querySelector('.portfolio-chat');
    if (!panel) return;
    const log = panel.querySelector('.chat-log');
    const minimize = panel.querySelector('.chat-minimize');
    const chatContent = panel.querySelector('#chat-content');
    let minimized = true;
    const questions = [...panel.querySelectorAll('[data-chat-question]')];
    const history = [];
    const content = () => copy[document.documentElement.lang === 'es' ? 'es' : 'en'];

    function updateMinimizedState() {
      chatContent.hidden = minimized;
      minimize.setAttribute('aria-expanded', String(!minimized));
      const label = minimized ? content().restore : content().minimize;
      minimize.setAttribute('aria-label', content().heading + '. ' + label);
      minimize.setAttribute('title', label);
    }

    minimize.addEventListener('click', () => {
      minimized = !minimized;
      updateMinimizedState();
    });

    function appendMessage(text, user = false, contact = false) {
      const words = content();
      const message = document.createElement('div');
      message.className = 'chat-message' + (user ? ' chat-message-user' : '');
      const author = document.createElement('strong');
      author.textContent = user ? words.visitor : words.assistant;
      const paragraph = document.createElement('p');
      paragraph.textContent = text;
      message.append(author, paragraph);
      if (contact) {
        const links = [
          [words.email, 'mailto:alvarodaviladev@gmail.com'],
          [words.linkedin, 'https://www.linkedin.com/in/alvarodavilapinto/']
        ];
        links.forEach(([label, href], index) => {
          if (index) message.append(document.createTextNode(' · '));
          const link = document.createElement('a');
          link.textContent = label;
          link.href = href;
          if (href.startsWith('https:')) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
            link.setAttribute('aria-label', label + ' (' + words.newTab + ')');
          }
          message.append(link);
        });
      }
      log.append(message);
    }

    function appendAnswer(id) {
      appendMessage(content().questions[id], true);
      appendMessage(content().answers[id], false, id === 'contact');
    }

    function render() {
      const words = content();
      updateMinimizedState();
      panel.querySelector('.chat-eyebrow').textContent = words.eyebrow;
      panel.querySelector('#chat-heading').textContent = words.heading;
      panel.querySelector('.chat-description').textContent = words.description;
      panel.querySelector('.chat-questions').setAttribute('aria-label', words.group);
      panel.querySelector('.chat-reset').textContent = words.reset;
      log.setAttribute('aria-label', words.log);
      questions.forEach(button => { button.textContent = words.questions[button.dataset.chatQuestion]; });
      log.replaceChildren();
      appendMessage(words.welcome);
      history.forEach(appendAnswer);
      log.scrollTop = history.length ? log.scrollHeight : 0;
    }

    questions.forEach(button => button.addEventListener('click', () => {
      const id = button.dataset.chatQuestion;
      history.push(id);
      if (history.length > 4) {
        history.shift();
        render();
      } else {
        appendAnswer(id);
      }
      log.scrollTop = log.scrollHeight;
    }));
    panel.querySelector('.chat-reset').addEventListener('click', () => {
      history.length = 0;
      render();
    });
    document.addEventListener('languagechange', render);
    render();
    panel.hidden = false;
  });
})();
