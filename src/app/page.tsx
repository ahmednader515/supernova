'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useEffect, useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');
  const [zoomedImage, setZoomedImage] = useState<string | null>(null);
  const [gameplayCarouselIndex, setGameplayCarouselIndex] = useState(0);

  useEffect(() => {
    const sections = ['home', 'how-to-play', 'characters', 'gameplay', 'about'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px',
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        observer.observe(element);
      }
    });

    // Set initial active section based on scroll position
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;
      
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close modal on ESC key press and prevent body scroll
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && zoomedImage) {
        setZoomedImage(null);
      }
    };

    if (zoomedImage) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEscape);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [zoomedImage]);

  // Auto-slide gameplay carousel
  useEffect(() => {
    const interval = setInterval(() => {
      setGameplayCarouselIndex((prev) => {
        if (prev >= 5) {
          return 0; // Loop back to start
        }
        return prev + 1;
      });
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white text-gray-900">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black tracking-wider">
              SUPERNOVA
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className={`text-black font-medium tracking-wider uppercase squiggly-underline squiggly-underline-1 ${activeSection === 'home' ? 'active' : ''}`}>
                Home
              </a>
              <a href="#how-to-play" className={`text-black font-medium tracking-wider uppercase squiggly-underline squiggly-underline-2 ${activeSection === 'how-to-play' ? 'active' : ''}`}>
                Iconic Moments
              </a>
              <a href="#characters" className={`text-black font-medium tracking-wider uppercase squiggly-underline squiggly-underline-3 ${activeSection === 'characters' ? 'active' : ''}`}>
                Heroes
              </a>
              <a href="#gameplay" className={`text-black font-medium tracking-wider uppercase squiggly-underline squiggly-underline-4 ${activeSection === 'gameplay' ? 'active' : ''}`}>
                Gameplay Features
              </a>
              <a href="#about" className={`text-black font-medium tracking-wider uppercase squiggly-underline squiggly-underline-5 ${activeSection === 'about' ? 'active' : ''}`}>
                Are You Ready?
              </a>
            </div>
            <div className="md:hidden">
              <Button variant="outline" size="sm" className="border-2 border-black hover:bg-gray-100">
                ☰
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-start justify-center z-10 pt-72 sm:pt-32 md:pt-40">
          <div className="flex flex-row items-center justify-center w-full gap-2 sm:gap-4 md:gap-128">
            <span className="text-[3rem] sm:text-[3.5rem] md:text-[8rem] lg:text-[10rem] font-black select-none text-black font-blanka tracking-widest">
              SUPER
            </span>
            <span className="text-[3rem] sm:text-[3.5rem] md:text-[8rem] lg:text-[10rem] font-black select-none text-black font-blanka tracking-widest">
              NOVA
            </span>
          </div>
        </div>
        
        {/* Hero Image - 100vh */}
        <div className="relative w-full h-screen z-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="relative w-full h-full flex items-end justify-center"
          >
            <div className="relative w-[95%] h-[95%] md:w-[95%] md:h-[95%] flex items-end md:items-center justify-center">
              <div className="relative w-full h-full md:inline-block md:max-w-full md:max-h-full flex items-end md:items-center justify-center">
                {/* Mobile Image - 100% width, positioned at bottom */}
                <div className="relative w-full h-auto md:hidden self-end">
                  <img
                    id="hero-image-mobile"
                    src="/hero-mobile.png"
                    alt="SUPERNOVA Game"
                    className="w-full h-auto object-contain block"
                  />
                  {/* Electricity GIF - Positioned relative to mobile image */}
                  <div 
                    className="absolute z-40 pointer-events-none"
                    style={{
                      top: '0',
                      left: '30%',
                      transform: 'translateX(-50%) rotate(-40deg)',
                    }}
                  >
                    <img
                      src="/electricity.gif"
                      alt="Electricity Effect"
                      className="object-cover"
                      style={{
                        width: 'clamp(120px, 10vw, 300px)',
                        height: 'clamp(100px, 100vw, 120px)'
                      }}
                    />
                  </div>
                  {/* Fire GIF - Positioned relative to mobile image (right side) */}
                  <div 
                    className="absolute z-40 pointer-events-none"
                    style={{
                      top: '10%',
                      right: '10%',
                      transform: 'translateX(50%) rotate(120deg)',
                    }}
                  >
                    <img
                      src="/fire.gif"
                      alt="Fire Effect"
                      className="object-cover"
                      style={{
                        width: 'clamp(120px, 10vw, 300px)',
                        height: 'clamp(100px, 100vw, 120px)'
                      }}
                    />
                  </div>
                </div>
                {/* Desktop Image */}
                <div className="relative hidden md:block w-full h-full">
                  <img
                    id="hero-image"
              src="/hero.png"
              alt="SUPERNOVA Game"
                    className="w-full h-full object-contain"
                  />
                  {/* Electricity GIF - Positioned relative to desktop image */}
                  <div 
                    className="absolute z-40 pointer-events-none"
                    style={{
                      top: '12%',
                      left: '40%',
                      transform: 'translateX(-50%) rotate(-40deg)',
                    }}
                  >
                    <img
                      src="/electricity.gif"
                      alt="Electricity Effect"
                      className="object-cover"
                      style={{
                        width: 'clamp(100px, 20vw, 200px)',
                        height: 'clamp(60px, 12vw, 120px)'
                      }}
                    />
                  </div>
                  {/* Fire GIF - Positioned relative to desktop image (right side) */}
                  <div 
                    className="absolute z-40 pointer-events-none"
                    style={{
                      top: '25%',
                      right: '30%',
                      transform: 'translateX(50%) rotate(120deg)',
                    }}
                  >
                    <img
                      src="/fire.gif"
                      alt="Fire Effect"
                      className="object-cover"
                      style={{
                        width: 'clamp(100px, 20vw, 300px)',
                        height: 'clamp(60px, 12vw, 120px)'
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Button Container - full width at very bottom */}
        <div className="absolute bottom-0 left-0 right-0 z-30">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="w-full"
          >
            <Button 
              size="lg" 
              className="w-full bg-white/10 backdrop-blur-lg text-white text-xl px-8 py-6 transition-all duration-300 border border-white/30 hover:bg-white/15 hover:backdrop-blur-md hover:border-white/50 hover:shadow-lg rounded-lg flex items-center justify-center gap-3 shadow-[0_4px_20px_rgba(0,0,0,0.3),0_0_40px_rgba(0,0,0,0.1)]"
            >
              <img 
                src="/Steam_icon_logo.svg.png" 
                alt="Steam Logo" 
                className="w-8 h-8"
              />
              Available Now on Steam
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Game Concept Section - Iconic Moments Style */}
      <section id="how-to-play" className="relative py-20 md:py-32 overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/concept-section.mp4" type="video/mp4" />
          </video>
          {/* Fade Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/70 to-black/80"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16 md:mb-24"
          >
            <h2 className="text-4xl md:text-6xl font-black mb-4 text-white uppercase tracking-wider">
              Iconic Moments
            </h2>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Super Nova returns, stronger than ever, ready to protect and inspire all!
            </p>
          </motion.div>

          <div className="max-w-7xl mx-auto space-y-16 md:space-y-24">
            {/* Moment 1 - Image Left, Text Right */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch"
          >
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src="/city-1.jpg"
                  alt="City Invasion"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text Content */}
              <div className="text-white flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl font-black uppercase mb-6 leading-tight">
                  Descend Into Intense Combat Zones
            </h3>
                <p className="text-base md:text-lg text-white/80 mb-6 leading-relaxed">
                  As robotic invaders lay waste to cities worldwide, the heroes descend into intense combat zones across Earth&apos;s surface. Engage in high-intensity missions against waves of advanced enemy robots.
                </p>
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-6 rounded-none uppercase w-fit"
                  onClick={() => setZoomedImage('city-1')}
                >
                  View Now
                </Button>
              </div>
              </motion.div>

            {/* Moment 2 - Text Left, Image Right */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
                  viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch"
            >
              {/* Text Content */}
              <div className="text-white order-2 md:order-1 flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl font-black uppercase mb-6 leading-tight">
                  Complete Multiple Objectives To Clear Invasion Zones
                </h3>
                <p className="text-base md:text-lg text-white/80 mb-6 leading-relaxed">
                  Navigate through devastated urban landscapes, complete multiple objectives and quests to clear invasion zones. Each mission brings you closer to stopping the alien threat.
                      </p>
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-6 rounded-none uppercase w-fit"
                  onClick={() => setZoomedImage('city-2')}
                >
                  View Now
                </Button>
          </div>

              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden order-1 md:order-2">
                <img
                  src="/city-2.jpg"
                  alt="City Invasion"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Moment 3 - Image Left, Text Right */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch"
            >
              {/* Image */}
              <div className="w-full aspect-[4/3] overflow-hidden">
                <img
                  src="/city-3.jpg"
                  alt="City Invasion"
                  className="w-full h-full object-cover"
                />
              </div>
              
              {/* Text Content */}
              <div className="text-white flex flex-col justify-center">
                <h3 className="text-2xl md:text-4xl font-black uppercase mb-6 leading-tight">
                  Battle Through Devastated Cities Worldwide
                </h3>
                <p className="text-base md:text-lg text-white/80 mb-6 leading-relaxed">
                  Fight through the ruins of Earth&apos;s greatest cities as robotic invaders harvest resources and destroy everything in their path. The heroes must act fast before Earth falls completely.
                </p>
                <Button 
                  className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-8 py-6 rounded-none uppercase w-fit"
                  onClick={() => setZoomedImage('city-3')}
                >
                  View Now
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heroes Section - Cards */}
      <section id="characters" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-8 text-black">
              Heroes
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto items-start">
            {[
              {
                image: '/velocity.PNG',
                name: 'Velocity',
                subtitle: 'Light Speed Abilities',
                description: 'A hero with superhuman speed and movement abilities, capable of navigating at lightning speed and delivering fast, powerful strikes against enemies.',
                topOffset: 'mt-0'
              },
              {
                image: '/void.PNG',
                name: 'Void',
                subtitle: 'Cosmic Void Powers',
                description: 'Wields the power of cosmic voids, manipulating space and darkness to create devastating attacks and control the battlefield.',
                topOffset: 'mt-16'
              },
              {
                image: '/overlord.PNG',
                name: 'Overlord',
                subtitle: 'Dominating Force',
                description: 'A commanding presence on the battlefield, using overwhelming force and tactical superiority to dominate enemies and lead the charge.',
                topOffset: 'mt-8'
              }
            ].map((hero, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 150 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`relative h-[600px] overflow-hidden rounded-lg ${hero.topOffset}`}
              >
                {/* Image - Full Size */}
                <img
                  src={hero.image}
                  alt={hero.name}
                  className="w-full h-full object-cover"
                />
                
                {/* Gradient Overlay for Text Readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
                
                {/* Text Content - Bottom Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
                  <h2 className="text-3xl md:text-4xl font-black mb-2 uppercase tracking-wider">
                    {hero.name}
                  </h2>
                  <h3 className="text-lg md:text-xl font-bold mb-4 text-yellow-400">
                    {hero.subtitle}
                  </h3>
                  <p className="text-sm md:text-base text-white/90 leading-relaxed">
                    {hero.description}
                    </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay Features Section */}
      <section id="gameplay" className="h-screen relative bg-cover bg-center bg-no-repeat flex items-center" style={{ backgroundImage: 'url(/features-section.png)' }}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-2 md:px-4 relative z-10 w-full h-full flex flex-col">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-8 mt-12 md:mt-16"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8 text-white">
              Gameplay Features
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-6 md:gap-8 w-full items-center flex-1 overflow-hidden">
            {/* Bullet Points on Left */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="flex items-center h-full md:col-span-2"
            >
              <ul className="space-y-4 text-white text-xl md:text-2xl">
                {[
                  "Choose between three unique heroes, each with distinct powers and combat styles",
                  "Engage in high-intensity missions against waves of advanced enemy robots",
                  "Complete multiple objectives (quests) to clear invasion zones",
                  "Face a massive boss battle at the end of each mission",
                  "Defeat a giant robotic boss with devastating abilities to achieve victory",
                  "Explosive combat, cinematic sci-fi action, and epic boss fights"
                ].map((feature, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start"
                  >
                    <span className="text-white mr-3 mt-1">•</span>
                    <span>{feature}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Gameplay Images Carousel on Right */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative md:col-span-3"
            >
              <div className="relative overflow-hidden rounded-lg">
                <motion.div
                  className="flex gap-3 md:gap-4"
                  animate={{
                    x: `-${gameplayCarouselIndex * (100 / 3)}%`
                  }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                  {[1, 3, 4, 5, 6, 7, 8, 9].map((i) => (
                    <div
                      key={i}
                      className="flex-shrink-0 h-[500px] rounded-lg overflow-hidden w-[calc(33.333%-0.5rem)] md:w-[calc(33.333%-0.67rem)]"
                    >
                      <img
                        src={`/gameplay-${i}.png`}
                        alt={`Gameplay ${i}`}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Space Station Section */}

      {/* Call to Action Section */}
      <section id="about" className="py-20 bg-white text-black">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8 text-black">
              Are You Ready?
            </h2>
            <p className="text-2xl mb-8 text-gray-700">
              Stand against the invasion and save Earth from total annihilation.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Super Nova delivers explosive combat, cinematic sci-fi action, and epic boss fights in a battle to save Earth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Modal/Lightbox */}
      {zoomedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
          onClick={() => setZoomedImage(null)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={`/${zoomedImage}.jpg`}
              alt="City Invasion"
              className="max-w-full max-h-full object-contain"
            />
            <button
              onClick={() => setZoomedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-yellow-500 transition-colors text-4xl font-bold bg-black/50 rounded-full w-12 h-12 flex items-center justify-center"
              aria-label="Close"
            >
              ×
            </button>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="py-8 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-lg"
          >
            © 2025 All rights reserved for SUPERNOVA game
          </motion.p>
        </div>
      </footer>
    </div>
  );
}