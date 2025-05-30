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
}

export const WithCustomClass: Story = {
  args: {
    className: 'bg-surface-950',
  },
}

export const Playground: Story = {
  args: {},
  parameters: {
    docs: {
      description: {
        story: 'Interactive playground for the ValuePropsSection component. Hover over cards to see animations.',
      },
    },
  },
}
