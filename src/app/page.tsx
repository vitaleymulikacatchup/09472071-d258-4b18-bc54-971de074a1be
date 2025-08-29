"use client"
import NavbarBase from '@/components/navigation/NavbarBase';
import BillboardHero from '@/components/sections/layouts/hero/BillboardHero';
import SplitAbout from '@/components/sections/layouts/about/SplitAbout';
import ProcessRoadmap from '@/components/sections/layouts/roadmap/ProcessRoadmap';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <>
      <NavbarBase 
        logoSrc="/images/logo.svg"
        logoAlt="MemeCoin Logo"
        logoClassName="h-10"
        leftButtonText=""
        rightButtonText="Buy Meme"
        onLeftButtonClick={() => {}}
        onRightButtonClick={() => {}}
        className="bg-transparent"
      />

      <BillboardHero 
        title="Welcome to MemeCoin!"
        subtitle="Your journey to cryptocurrency starts here."
      />

      <SplitAbout 
        description="Dive into the world of memes and tokens and learn how to buy them efficiently."
      />

      <ProcessRoadmap 
        items={[
          { id: '1', title: 'Phase 1: Research', description: 'Initial insights and understandings.', items: [], reverse: false, image: '/images/phase1.jpg' },
          { id: '2', title: 'Phase 2: Development', description: 'Building the underlying systems.', items: [], reverse: true, image: '/images/phase2.jpg' },
          { id: '3', title: 'Phase 3: Launch', description: 'Making MemeCoin available to the masses.', items: [], reverse: false, image: '/images/phase3.jpg' }
        ]}
        className="bg-futuristic-card-bg"
      />

      <FooterBase 
        logoSrc="/images/logo.svg"
        logoWidth={100}
        logoHeight={60}
        columns={[
          { title: 'Links', items: [ { label: 'Home', onClick: () => {} }, { label: 'About', onClick: () => {} } ] },
          { title: 'Services', items: [ { label: 'Buy', onClick: () => {} }, { label: 'Sell', onClick: () => {} } ] },
          { title: 'Support', items: [ { label: 'Help', onClick: () => {} }, { label: 'Contact', onClick: () => {} } ] }
        ]}
        copyrightText="© 2023 MemeCoin. All rights reserved."
        onPrivacyClick={() => {}}
        className="bg-transparent"
      />
    </>
  );
}
