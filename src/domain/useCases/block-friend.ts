import { BlockFriendModel } from '../models/block-friend'

export interface BlockFriendUseCase {
  block: (data: BlockFriendModel) => Promise<void>
}
