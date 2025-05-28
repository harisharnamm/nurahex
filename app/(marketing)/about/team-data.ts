import { TeamMember } from '@/components/team/team-grid';

export const TEAM: TeamMember[] = [
	{
		id: 1,
		name: 'Eashan',
		role: 'Chief Executive Officer',
		bio: 'AI engineer and product builder. Loves shipping delightful, useful things. Berlin, Germany.',
		avatar: '/team/lakshya-512x512.webp',
		socials: [
			{ type: 'li', url: 'https://linkedin.com/in/lakshya' },
			{ type: 'gh', url: 'https://github.com/lakshya' }
		]
	},
	{
		id: 2,
		name: 'Lakshya',
		role: 'Chief Operating Officer',
		bio: 'Full-stack developer and ML enthusiast. Building scalable AI for real-world impact. Waterloo, Canada.',
		avatar: '/team/eashan-512x512.webp',
		socials: [
			{ type: 'li', url: 'https://linkedin.com/in/eashan' },
			{ type: 'tw', url: 'https://twitter.com/eashan' }
		]
	},
	{
		id: 3,
		name: 'Hari',
		role: 'Chief Technology Officer',
		bio: 'Backend & infra specialist. Obsessed with robust, fast systems. New Delhi, India.',
		avatar: '/team/hari-512x512.webp',
		socials: [
			{ type: 'li', url: 'https://linkedin.com/in/hari' },
			{ type: 'gh', url: 'https://github.com/hari' }
		]
	}
];
