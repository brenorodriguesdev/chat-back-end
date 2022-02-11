import { ChatModel } from '../models/chat'
import { GetChatModel } from '../models/get-chat'

export interface GetChatModelUseCase {
  get: (data: GetChatModel) => Promise<ChatModel>
}
