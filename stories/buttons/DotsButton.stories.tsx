import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DotsIcon from '../../components/icons/dots'
import { Theme } from '@app/shared/styles'
import { DotsButton } from '../../components/core/button/button'

export default {
  title: 'Buttons/Dots button',
  component: DotsButton,
} as ComponentMeta<typeof DotsButton>

const PlainTemplate: ComponentStory<typeof DotsButton> = (args) => (
  <DotsButton {...args}>
    <>
      <button type="button">Edit</button>
      <button type="button">Create</button>
      <button type="button" disabled>Disabled</button>
    </>
  </DotsButton>
)

export const Plain = PlainTemplate.bind({})

const DisabledTemplate: ComponentStory<typeof DotsButton> = (args) => (
  <DotsButton {...args} data-cy={'dots'} disabled>
    <>
      <button type="button">Edit</button>
      <button type="button">Create</button>
    </>
  </DotsButton>
)

export const Disabled = DisabledTemplate.bind({})
