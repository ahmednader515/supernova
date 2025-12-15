'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
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
              <a href="#home" className="text-black font-medium tracking-wider uppercase hover:underline hover:underline-offset-4 transition-all duration-300 underline">
                Home
              </a>
              <a href="#how-to-play" className="text-black font-medium tracking-wider uppercase hover:underline hover:underline-offset-4 transition-all duration-300">
                Experience
              </a>
              <a href="#characters" className="text-black font-medium tracking-wider uppercase hover:underline hover:underline-offset-4 transition-all duration-300">
                Technology
              </a>
              <a href="#news" className="text-black font-medium tracking-wider uppercase hover:underline hover:underline-offset-4 transition-all duration-300">
                Contact
              </a>
              <a href="#about" className="text-black font-medium tracking-wider uppercase hover:underline hover:underline-offset-4 transition-all duration-300">
                About Us
              </a>
            </div>
            <div className="md:hidden">
              <Button variant="outline" size="sm" className="cyber-border cyber-border-hover">
                ☰
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Text */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          <div className="flex items-center justify-center w-full h-full gap-128">
            <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black select-none text-black font-blanka tracking-widest">
              SUPER
            </span>
            <span className="text-[4rem] sm:text-[6rem] md:text-[8rem] lg:text-[10rem] font-black select-none text-black font-blanka tracking-widest">
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
            className="w-full h-full flex items-end justify-center"
          >
            <img
              src="/hero.png"
              alt="SUPERNOVA Game"
              className="w-[95%] h-[95%] object-contain"
            />
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
              className="w-full bg-white/10 backdrop-blur-lg text-white text-xl px-8 py-6 transition-all duration-300 border border-white/30 hover:bg-white/15 hover:backdrop-blur-md hover:border-white/50 hover:shadow-lg rounded-lg flex items-center justify-center gap-3"
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

      {/* How to Play Section */}
      <section id="how-to-play" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-8 cyber-text-glow">
              Game Concept
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Join forces with your friends as heroes to face villains and control the futuristic city. 
              In a cyberpunk world full of danger and adventure, lead your team to victory in epic battles 
              filled with advanced technology and superpowers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Characters Section */}
      <section id="characters" className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-8 cyber-text-glow">
              Heroes & Villains
            </h2>
          </motion.div>

          {/* Heroes */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center cyber-text">
              Heroes
            </h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <Card className="cyber-border cyber-border-hover h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl cyber-text-glow">Speedtest</CardTitle>
                    <CardDescription className="text-lg">
                      Superhero with light speed abilities
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      Possesses superhuman speed and movement abilities, can navigate at lightning speed 
                      and face enemies with fast and powerful strikes.
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
                <Card className="cyber-border cyber-border-hover h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl cyber-text-glow">Flycaw</CardTitle>
                    <CardDescription className="text-lg">
                      Shoots fire and transforms into a dragon
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      A fierce fighter who can transform into a massive dragon, shoots fire with devastating power 
                      and flies in the sky to face enemies from above.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>

          {/* Villains */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold mb-8 text-center cyber-text">
              Villains
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="cyber-border cyber-border-hover h-full">
                    <CardHeader>
                      <CardTitle className="text-xl cyber-text-glow">
                        Villain {i}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700">
                        A powerful and terrifying enemy who threatens the peace of the futuristic city.
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Minions */}
          <div>
            <h3 className="text-3xl font-bold mb-8 text-center cyber-text">
              Minions
            </h3>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <Card className="cyber-border cyber-border-hover max-w-2xl mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl cyber-text-glow">Hordes of Minions</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 text-lg">
                    Hordes of mechanical creatures and robots that serve the villains, 
                    posing an additional challenge for heroes in their journey to save the city.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* News and Updates Section */}
      <section id="news" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold mb-8 cyber-text-glow">
              Latest News
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Beta Release Coming Soon!",
                description: "The beta version will be available to everyone soon. Get ready for the adventure!",
                date: "January 15, 2025"
              },
              {
                title: "Amazing New Features",
                description: "Discover the new features that will add more excitement to the game.",
                date: "January 10, 2025"
              },
              {
                title: "Character Design Contest",
                description: "Participate in the new character design contest and win amazing prizes!",
                date: "January 5, 2025"
              }
            ].map((news, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="cyber-border cyber-border-hover h-full">
                  <CardHeader>
                    <CardTitle className="text-xl cyber-text-glow">
                      {news.title}
                    </CardTitle>
                    <CardDescription className="text-sm text-gray-500">
                      {news.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">
                      {news.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
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