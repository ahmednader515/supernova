'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useEffect, useState } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('home');

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
                Concept
              </a>
              <a href="#characters" className={`text-black font-medium tracking-wider uppercase squiggly-underline squiggly-underline-3 ${activeSection === 'characters' ? 'active' : ''}`}>
                Heroes
              </a>
              <a href="#gameplay" className={`text-black font-medium tracking-wider uppercase squiggly-underline squiggly-underline-4 ${activeSection === 'gameplay' ? 'active' : ''}`}>
                Gameplay
              </a>
              <a href="#about" className={`text-black font-medium tracking-wider uppercase squiggly-underline squiggly-underline-5 ${activeSection === 'about' ? 'active' : ''}`}>
                About
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

      {/* Game Concept Section */}
      <section id="how-to-play" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-black">
              Game Concept
            </h2>
            <div className="w-24 h-1 bg-black mx-auto mb-12"></div>
          </motion.div>

          <div className="max-w-6xl mx-auto">
            {/* Main Introduction Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Card className="border-2 border-black bg-black text-white p-8 md:p-12">
                <CardContent className="p-0">
                  <h3 className="text-3xl font-bold mb-6 text-center">
                    Super Nova
                  </h3>
                  <p className="text-xl text-gray-200 text-center leading-relaxed">
                    A fast-paced sci-fi action game built with Unreal Engine 5, where humanity stands on the edge of extinction.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Story Cards Grid */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 border-black bg-white h-full p-6 hover:shadow-xl transition-shadow">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl font-bold text-black mb-2">
                      The Invasion
                    </CardTitle>
                    <div className="w-16 h-0.5 bg-black"></div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-700 leading-relaxed">
                      In the far reaches of space, a highly advanced alien world has begun invading and destroying planets one by one, harvesting their resources and enslaving entire civilizations. Earth is their next target.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 border-black bg-white h-full p-6 hover:shadow-xl transition-shadow">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-2xl font-bold text-black mb-2">
                      The Heroes
                    </CardTitle>
                    <div className="w-16 h-0.5 bg-black"></div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <p className="text-gray-700 leading-relaxed">
                      To stop the invasion, three super-powered heroes rise — each bound by a unique cosmic ability. United by an oath to protect Earth, they prepare for the final stand.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            {/* Journey Card */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-black bg-white p-6 md:p-8 hover:shadow-xl transition-shadow">
                <CardHeader className="p-0 mb-4">
                  <CardTitle className="text-2xl font-bold text-black mb-2">
                    The Journey Begins
                  </CardTitle>
                  <div className="w-16 h-0.5 bg-black"></div>
                </CardHeader>
                <CardContent className="p-0">
                  <p className="text-gray-700 text-lg leading-relaxed">
                    The journey begins aboard a space station orbiting near Earth. From there, the heroes launch into battle, piloting their spacecraft and descending into intense combat zones across the planet's surface.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Heroes Section */}
      <section id="characters" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-4 text-black">
              Three Super-Powered Heroes
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Choose between three unique heroes, each with distinct powers and combat styles
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Velocity Hero */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-black bg-black h-full hover:shadow-xl transition-shadow flex flex-col p-0">
                <div className="w-full h-80 overflow-hidden bg-gray-100 flex-shrink-0 rounded-t-lg">
                  <img
                    src="/velocity.PNG"
                    alt="Velocity"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'top center' }}
                  />
                </div>
                <CardHeader className="pt-6">
                  <CardTitle className="text-2xl font-bold text-white">Velocity</CardTitle>
                  <CardDescription className="text-lg text-gray-300">
                    Light Speed Abilities
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="text-gray-200">
                    A hero with superhuman speed and movement abilities, capable of navigating at lightning speed and delivering fast, powerful strikes against enemies.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Void Hero */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-black bg-black h-full hover:shadow-xl transition-shadow flex flex-col p-0">
                <div className="w-full h-80 overflow-hidden bg-gray-100 flex-shrink-0 rounded-t-lg">
                  <img
                    src="/void.PNG"
                    alt="Void"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'top center' }}
                  />
                </div>
                <CardHeader className="pt-6">
                  <CardTitle className="text-2xl font-bold text-white">Void</CardTitle>
                  <CardDescription className="text-lg text-gray-300">
                    Cosmic Void Powers
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="text-gray-200">
                    Wields the power of cosmic voids, manipulating space and darkness to create devastating attacks and control the battlefield.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Overlord Hero */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Card className="border-2 border-black bg-black h-full hover:shadow-xl transition-shadow flex flex-col p-0">
                <div className="w-full h-80 overflow-hidden bg-gray-100 flex-shrink-0 rounded-t-lg">
                  <img
                    src="/overlord.PNG"
                    alt="Overlord"
                    className="w-full h-full object-cover"
                    style={{ objectPosition: 'top center' }}
                  />
                </div>
                <CardHeader className="pt-6">
                  <CardTitle className="text-2xl font-bold text-white">Overlord</CardTitle>
                  <CardDescription className="text-lg text-gray-300">
                    Dominating Force
                  </CardDescription>
                </CardHeader>
                <CardContent className="pb-6">
                  <p className="text-gray-200">
                    A commanding presence on the battlefield, using overwhelming force and tactical superiority to dominate enemies and lead the charge.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gameplay Features Section */}
      <section id="gameplay" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-8 text-black">
              Gameplay Features
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {[
              "Choose between three unique heroes, each with distinct powers and combat styles",
              "Engage in high-intensity missions against waves of advanced enemy robots",
              "Complete multiple objectives (quests) to clear invasion zones",
              "Face a massive boss battle at the end of each mission",
              "Defeat a giant robotic boss with devastating abilities to achieve victory",
              "Explosive combat, cinematic sci-fi action, and epic boss fights"
            ].map((feature, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="border-2 border-black bg-black h-full hover:shadow-xl transition-shadow">
                  <CardContent className="pt-6">
                    <p className="text-white text-center">
                      {feature}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Gameplay Images Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-6xl mx-auto">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                viewport={{ once: true }}
                className="aspect-video overflow-hidden border-2 border-black"
              >
                <img
                  src={`/gameplay-${i}.png`}
                  alt={`Gameplay ${i}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Space Station Section */}
      <section id="space-station" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-8 text-black">
              The Journey Begins
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              The journey begins aboard a space station orbiting near Earth. From there, the heroes launch into battle, piloting their spacecraft and descending into intense combat zones across the planet's surface.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="border-2 border-black overflow-hidden"
            >
              <img
                src="/space-1.png"
                alt="Space Station"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="border-2 border-black overflow-hidden"
            >
              <img
                src="/lobby.png"
                alt="Hero Lobby"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* City Invasion Section */}
      <section id="city-invasion" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-8 text-black">
              City Invasion Zones
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Descend into intense combat zones across Earth's surface as robotic invaders lay waste to cities worldwide.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              { src: "/city-1.jpg", alt: "City Invasion 1" },
              { src: "/city-2.jpg", alt: "City Invasion 2" },
              { src: "/city-3.jpg", alt: "City Invasion 3" }
            ].map((city, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="border-2 border-black overflow-hidden aspect-video"
              >
                <img
                  src={city.src}
                  alt={city.alt}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Boss Battle Section */}
      <section id="boss-battle" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl font-bold mb-8 text-black">
              Epic Boss Battles
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-12">
              Face a massive boss battle at the end of each mission. Defeat a giant robotic boss with devastating abilities to achieve victory and save Earth from total annihilation.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto border-4 border-black overflow-hidden"
          >
            <img
              src="/boss.jpg"
              alt="Giant Robotic Boss"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section id="about" className="py-20 bg-black text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-8">
              Are You Ready?
            </h2>
            <p className="text-2xl mb-8 text-gray-300">
              Stand against the invasion and save Earth from total annihilation.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto">
              Super Nova delivers explosive combat, cinematic sci-fi action, and epic boss fights in a battle to save Earth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-gray-900 text-white">
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