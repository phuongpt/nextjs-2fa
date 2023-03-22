import { refresh } from "@/api/auth/methods"

export const useElevationExtender = () => {
  return {
    extendElevatedSession: () => {
      refresh({ extendElevatedSession: true })
    },
  }
}
