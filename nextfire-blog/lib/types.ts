export interface User {
  displayName?: string,
  photoURL?: string,
  username: string
}

export interface Post {
  content: string,
  createdAt: Date,
  heartCount: number,
  published: boolean,
  slug: string,
  title: string,
  uid: string,
  updatedAt: Date,
  username: string
}