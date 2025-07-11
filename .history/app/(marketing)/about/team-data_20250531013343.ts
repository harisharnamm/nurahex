import { TeamMember } from '@/components/team/team-grid';

export const TEAM: TeamMember[] = [
	{
		id: 1,
		name: 'Eashan',
		role: 'Co-Founder & Chief Executive Officer',
		bio: 'AI visionary turning bold ideas into real products. Tech expert with strategic mindset. Based in Berlin.',
		avatar: '/team/lakshya-512x512.webp',
		socials: [
			{ type: 'li', url: 'https://linkedin.com/in/lakshya' },
		]
	},
	{
		id: 2,
		name: 'Lakshya',
		role: 'Co-Founder & Chief Operating Officer',
		bio: 'Operations lead connecting tech and business. Full-stack dev who makes things happen. Based in Dubai.',
		avatar: '/team/eashan-512x512.webp',
		socials: [
			{ type: 'li', url: 'https://linkedin.com/in/eashan' },
		]
	},
	{
		id: 3,
		name: 'Hari',
		role: 'Founding Engineer & Chief Technology Officer',
		bio: 'System architect who makes complex tech look easy. Builds the reliable engines powering our AI magic. Based in New Delhi.',
		avatar: '/team/hari-512x512.webp',
		socials: [
			{ type: 'li', url: 'https://www.linkedin.com/in/harisharnam/' },		]
	}
];
