"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useAnimationControls } from "framer-motion"
import Image from "next/image"

interface Testimonial {
  id: number
  name: string
  role: string
  company: string
  text: string
  avatar?: string
}

interface ColumnProps {
  testimonials: Testimonial[]
  direction: "up" | "down"
  duration: number // animation duration in seconds
  columnIndex: number
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Jibran Al-Adra",
    role: "University Student",
    company: "",
    text: "Climb has completely changed how I approach fitness. The rewards actually motivate me to push harder each day",
    avatar: "https://images.unsplash.com/photo-1595211877493-41a4e5f236b3?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhlYWRzaG90fGVufDB8fDB8fHww"
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Marathon Runner",
    company: "",
    text: "this is sooo engaging! the smart ai stats help so much in understanding my distance pacing by mile",
    avatar: "https://images.unsplash.com/photo-1579420593648-0deba81fd762?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aGVhZHNob3QlMjBhc2lhbnxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 3,
    name: "Alexis Rodriguez",
    role: "CrossFit Trainer",
    company: "",
    text: "really looking forward to showing my gym this when it launches",
    avatar: "https://images.unsplash.com/photo-1529665253569-6d01c0eaf7b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 4,
    name: "Jamal J.",
    role: "Amateur Runner",
    company: "",
    text: "SO GOOD!",
    avatar: "https://images.unsplash.com/photo-1522529599102-193c0d76b5b6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM3fHxoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 5,
    name: "Silvia Goransson",
    role: "Yoga Instructor",
    company: "Movati",
    text: "Would love to see where you guys go with this!",
    avatar: "https://images.unsplash.com/photo-1609371497456-3a55a205d5eb?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM4fHxoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 6,
    name: "Sarah Lynn",
    role: "CEO",
    company: "Sarah Lynn Medicinals",
    text: "You should get on social media, thank you this is great!",
    avatar: "https://images.unsplash.com/photo-1665080954348-19c86971db8e?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTc2fHxoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 7,
    name: "Olivia Lloyd-Samson",
    role: "Nutritionist",
    company: "University of Ottawa",
    text: "Keeps me motivated to stay on track with my cardio and strength goals",
    avatar: "https://images.unsplash.com/photo-1611457194403-d3aca4cf9d11?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFuaW1lfGVufDB8fDB8fHww"
  },
  {
    id: 8,
    name: "Marcus Johnson",
    role: "Personal Trainer",
    company: "",
    text: "The data insights combined with the rewards system makes this app a no-brainer for anyone serious about fitness.",
    avatar: "https://images.unsplash.com/photo-1567095761054-7a02e69e5c43?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NzV8fGFuaW1lfGVufDB8fDB8fHww"
  },
  {
    id: 9,
    name: "Lisa Wong",
    role: "Fitness Blogger",
    company: "",
    text: "I've partnered with many fitness brands, but Climb's approach to rewards is revolutionary!",
    avatar: "https://images.unsplash.com/photo-1675904628456-aa3cdcb3daab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGhlYWRzaG90JTIwYXNpYW58ZW58MHx8MHx8fDA%3D"
  },
  {
    id: 10,
    name: "Carlos Vega",
    role: "Triathlete",
    company: "",
    text: "Training for triathlons is tough, but seeing those rewards stack up makes those early morning sessions worth it.",
    avatar: "https://images.unsplash.com/photo-1558203728-00f45181dd84?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjE0fHxoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 11,
    name: "Sophia Lee",
    role: "Dance Instructor",
    company: "",
    text: "The rewards are a game-changer!",
    avatar: "https://images.unsplash.com/photo-1653041286349-1f3d7cc0b28b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzE3fHxoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    id: 12,
    name: "Thomas Miller",
    role: "Corporate Wellness Director",
    company: "",
    text: "Hell yeah!!!",
    avatar: "https://images.unsplash.com/photo-1723537742563-15c3d351dbf2?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzIxfHxoZWFkc2hvdHxlbnwwfHwwfHx8MA%3D%3D"
  }
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative overflow-hidden rounded-xl backdrop-blur-xl border border-white/10 bg-black/80 p-6 mb-4 min-h-[200px]"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.3, ease: "easeOut" },
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      {/* Glassmorphic effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-50 pointer-events-none"></div>

      {/* Glow effect on hover */}
      <motion.div
        className="absolute inset-0 bg-orange-600 rounded-xl opacity-0 blur-2xl transition-opacity duration-500"
        animate={{ opacity: isHovered ? 0.07 : 0 }}
      />

      <div className="relative z-10">
        <motion.p 
          className="text-slate-300 mb-4 text-sm"
          animate={{ y: isHovered ? -2 : 0 }}
          transition={{ duration: 0.3 }}
        >
          &ldquo;{testimonial.text}&rdquo;
        </motion.p>
        <motion.div 
          className="flex items-center"
          animate={{ y: isHovered ? 2 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="h-10 w-10 rounded-full overflow-hidden mr-3 bg-orange-700/20 flex items-center justify-center">
            {testimonial.avatar ? (
              <Image 
                src={testimonial.avatar}
                alt={testimonial.name}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            ) : (
              <Image 
                src="/images/avatars/placeholder.svg"
                alt={testimonial.name}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            )}
          </div>
          <div>
            <h4 className="font-medium text-white">{testimonial.name}</h4>
            <p className="text-xs text-slate-400">
              {testimonial.role}
              {testimonial.company && ` · ${testimonial.company}`}
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function TestimonialColumn({ testimonials, direction, duration, columnIndex }: ColumnProps) {
  const columnRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [columnHeight, setColumnHeight] = useState(0);
  const controls = useAnimationControls();
  
  // Double the testimonials to create seamless loop
  const doubledTestimonials = [...testimonials, ...testimonials];
  
  // Measure the height of the column for animation
  useEffect(() => {
    const updateHeight = () => {
      if (columnRef.current) {
        setColumnHeight(columnRef.current.scrollHeight / 2);
      }
    };
    
    updateHeight();
    
    // Re-measure on window resize
    if (typeof window !== 'undefined') {
      window.addEventListener('resize', updateHeight);
      return () => window.removeEventListener('resize', updateHeight);
    }
  }, []);

  // Control animation based on hover state
  useEffect(() => {
    if (columnHeight === 0) return;

    const startPosition = direction === "up" ? 0 : -columnHeight;
    const endPosition = direction === "up" ? -columnHeight : 0;

    if (isHovered) {
      // Pause animation by stopping it
      controls.stop();
    } else {
      // Start or resume animation
      controls.start({
        y: endPosition,
        transition: {
          from: startPosition,
          duration,
          ease: "linear",
          repeat: Infinity,
          repeatType: "loop" 
        }
      });
    }

    // Cleanup animation on unmount
    return () => {
      controls.stop();
    };
  }, [isHovered, columnHeight, direction, duration, controls]);

  return (
    <div 
      className={`relative h-[500px] overflow-hidden ${
        isHovered ? 'z-10' : 'z-0'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Hover shadow effect without border */}
      <motion.div 
        className="absolute inset-0 rounded-xl pointer-events-none"
        animate={{ 
          boxShadow: isHovered 
            ? '0 0 25px 0 rgba(249, 115, 22, 0.08)' 
            : '0 0 0px 0 rgba(249, 115, 22, 0)'
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Shadow overlay at top */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-gradient-to-b from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
      
      {/* Shadow overlay at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black via-black/80 to-transparent z-20 pointer-events-none"></div>
      
      <motion.div 
        ref={columnRef}
        initial={{ y: direction === "up" ? 0 : -columnHeight }}
        animate={controls}
        className="will-change-transform"
      >
        {doubledTestimonials.map((testimonial, i) => (
          <TestimonialCard key={`${testimonial.id}-${i}`} testimonial={testimonial} />
        ))}
      </motion.div>
    </div>
  );
}

export function AnimatedTestimonials() {
  // Split testimonials into 3 columns
  const columnCount = 3;
  const testimonialsPerColumn = Math.ceil(TESTIMONIALS.length / columnCount);
  const columns = Array.from({ length: columnCount }, (_, i) => {
    const start = i * testimonialsPerColumn;
    const end = start + testimonialsPerColumn;
    return TESTIMONIALS.slice(start, end);
  });

  // Use the same speed for all columns, but alternate direction
  const animationDuration = 80; // seconds to complete one full cycle (slower but not too slow)

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {columns.map((columnTestimonials, i) => (
          <TestimonialColumn 
            key={i}
            testimonials={columnTestimonials}
            direction={i % 2 === 0 ? "up" : "down"}
            duration={animationDuration}
            columnIndex={i}
          />
        ))}
      </div>
    </div>
  );
} 