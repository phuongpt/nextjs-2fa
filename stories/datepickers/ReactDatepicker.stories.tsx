import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import ReactDatePicker from '../../components/react-datepicker/react-datepicker'

export default {
  title: 'Date pickers/React datepicker',
  component: ReactDatePicker,
  argTypes: {
    onDateChange: {
      control: false,
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    date: {
      control: false,
    },
    showTwoMonth: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof ReactDatePicker>

const Template: ComponentStory<typeof ReactDatePicker> = (args) => {
  const [date, setDate] = useState(new Date())
  return (
    <ReactDatePicker
      {...args}
      date={args?.date ? args?.date : date}
      onDateChange={(date) => setDate(date)}
    />
  )
}

export const Default = Template.bind({})
