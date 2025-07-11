import { TeamMember } from '@/components/team/team-grid';

export const TEAM: TeamMember[] = [
	{
		id: 1,
		name: 'Eashan',
		role: 'Co-Founder & Chief Executive Officer',
		bio: 'Visionary AI leader with a passion for transforming ideas into impactful products. Blends technical expertise with strategic thinking to drive innovation. Berlin, Germany.',
		avatar: '/team/lakshya-512x512.webp',
		socials: [
			{ type: 'li', url: 'https://linkedin.com/in/lakshya' },
			{ type: 'gh', url: 'https://github.com/lakshya' }
		]
	},
	{
		id: 2,
		name: 'Co-Founder & Lakshya',
		role: 'Chief Operating Officer',
		bio: 'Operational mastermind bridging technology and business strategy. Full-stack developer who orchestrates seamless execution and drives organizational growth. Waterloo, Canada.',
		avatar: '/team/eashan-512x512.webp',
		socials: [
			{ type: 'li', url: 'https://linkedin.com/in/eashan' },
			{ type: 'tw', url: 'https://twitter.com/eashan' }
		]
	},
	{
		id: 3,
		name: 'Hari',
		role: 'Founding Engineer Chief Technology Officer',
		bio: 'Architecture virtuoso crafting scalable, elegant systems. Turns complex technical challenges into reliable solutions that power our cutting-edge AI capabilities. New Delhi, India.',
		avatar: '/team/hari-512x512.webp',
		socials: [
			{ type: 'li', url: 'https://linkedin.com/in/hari' },
			{ type: 'gh', url: 'https://github.com/hari' }
		]
	}
];
