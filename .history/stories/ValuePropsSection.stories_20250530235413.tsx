import type { Meta, StoryObj } from '@storybook/react'
import ValuePropsSection from '../components/home/ValuePropsSection'

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
      ],
    },
  },
  argTypes: {
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the section',
    },
  },
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
