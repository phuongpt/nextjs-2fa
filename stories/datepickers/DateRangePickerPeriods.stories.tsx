import React, { useState } from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import DateRangePickerPeriods from '../../components/banking-view/shared/date-range-picker-periods/date-range-picker-periods'

export default {
  title: 'Date pickers/DateRangePickerPeriods',
  component: DateRangePickerPeriods,
} as ComponentMeta<typeof DateRangePickerPeriods>

const Template: ComponentStory<typeof DateRangePickerPeriods> = (args) => {
  const [date, setDate] = useState(new Date())

  return <DateRangePickerPeriods {...args} onClose={(date) => setDate(date)} />
}

export const Default = Template.bind({})
