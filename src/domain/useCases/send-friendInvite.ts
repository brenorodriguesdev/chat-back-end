import { SendFriendInviteModel } from '../models/send-friendInvite'

export interface SendFriendInviteUseCase {
  send: (data: SendFriendInviteModel) => Promise<void>
}
