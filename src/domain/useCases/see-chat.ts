import { SeeChatModel } from '../models/see-chat'

export interface SeeChatUseCase {
  see: (data: SeeChatModel) => Promise<void>
}
