import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { Button } from '@mui/material'
import { BlackButton } from '../../components/core/button/button'

export default {
  title: 'Buttons/Black button',
  component: BlackButton,
} as ComponentMeta<typeof Button>

const PlainTemplate: ComponentStory<typeof Button> = (args) => (
  <BlackButton {...args} />
)

export const Plain = PlainTemplate.bind({})

Plain.args = {
  children: 'button',
}

const DisabledTemplate: ComponentStory<typeof Button> = (args) => (
  <BlackButton {...args} disabled />
)

export const Disabled = DisabledTemplate.bind({})

Disabled.args = {
  children: 'button',
}

Disabled.argTypes = {
  disabled: {
    control: false,
  },
}
