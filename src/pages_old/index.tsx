'use client'
const projects = [
  {
    title: 'Exampic',
    technology: 'React-Native',
    description: 'Exampic: Your container image captain!  Take command with this cutting-edge logistics app, designed to streamline collection, management, and inspection of container images.',
    contributions: 'Developing frontend application, Developing server-side REST API, Designing & Developing in ReactJS and REDUX.',
    technologies: 'React Native, JavaScript, React js, REDUX, Php-Rest-Api',
    role: 'Front-End Developer',
    link: '#',
    image: '/path/to/exampic-image.jpg', // Replace with actual image path
  },
  {
    title: 'Zero2two',
    technology: 'React-Native',
    description: 'Zero2two: Shopping made fun for tiny trendsetters!  This innovative app lets kids explore and purchase items securely, with vendor and user apps for a smooth shopping experience.',
    contributions: 'Developing Front-End application, Designing & Developing Mobile Frontend in React-Native.',
    technologies: 'React Native, Redux, Redux-thunk, Redux-Persist, Mysql, php',
    role: 'Front-End Developer',
    link: '#',
    image: '/path/to/zero2two-image.jpg', // Replace with actual image path
  },
  {
    title: 'Ergent',
    technology: 'React-Native',
    description: 'Ergent: Get the medical help you need, lightning fast! This app connects you with emergency services in record time, revolutionizing access to critical care.',
    contributions: 'Front-End Developer',
    technologies: 'React-native, React js, Mysql, php, HTML, CSS, Bootstrap',
    role: 'Front-End Developer',
    link: '#',
    image: '/path/to/ergent-image.jpg', // Replace with actual image path
  },
  {
    title: 'Matchologists',
    technology: 'React-Native',
    description: 'Matchologists: Find your perfect match, scientifically!  This social media dating app uses personalized profiles and real-time features to spark meaningful connections.',
    contributions: 'Front-End Engineer',
    technologies: 'React native, Redux',
    role: 'Front-End Engineer',
    link: 'https://play.google.com/store/apps/details?id=com.matchologists',
    image: '/path/to/matchologists-image.jpg', // Replace with actual image path
  },
  {
    title: 'Car.co.uk',
    technology: 'React js',
    description: 'Car Co UK: Scrapping your car just got easier! This comprehensive service simplifies the process with insurance, finance, warranties, and more – a smooth ride to the finish line.',
    contributions: 'Developing Front-end application, Designing & Developing Website in ReactJs',
    technologies: 'React js, HTML, CSS, Bootstrap, Redux, Redux Saga, Redux-thunk',
    role: 'Front-End Developer',
    link: '#',
    image: '/path/to/car-co.uk-image.jpg', // Replace with actual image path
  },
  {
    title: 'Sirri.co.uk',
    technology: 'React js', // This technology is listed twice, remove the duplicate
    description: 'Sirri: The future of shopping is here! This progressive web app integrates seamlessly with Magento, offering personalized recommendations and a secure checkout for a delightful shopping experience.',
    contributions: 'Developing Front-end application, Designing & Developing Website in ReactJS.',
    technologies: 'React js, HTML, CSS, Bootstrap, Redux, Redux Saga, Redux-thunk, Context, React-pwa',
    role: 'Front-End Developer',
    link: '#',
    image: '/path/to/sirri-co.uk-image.jpg', // Replace with actual image path
  },
  {
    title: 'Lugmety',
    technology: 'ReactJs',
    description: 'Lugmety: Get your food cravings satisfied, delivered! This food delivery app connects you with your favorite restaurants, bringing delicious meals straight to your doorstep.',
    contributions: 'Developing Front-end application, Designing & Developing Website in ReactJS.',
    technologies: 'React js, HTML, CSS, Bootstrap, Redux, Redux Saga, Redux-thunk',
    role: 'Front-End Developer',
    link: '#',
    image: '/path/to/sirri-co.uk-image.jpg', // Replace with actual image path
  },
  
  {
    title: 'Clerk',
    technology: 'React js',
    description: 'Clerk: Your one-stop booking solution! Easily book appointments, services, and experiences across various categories. We handle provider management and personalized recommendations, making your life easier.',
    contributions: 'Developing front-end application, Designing & Developing Web Admin in ReactJS.',
    technologies: 'React js, Laravel, PostgreSql, HTML, CSS, Bootstrap',
    role: 'Front-End Developer',
    link: '#',
    image: '/path/to/clerk-image.jpg', // Replace with actual image path
  },
  {
    title: 'Opalink',
    technology: 'React-Native',
    description: 'Opalink: Food, friends, and fun! This app brings people together through online food ordering, group dine-in experiences, and a vibrant community for chatting and sharing food gifts.',
    contributions: 'Developing Front-end application, Designing & Developing Website in React-Native.',
    technologies: 'React-Native, Redux, Redux-Saga',
    role: 'Front-End Developer',
    link: 'https://play.google.com/store/apps/details?id=com.app.opalink',
    image: '/path/to/opalink-image.jpg', // Replace with actual image path
  },
  {
    title: 'Xenia-Team',
    technology: 'React-Native',
    description: "Xenia-Team: Boost your team's productivity! This powerful app streamlines task management, communication, and employee management, helping your team work smarter, not harder.",
    contributions: 'Developing Front-end application, Designing & Developing Website in React-Native.',
    technologies: 'React-Native, Redux, Redux-Saga',
    role: 'Front-End Developer',
    link: 'https://play.google.com/store/apps/details?id=com.xenia.xeniaApp',
    image: '/path/to/xenia-team-image.jpg', // Replace with actual image path
  },
]

export default function Home() {
  return (
    <main className="bg-gray-100 text-gray-900">
      {/* Navbar */}
      <nav className="bg-blue-600 shadow-md py-4">
        <div className="container mx-auto flex justify-between items-center px-6">
          <div className="text-3xl font-bold text-white">Abhishek Kalia</div>
          <ul className="flex space-x-8 text-white text-lg">
            <li><a href="#about" className="hover:text-blue-300 transition-colors">About</a></li>
            <li><a href="#expertise" className="hover:text-blue-300 transition-colors">Expertise</a></li>
            <li><a href="#experience" className="hover:text-blue-300 transition-colors">Experience</a></li>
            <li><a href="#projects" className="hover:text-blue-300 transition-colors">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Header Section */}
      <header className="bg-gray-900 text-white py-24">
        <div className="container mx-auto flex flex-col items-center px-6">
          <img src="/images/profile.png" alt="Profile Picture" className="rounded-full shadow-lg mb-6 w-40 h-40 object-cover border-4 border-blue-500" />
          <h1 className="text-5xl font-extrabold leading-tight">Abhishek Kumar Kalia</h1>
          <p className="mt-4 text-xl">Senior Software Engineer at IndiaNIC Infotech Ltd</p>
          <div className="mt-4 text-center">
            <p className="text-lg">📞 +91-8866435911 | 📧 <a href="mailto:kabhi1792@gmail.com" className="hover:text-blue-300">kabhi1792@gmail.com</a></p>
          </div>
          <div className="flex mt-6 space-x-4">
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="LinkedIn" className="h-10 w-10 rounded-full" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:opacity-80 transition-opacity">
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="GitHub" className="h-10 w-10 rounded-full" />
            </a>
          </div>
        </div>
      </header>

      {/* About Me Section */}
      <section id="about" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
          <p className="text-lg leading-relaxed">
            I am an experienced IT professional with over 8 years of expertise in Fullstack Development Technologies. My skills span across a wide range of technologies including React Native, ReactJS, Electron js, Next js, Apollo-server-graphql, PostgreSQL, MySQL, Amazon Services, and Mobile Application Development Technologies. I also have a strong background in DevOps practices, including CI/CD and Docker implementation. With my in-depth knowledge and hands-on experience, I am adept at delivering high-quality solutions and meeting project requirements. I thrive in challenging environments and continuously stay updated with the latest industry trends and best practices.
          </p>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">React Native Development</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proficient in developing cross-platform mobile applications using React Native framework.</li>
                <li>Strong understanding of React Native architecture, Function and Class component-based development, and UI implementation.</li>
                <li>Experience in building responsive and user-friendly mobile interfaces.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">JavaScript and ES6</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>In-depth knowledge of JavaScript and ES6 syntax, concepts, and best practices.</li>
                <li>Skilled in writing efficient and optimized code using modern JavaScript features.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Redux State Management</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Expertise in implementing Redux for managing application state in React Native projects.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Mobile App Deployment</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Experience in deploying React Native applications to both iOS and Android platforms.</li>
                <li>Familiarity with the app submission and release processes for App Store and Google Play Store.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">DevOps Practices</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Strong background in DevOps practices, including CI/CD and Docker implementation.</li>
                <li>Experienced in automating deployment processes and managing cloud infrastructure.</li>
              </ul>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-4">Database Management</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Proficient in PostgreSQL and MySQL for database management and optimization.</li>
                <li>Experience in designing and maintaining scalable database architectures.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Experience</h2>
          <div className="space-y-8">
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">Sr. Software Engineer - IndiaNIC Infotech Ltd</h3>
              <p className="text-lg mb-2">Ahmedabad, India (Sep 2018 - Present)</p>
              <p className="text-lg">I am currently working at IndiaNIC Infotech Ltd as a Senior Software Engineer, where I lead various full-stack development projects and contribute to the advancement of technology solutions.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">Software Engineer - Ebiztrait Technolab Pvt Ltd</h3>
              <p className="text-lg mb-2">Ahmedabad, India (Nov 2017 - Aug 2018)</p>
              <p className="text-lg">At Ebiztrait Technolab, I worked as a software engineer, focusing on developing web and mobile applications with a strong emphasis on user experience and functionality.</p>
            </div>
            <div className="bg-gray-100 p-8 rounded-lg shadow-lg hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-semibold mb-2">Software Developer - Empezar Consulting Private Ltd</h3>
              <p className="text-lg mb-2">Ahmedabad, India (Aug 2016 - Oct 2017)</p>
              <p className="text-lg">During my tenure at Empezar Consulting, I was involved in various software development projects, contributing to both front-end and back-end development tasks.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Projects Section */}
      <section id="projects" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-extrabold text-center mb-12">Projects</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.title} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                <img src={project.image} alt={project.title} className="w-full h-40 object-cover" />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-700 mb-4"><strong>Technology:</strong> {project.technology}</p>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <p className="text-gray-700 mb-2"><strong>Major Contributions:</strong> {project.contributions}</p>
                  <p className="text-gray-700 mb-4"><strong>Technologies Used:</strong> {project.technologies}</p>
                  <p className="text-gray-700 mb-4"><strong>Role:</strong> {project.role}</p>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">View Project</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Contact Section */}
      <section id="contact" className="bg-white py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">Contact Me</h2>
          <form className="max-w-lg mx-auto">
            <div className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-lg font-semibold mb-2">Name</label>
                <input type="text" id="name" name="name" className="w-full p-3 border border-gray-300 rounded-lg" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-lg font-semibold mb-2">Email</label>
                <input type="email" id="email" name="email" className="w-full p-3 border border-gray-300 rounded-lg" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-lg font-semibold mb-2">Message</label>
                <textarea id="message" name="message" className="w-full p-3 border border-gray-300 rounded-lg" required/>
              </div>
              <button type="submit" className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">Send Message</button>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto text-center">
          <p>&copy; 2024 Abhishek Kumar Kalia. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
