import { MessageModel } from './message'

export interface ChatModel {
  id: string
  messages: MessageModel[]
}
