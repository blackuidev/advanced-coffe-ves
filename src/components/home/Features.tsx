import React from 'react';
import { Coffee, Zap, Globe } from 'lucide-react';
import { GlowingCards, GlowingCard } from '@/components/lightswind/glowing-cards';

const features = [
  {
    icon: <Coffee className="h-10 w-10" />,
    title: 'Interactive 3D Models',
    description: 'Explore our coffee beans and brewing equipment in stunning, interactive 3D.',
  },
  {
    icon: <Zap className="h-10 w-10" />,
    title: 'Animated Brewing Guides',
    description: 'Learn the art of coffee making with our step-by-step animated guides.',
  },
  {
    icon: <Globe className="h-10 w-10" />,
    title: 'Virtual Coffee Tasting',
    description: 'Experience our blends from around the world in a virtual tasting room.',
  },
];

const Features = () => {
  return (
    <section id="features" className="py-24 bg-stone-950 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">A New Dimension of Coffee</h2>
        <p className="max-w-3xl mx-auto text-white/70 mb-16">
          We are leveraging cutting-edge 3D technology to create a coffee experience that is as immersive as it is delicious.
        </p>
        <GlowingCards>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <GlowingCard key={index}>
                <div className="p-8">
                  <div className="flex items-center justify-center h-20 w-20 mb-6 rounded-full bg-brown-900/50 text-brown-300 mx-auto">
                    {feature.icon}
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
                  <p className="text-white/70">{feature.description}</p>
                </div>
              </GlowingCard>
            ))}
          </div>
        </GlowingCards>
      </div>
    </section>
  );
};

export default Features;
