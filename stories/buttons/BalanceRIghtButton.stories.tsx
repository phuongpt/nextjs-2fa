import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { BalanceViewRightsideButton } from '../../components/banking-view/balances/balances-view/balances-view.styles'

export default {
  title: 'Buttons/Balance right button',
  component: BalanceViewRightsideButton,
  argTypes: {
    as: { table: { disable: true } },
    theme: { table: { disable: true } },
    ref: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
  },
} as ComponentMeta<typeof BalanceViewRightsideButton>

const PlainTemplate: ComponentStory<typeof BalanceViewRightsideButton> = (
  args
) => <BalanceViewRightsideButton {...args} />

export const Plain = PlainTemplate.bind({})

Plain.args = {
  children: 'button',
}

const DisabledTemplate: ComponentStory<typeof BalanceViewRightsideButton> = (
  args
) => <BalanceViewRightsideButton {...args} disabled />

export const Disabled = DisabledTemplate.bind({})

Disabled.args = {
  children: 'button',
}
