import { User } from '../lib/types'

export default function UserProfile({ user }: { user: User }) {
  return (
    <div className="box-center">
      <img alt={'user.png'} src={user.photoURL || '/hacker.png'} className="card-img-center" />
      <p>
        <i>@{user.username}</i>
      </p>
      <h1>{user.displayName || 'Anonymous User'}</h1>
    </div>
  )
}