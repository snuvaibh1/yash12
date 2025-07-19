import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share, Bookmark } from 'lucide-react';

const InstagramSection: React.FC = () => {
  const [likedPosts, setLikedPosts] = useState<Set<number>>(new Set());

  const instagramPosts = [
    {
      id: 1,
      image: 'https://i.imgur.com/GXjL89U.jpeg',
      caption: '12 weeks of dedication = 35 lbs transformation! 💪 #EliteTransformation #FitnessJourney',
      likes: 2847,
      comments: 156,
      timeAgo: '2h',
      location: 'Mumbai, India'
    },
    {
      id: 2,
      image: 'https://i.imgur.com/w9wWycg.jpeg',
      caption: 'From couch to confident! Sarah\'s incredible 16-week journey 🔥 #TransformationTuesday',
      likes: 3921,
      comments: 203,
      timeAgo: '5h',
      location: 'Delhi, India'
    },
    {
      id: 3,
      image: 'https://i.imgur.com/dzniUxo.jpeg',
      caption: 'Elite coaching delivers elite results! 💯 Another success story in the books 📚',
      likes: 1654,
      comments: 89
    },
    {
      id: 4,
      image: 'https://i.imgur.com/iT2Tx8F.jpeg',
      caption: 'Mind + Body transformation = Life transformation ✨ #MindsetMatters #EliteCoaching',
      likes: 2156,
      comments: 134
    },
    {
      id: 5,
      image: 'https://i.imgur.com/kzZKnkt.jpeg',
      caption: 'Strength isn\'t just physical - it\'s mental! 🧠💪 #StrengthTraining #MentalToughness',
      likes: 1892,
      comments: 97
    },
    {
      id: 6,
      image: 'https://i.imgur.com/d5ov7wJ.jpeg',
      caption: 'Another week, another breakthrough! 🚀 Consistency is everything #WeeklyWins',
      likes: 2743,
      comments: 178
    }
  ];

  const handleLike = (postId: number) => {
    setLikedPosts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(postId)) {
        newLiked.delete(postId);
      } else {
        newLiked.add(postId);
      }
      return newLiked;
    });
  };

  return (
    <section className="py-24 bg-gradient-to-b from-dark to-charcoal">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="flex items-center justify-center space-x-3 mb-6">
            <img src="https://i.imgur.com/FcxSkFm.png" alt="Logo" className="w-8 h-8" />
            <h2 className="text-4xl md:text-6xl font-black">
              Real-Time
              <br />
              <span className="text-primary">Transformations</span>
            </h2>
          </div>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Follow our journey on Instagram and see daily transformation updates, 
            workout tips, and success stories from our elite community.
          </p>
        </motion.div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {instagramPosts.map((post, index) => (
            <motion.div
              key={post.id}
              className="group relative bg-charcoal-light rounded-3xl overflow-hidden border border-white/10 hover:border-primary/30 transition-all duration-500"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Post Image */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={post.image}
                  alt="Transformation post"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Hover Overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="flex items-center space-x-6 text-white">
                    <div className="flex items-center space-x-2">
                      <Heart className="w-6 h-6" />
                      <span className="font-semibold">{post.likes.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MessageCircle className="w-6 h-6" />
                      <span className="font-semibold">{post.comments}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                {/* Post Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
<div className="w-10 h-10 rounded-full overflow-hidden">
  <img
    src="https://i.imgur.com/FcxSkFm.png"
    alt="Logo"
    className="w-full h-full object-cover"
  />
</div>
                    <div>
                      <div className="font-bold text-white text-sm">campione.yash</div>
                      <div className="text-white/60 text-xs">{post.location}</div>
                    </div>
                  </div>
                  <div className="text-white/60 text-xs">{post.timeAgo}</div>
                </div>

                {/* Caption */}
                <p className="text-white/80 text-sm leading-relaxed mb-4">
                  {post.caption}
                </p>

                {/* Actions */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <motion.button
                      className={`transition-colors ${likedPosts.has(post.id) ? 'text-red-500' : 'text-white/60 hover:text-white'}`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      onClick={() => handleLike(post.id)}
                    >
                      <Heart className={`w-6 h-6 ${likedPosts.has(post.id) ? 'fill-current' : ''}`} />
                    </motion.button>
                    <button className="text-white/60 hover:text-white transition-colors">
                      <MessageCircle className="w-6 h-6" />
                    </button>
                    <button className="text-white/60 hover:text-white transition-colors">
                      <Share className="w-6 h-6" />
                    </button>
                  </div>
                  <button className="text-white/60 hover:text-white transition-colors">
                    <Bookmark className="w-6 h-6" />
                  </button>
                </div>

                {/* Likes Count */}
                <div className="mt-3 text-white font-semibold text-sm">
                  {(post.likes + (likedPosts.has(post.id) ? 1 : 0)).toLocaleString()} likes
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Follow CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.a
            href="https://www.instagram.com/campione.yash?utm_source=ig_web_button_share_sheet&igsh=MXFra2hrcmp2d3FuNA=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full font-bold text-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img src="https://i.imgur.com/FcxSkFm.png" alt="Logo" className="w-6 h-6" />
            <span>Follow @campione.yash</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default InstagramSection;
