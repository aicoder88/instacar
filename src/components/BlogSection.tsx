import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "./ui/button";

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  slug: string;
  featuredImage: string;
  category: string;
}

interface BlogSectionProps {
  title?: string;
  subtitle?: string;
  postsToShow?: number;
  wordpressUrl?: string;
}

const BlogSection = ({
  title = "Expert Car Care Insights",
  subtitle = "Discover professional tips, industry secrets, and the latest trends in automotive detailing from our expert team.",
  postsToShow = 3,
  wordpressUrl = "https://example.com/wp-json/wp/v2",
}: BlogSectionProps) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fallback posts in case the WordPress API is not available
  const fallbackPosts: BlogPost[] = [
    {
      id: 1,
      title: "The Secret to Maintaining That Showroom Shine Year-Round",
      excerpt:
        "Most car owners make this critical mistake that ruins their paint job within weeks. Here's the professional approach that keeps luxury vehicles gleaming for months...",
      date: "2023-06-15",
      author: "Michael Chen",
      slug: "showroom-shine-secret",
      featuredImage:
        "https://images.unsplash.com/photo-1550355291-bbee04a92027?w=800&q=80",
      category: "Maintenance",
    },
    {
      id: 2,
      title: "Why Traditional Car Washes Are Slowly Destroying Your Vehicle",
      excerpt:
        "Those convenient drive-through washes use harsh chemicals and abrasive brushes that do more harm than good. Here's what happens to your car's finish every time you roll through...",
      date: "2023-05-22",
      author: "Sarah Johnson",
      slug: "truth-about-car-washes",
      featuredImage:
        "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?w=800&q=80",
      category: "Protection",
    },
    {
      id: 3,
      title: "Leather Care Secrets: What Luxury Car Dealers Don't Tell You",
      excerpt:
        "That new car leather smell comes at a price. Without these specific care techniques, your premium interior will crack and fade within 18 months. Here's how to preserve it...",
      date: "2023-04-10",
      author: "Jean Dupont",
      slug: "leather-care-secrets",
      featuredImage:
        "https://images.unsplash.com/photo-1583121274602-3e2820c69888?w=800&q=80",
      category: "Interior",
    },
  ];

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        // In a real implementation, you would fetch from WordPress REST API
        // const response = await fetch(`${wordpressUrl}/posts?_embed&per_page=${postsToShow}`);
        // const data = await response.json();
        // Transform WordPress data to match our interface
        // const formattedPosts = data.map((post) => ({
        //   id: post.id,
        //   title: post.title.rendered,
        //   excerpt: post.excerpt.rendered.replace(/<[^>]*>/g, ''),
        //   date: new Date(post.date).toLocaleDateString(),
        //   author: post._embedded.author[0].name,
        //   slug: post.slug,
        //   featuredImage: post._embedded['wp:featuredmedia'] ? post._embedded['wp:featuredmedia'][0].source_url : '',
        //   category: post._embedded['wp:term'][0][0].name,
        // }));

        // For demo purposes, use fallback posts
        setTimeout(() => {
          setPosts(fallbackPosts);
          setLoading(false);
        }, 500);
      } catch (err) {
        console.error("Error fetching blog posts:", err);
        setError("Failed to load blog posts. Please try again later.");
        setPosts(fallbackPosts); // Use fallback posts on error
        setLoading(false);
      }
    };

    fetchPosts();
  }, [wordpressUrl, postsToShow]);

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
        ease: "easeOut",
      },
    }),
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-purple-900/40 to-indigo-900/40 relative overflow-hidden">
      {/* Glassmorphic background elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-indigo-500/10 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-purple-400">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
        </motion.div>

        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="w-12 h-12 border-4 border-teal-400 border-t-transparent rounded-full animate-spin"></div>
          </div>
        ) : error ? (
          <div className="text-center text-red-400 p-8 bg-black/30 backdrop-blur-md rounded-lg border border-red-500/20">
            {error}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post, index) => (
              <motion.div
                key={post.id}
                custom={index}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={cardVariants}
                className="group flex flex-col h-full overflow-hidden rounded-xl bg-black/30 backdrop-blur-lg border border-white/10 hover:border-teal-500/50 transition-all duration-300 shadow-lg hover:shadow-teal-500/20"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-0 left-0 m-4 px-3 py-1 bg-teal-500/80 backdrop-blur-sm text-white text-xs font-semibold rounded-full">
                    {post.category}
                  </div>
                </div>
                <div className="flex-grow p-6 flex flex-col">
                  <div className="flex items-center text-xs text-gray-400 mb-3 space-x-4">
                    <div className="flex items-center">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center">
                      <User className="h-3 w-3 mr-1" />
                      <span>{post.author}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-white group-hover:text-teal-400 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4 flex-grow">
                    {post.excerpt}
                  </p>
                  <Button
                    variant="ghost"
                    className="self-start text-teal-400 hover:text-teal-300 hover:bg-teal-950/30 p-0 flex items-center group"
                  >
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        <div className="mt-12 text-center">
          <Button className="bg-teal-500 hover:bg-teal-600 text-white px-8 py-6 h-auto rounded-full font-semibold text-lg shadow-lg shadow-teal-500/20 transition-all duration-300 hover:shadow-teal-500/40">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
