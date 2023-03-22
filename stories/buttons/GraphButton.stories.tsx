import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GraphButton } from '../../components/banking-view/balances/account-balance-widget/account-balance-widget-more/account-balance-widget-more.styles'
import GraphBorderedIcon from '../../components/icons/graph-bordered'

export default {
  title: 'Buttons/Graph button',
  component: GraphButton,
} as ComponentMeta<typeof GraphButton>

const PlainTemplate: ComponentStory<typeof GraphButton> = (args) => (
  <GraphButton {...args}><GraphBorderedIcon /></GraphButton>
)

export const Plain = PlainTemplate.bind({})

const DisabledTemplate: ComponentStory<typeof GraphButton> = (args) => (
  <GraphButton disabled {...args}><GraphBorderedIcon /></GraphButton>
)

export const Disabled = DisabledTemplate.bind({})
