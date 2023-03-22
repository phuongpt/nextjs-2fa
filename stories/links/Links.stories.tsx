import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { CustomLink } from '../../components/login-page/login-page.styles'

export default {
  title: 'Links/Underline link',
  component: CustomLink,
  argTypes: {
    as: {
      table: {
        disable: true
      }
    },
    forwardedAs: {
      table: {
        disable: true
      }
    },
    ref: {
      table: {
        disable: true
      }
    },
    theme: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof CustomLink>

const PlainTemplate: ComponentStory<typeof CustomLink> = (args) => (
  <CustomLink {...args}>{args?.children}</CustomLink>
)

export const Plain = PlainTemplate.bind({})

Plain.args = {
  children: 'button',
}
