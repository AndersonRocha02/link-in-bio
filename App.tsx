import React from 'react';
import BackgroundEffects from './components/BackgroundEffects';
import ProfileHeader from './components/ProfileHeader';
import LinkCard from './components/LinkCard';
import Footer from './components/Footer';
import { PROFILE_DATA, LINKS_DATA } from './constants';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-x-hidden">
      
      <BackgroundEffects />

      <main className="relative z-10 w-full max-w-lg px-6 py-12 flex flex-col gap-8">
        <ProfileHeader data={PROFILE_DATA} />

        <nav className="flex flex-col gap-4 w-full">
          {LINKS_DATA.map((link) => (
            <LinkCard key={link.id} item={link} />
          ))}
        </nav>

        <Footer />
      </main>
      
    </div>
  );
};

export default App;