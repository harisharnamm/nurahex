import React from 'react';
import TeamCard from './team-card';

export interface TeamMember {
  id: number;
  name: string;
  role: string;
  bio: string;
  avatar: string;
  socials?: {
    type: 'li' | 'gh' | 'tw';
    url: string;
  }[];
}

interface TeamGridProps {
  members: TeamMember[];
}

export default function TeamGrid({ members }: TeamGridProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {members.map((member, index) => (
        <TeamCard 
          key={member.id}
          avatar={member.avatar}
          name={member.name}
          role={member.role}
          bio={member.bio}
          socials={member.socials}
          index={index}
        />
      ))}
    </div>
  );
}
