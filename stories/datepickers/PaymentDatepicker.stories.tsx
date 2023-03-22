import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import PaymentDatePicker from '../../components/banking-view/new-transaction/payment-date-picker/payment-date-picker'

export default {
  title: 'Date pickers/Payment datepicker',
  component: PaymentDatePicker,
  argTypes: {
    dataCy: {
      control: {
        type: 'text'
      }
    },
    shouldDisableDate: {
      control: false
    },
    onDateChange: {
      control: false
    }
  }
} as ComponentMeta<typeof PaymentDatePicker>

const Template: ComponentStory<typeof PaymentDatePicker> = (args) => {
  return <PaymentDatePicker
    {...args}
  />
}

export const Default = Template.bind({})
