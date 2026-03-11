import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Courses from './components/Courses';
import Demo from './components/Demo';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Courses />
        <Demo />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
