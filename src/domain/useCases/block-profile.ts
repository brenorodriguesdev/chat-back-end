import { BlockProfileModel } from '../models/block-profile'

export interface BlockProfileUseCase {
  block: (data: BlockProfileModel) => Promise<void>
}
