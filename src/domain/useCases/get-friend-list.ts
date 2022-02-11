export interface GetFriendListUseCase {
  get: (idProfile: number) => Promise<void>
}
