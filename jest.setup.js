import '@testing-library/jest-dom/extend-expect'
import 'jest-styled-components'

jest.mock('@mui/material/utils/useId', () =>
  jest.fn().mockReturnValue('mui-test-id')
)

self.__NEXT_DATA__ = {}
