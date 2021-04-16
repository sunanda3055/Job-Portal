import { FC } from "react"

const Profile: FC = () => {
  return (
    <div className="profile">
      <h3>Profile:</h3>
      <section>
        <button>Change</button>
        <strong> Address: </strong> Delhi, India
      </section>
      <section>
        <button>Change</button>
        <strong> Email: </strong> sunanda@tothenew.com
      </section>
      <section>
        <button>Change</button>
        <strong> Password: </strong> ***********
      </section>
    </div>
  )
}

export default Profile
