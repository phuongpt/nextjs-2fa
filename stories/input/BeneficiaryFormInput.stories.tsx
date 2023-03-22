import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'
import { GenericField } from '../../components/banking-view/beneficiaries/add-edit-beneficiary-dialog/form-fields/generic-field'
import { GenericFieldProps } from '../../components/banking-view/beneficiaries/add-edit-beneficiary-dialog/add-recipient-form'

export default {
  title: 'Inputs/Beneficiary form input',
  component: GenericField,
  argTypes: {
    dataCy: {
      control: {
        type: 'text',
      },
    },
    className: {
      control: {
        type: 'text',
      },
    },
    currentValue: {
      control: false,
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    squareBorders: {
      control: {
        type: 'boolean',
      },
    },
  },
} as ComponentMeta<typeof GenericField>

const EmptyTemplate: ComponentStory<typeof GenericField> = (args) => (
  <GenericField {...args} fieldItem={{} as GenericFieldProps} />
)

export const Empty = EmptyTemplate.bind({})

const DisabledTemplate: ComponentStory<typeof GenericField> = (args) => (
  <GenericField {...args} fieldItem={{} as GenericFieldProps} disabled />
)

export const Disabled = DisabledTemplate.bind({})

Disabled.argTypes = {
  disabled: {
    control: false,
  },
}

const ErrorTemplate: ComponentStory<typeof GenericField> = (args) => (
  <GenericField {...args} fieldItem={{} as GenericFieldProps} error />
)

export const Error = ErrorTemplate.bind({})

Error.argTypes = {
  error: {
    control: false,
  },
}

const ValueTemplate: ComponentStory<typeof GenericField> = (args) => (
  <GenericField
    {...args}
    fieldItem={{} as GenericFieldProps}
    currentValue={'text'}
  />
)

export const Value = ValueTemplate.bind({})
