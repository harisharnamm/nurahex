'use client';
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { Github, Linkedin, Twitter } from 'lucide-react';

interface SocialLink {
  type: 'li' | 'gh' | 'tw';
  url: string;
}

interface TeamCardProps {
  avatar: string;
  name: string;
  role: string;
  bio: string;
  socials?: SocialLink[];
  index: number;
}

const getSocialIcon = (type: string) => {
  switch (type) {
    case 'li':
      return <Linkedin className="h-5 w-5" />;
    case 'gh':
      return <Github className="h-5 w-5" />;
    case 'tw':
      return <Twitter className="h-5 w-5" />;
    default:
      return null;
  }
};

export default function TeamCard({ avatar, name, role, bio, socials, index }: TeamCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    let observer: IntersectionObserver | null = null;
    let tween: gsap.core.Tween | null = null;
    const animate = () => {
      tween = gsap.fromTo(
        cardRef.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: index * 0.12,
          ease: 'power1.out',
        }
      );
    };
    observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          animate();
          observer && observer.disconnect();
        }
      },
      { rootMargin: '-80px' }
    );
    observer.observe(cardRef.current);
    return () => {
      observer && observer.disconnect();
      tween && tween.kill();
    };
  }, [index]);

  return (
    <div
      ref={cardRef}
      className="group relative bg-surface-700 rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-primary"
      style={{ opacity: 0, transform: 'translateY(20px)' }}
    >
      <div className="aspect-[3/4] overflow-hidden relative">
        <Image
          src={avatar || "https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=facearea&w=400&q=80"}
          alt={`Portrait of ${name}`}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Social links that appear on hover */}
        {socials && socials.length > 0 && (
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
            {socials.map((social, i) => (
              <a
                key={i}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${name}'s ${social.type === 'li' ? 'LinkedIn' : social.type === 'gh' ? 'GitHub' : 'Twitter'} profile`}
                className="bg-surface-800/80 p-2 rounded-full hover:bg-primary-700 transition-colors duration-300"
              >
                {getSocialIcon(social.type)}
              </a>
            ))}
          </div>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-surface-50">{name}</h3>
        <p className="text-primary-700 font-medium mb-3">{role}</p>
        <p className="text-surface-50/70 line-clamp-3">{bio}</p>
      </div>
    </div>
  );
}
