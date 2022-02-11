import { SendFriendInviteModel } from '../models/send-friend-invite'

export interface SendFriendInviteUseCase {
  send: (data: SendFriendInviteModel) => Promise<void>
}
