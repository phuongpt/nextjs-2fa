import React from 'react'
import type { CheckboxProps } from '@mui/material'
import {
  StyledCheckbox,
  StyledFormControlLabelCheckbox,
} from '../../components/signup-view/signup-steps/signup-step-roles/signup-step-roles.styles'
import { CheckedCheckboxIcon } from '../../components/icons/checked-checkbox'
import { UncheckedCheckboxIcon } from '../../components/icons/unchecked-checkbox'

const SignupCheckbox = (props: CheckboxProps) => {
  return (
    <StyledFormControlLabelCheckbox
      label={''}
      control={
        <StyledCheckbox
          disableRipple
          onChange={props.onChange}
          checked={props.checked}
          checkedIcon={<CheckedCheckboxIcon />}
          icon={<UncheckedCheckboxIcon />}
          inputProps={{
            'data-cy': props.dataCy,
          }}
        />
      }
    />
  )
}

export default SignupCheckbox
