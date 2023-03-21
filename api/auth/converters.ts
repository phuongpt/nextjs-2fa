import { User } from '../../types'
import { GetUserResponse } from './schemas'

export function createUser(fromApi: GetUserResponse): User {
  return {
    id: fromApi.id,
    firstName: fromApi.firstName,
    lastName: fromApi.lastName,
    displayName: `${fromApi.firstName} ${fromApi.lastName}`,
    title: fromApi.title,
    organizationId: fromApi.organizationId,
    email: fromApi.email,
    mobileNumber: fromApi.mobileNumber,
    dialCode: fromApi.dialCode,
    avatar: fromApi.avatar,
  }
}
