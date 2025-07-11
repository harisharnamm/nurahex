import type { Meta, StoryObj } from '@storybook/react'
import ValuePropsSection from '../components/home/ValuePropsSection'
import '../app/globals.css'

const meta: Meta<typeof ValuePropsSection> = {
  title: 'Home/ValuePropsSection',
  component: ValuePropsSection,
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0A0A0A',
        },
        {
          name: 'darker',
          value: '#000000',
        },
      ],
    },
    docs: {
      description: {
        component: 'A responsive value propositions section with GSAP-powered animations. Features scroll-triggered entrance animations, interactive hover effects, and specialized backgrounds including HyperspeedRays for the deployment card.',
      },
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the section',
      defaultValue: '',
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', background: '#0A0A0A' }}>
        <div style={{ height: '50vh' }}>
          {/* Add some content above to test scroll triggers */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%',
            color: '#fff',
            fontFamily: 'Inter, sans-serif'
          }}>
            <p>Scroll down to see the ValuePropsSection animations</p>
          </div>
        </div>
        <Story />
        <div style={{ height: '50vh' }}>
          {/* Add some content below for scroll context */}
          <div style={{ 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center', 
            height: '100%',
            color: '#fff',
            fontFamily: 'Inter, sans-serif'
          }}>
            <p>Scroll up to see the section again</p>
          </div>
        </div>
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof ValuePropsSection>

export const Default: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'The default ValuePropsSection with GSAP scroll animations and hover effects. Cards will animate in with a stagger effect when scrolled into view.',
      },
    },
  },
}

export const WithCustomClass: Story = {
  args: {
    className: 'bg-surface-950 border-t border-surface-800',
  },
  parameters: {
    docs: {
      description: {
        story: 'ValuePropsSection with additional styling classes applied.',
      },
    },
  },
}

export const AnimationShowcase: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Interactive showcase for testing hover animations. Hover over each card to see scale, translate, and icon rotation effects. The middle card features an animated HyperspeedRays background.',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ minHeight: '100vh', background: '#0A0A0A' }}>
        <div style={{ 
          padding: '2rem',
          textAlign: 'center',
          color: '#fff',
          fontFamily: 'Inter, sans-serif',
          marginBottom: '2rem'
        }}>
          <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>
            Animation Showcase
          </h2>
          <p style={{ opacity: 0.8 }}>
            Hover over the cards below to test interactive animations:
            <br />
            • Scale and translate effects
            <br />
            • Icon rotation and glow
            <br />
            • Animated backgrounds (HyperspeedRays on middle card)
          </p>
        </div>
        <Story />
      </div>
    ),
  ],
}

export const Playground: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for the ValuePropsSection component. Test scroll triggers by scrolling up and down, and hover effects by interacting with the cards.',
      },
    },
  },
}
