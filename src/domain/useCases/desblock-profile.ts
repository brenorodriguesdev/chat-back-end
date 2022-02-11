import { DesblockProfileModel } from '../models/desblock-profile'

export interface DesblockProfileUseCase {
  desblock: (data: DesblockProfileModel) => Promise<void>
}
