import React from 'react';
import '../styling/style.css'

class SignUpForm extends React.Component {
  render() {
    return (
        <form className="signup-form">
          <div className="form-container">
          <br></br>
            <div className="signup">
              <h3 className="header">Create your free Basketball Guru account</h3>
              <div className="form-group center-block">
                <label for="name"></label>
                <input type="name" className="form-control login" placeholder="Username" />
              </div>
              <div className="form-group">
                <label for="password"></label>
                <input type="password" className="form-control password" placeholder="Password" />
              </div>
              <button type="submit" className="btn btn-primary">Submit</button>
              <p className="form-snippet">Already signed up? Log in</p>
            </div>
          </div>
        </form>
    )
  }
}
export default SignUpForm
