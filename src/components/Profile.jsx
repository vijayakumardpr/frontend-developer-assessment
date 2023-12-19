import { useSelector } from "react-redux";
import Table from "./Table"

const Profile = () => {
  const { email } = useSelector((store) => store.login.value);

  return (
    <div className="container">
      <form className="profile">
        <h2>Edit Profile</h2>
        <div className="row">
          <div className="row flex-direction width-30">
            <label htmlFor="company-name">COMPANY</label>
            <input
              type="text"
              name="company-name"
              id="company-name"
              disabled={true}
            />
          </div>
          <div className="row flex-direction width-30">
            <label htmlFor="username">USERNAME</label>
            <input type="text" name="username" id="username" />
          </div>
          <div className="row flex-direction width-30">
            <label htmlFor="emailaddress">EMAIL ADDRESS</label>
            <input
              type="email"
              name="emailaddress"
              id="emailaddress"
              defaultValue={email}
            />
          </div>
        </div>
        <div className="row">
          <div className="row flex-direction width-50">
            <label htmlFor="firstname">FIRST NAME</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="First Name"
            />
          </div>
          <div className="row flex-direction width-50">
            <label htmlFor="lastname">LAST NAME</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div className="row">
          <div className="row flex-direction width-100">
            <label htmlFor="address">ADDRESS</label>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Home Address"
            />
          </div>
        </div>
        <div className="row">
          <div className="row flex-direction width-30">
            <label htmlFor="city">CITY</label>
            <input type="text" name="city" id="city" placeholder="City" />
          </div>
          <div className="row flex-direction width-30">
            <label htmlFor="country">COUNTRY</label>
            <input
              type="text"
              name="country"
              id="country"
              placeholder="Country"
            />
          </div>
          <div className="row flex-direction width-30">
            <label htmlFor="postal-code">POSTAL CODE</label>
            <input
              type="number"
              name="postal-code"
              id="postal-code"
              placeholder="ZIP Code"
            />
          </div>
        </div>
        <div className="row">
          <div className="row flex-direction width-100">
            <label htmlFor="aboutme">ABOUT ME</label>
            <textarea
              name="aboutme"
              id="aboutme"
              cols="30"
              rows="10"
              placeholder="Here can be your description"
            ></textarea>
          </div>
        </div>
        <div className="row">
          <button>Update Profile</button>
        </div>
      </form>
      <Table/>
    </div>
  );
};

export default Profile;
