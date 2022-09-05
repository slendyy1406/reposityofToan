export interface CurrentUser {
    displayName: string
    photoUrl: string | null
    email: string | null
    uid: string
    role: boolean
    createdAt: Date | string
}