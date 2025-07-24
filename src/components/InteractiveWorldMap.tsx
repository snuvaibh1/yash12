import React from 'react';
import { motion } from 'framer-motion';

const InteractiveWorldMap = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black text-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          className="text-3xl sm:text-4xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Our Champions Around the World
        </motion.h2>
        <motion.p
          className="mt-4 max-w-2xl mx-auto text-lg text-gray-300"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
        >
          From New York to New Delhi, meet the heroes who've transformed their lives.
        </motion.p>
      </div>

      {/* Map Section */}
      <motion.div
        className="relative w-full h-[400px] rounded-2xl overflow-hidden my-12"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <iframe
          src="https://umap.openstreetmap.fr/en/map/untitled-map_1259305?scaleControl=false&miniMap=false&scrollWheelZoom=false&zoomControl=true&editMode=disabled&moreControl=true&searchControl=null&tilelayersControl=null&embedControl=null&datalayersControl=true&onLoadPanel=none&captionBar=false&captionMenus=true"
          className="absolute inset-0 w-full h-full border-0"
          allow="geolocation"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>

      {/* Call to Action */}
      <motion.div
        className="text-center mt-16"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h3 className="text-2xl font-semibold">Want to Be on the Map?</h3>
        <p className="mt-2 text-gray-400">
          Join the Champion Lifestyle program today and transform your journey.
        </p>
        <div className="mt-6 flex justify-center gap-4">
          <a
            href="https://youtu.be/zoLP2Q0k6dE?si=ynVrRWElYFoa8aHU"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Watch Transformation
          </a>
          <a
            href="https://calendly.com/championlifestyle-yash/30min?month=2025-07"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-red-700 transition"
          >
            Begin Transformation
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default InteractiveWorldMap;
