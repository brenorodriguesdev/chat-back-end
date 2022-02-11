import { DeleteChatModel } from '../models/delete-chat'

export interface DeleteChatUseCase {
  delete: (data: DeleteChatModel) => Promise<void>
}
