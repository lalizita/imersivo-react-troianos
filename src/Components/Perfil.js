import React, { Component } from 'react'
import { Button, Container, Row, Col } from 'reactstrap';
import Axios from 'axios';

class UserInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      profile: ''
    }
  }

  componentWillMount() {
    Axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        const profile = response.data[0]
        console.log(profile)
        this.setState({ profile })
      })
      .catch(err => console.log("erro", err))
  }

  render() {
    const { profile } = this.state
    console.log(profile)
    return (
      <Container>
        <Row>
          <Col sm="12" md={{ size: 5, offset: 3 }}>
            <div className="card">
              <div className="header text-center">
                <div className="pic" style={{ backgroundImage: 'url(https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?cs=srgb&dl=fashion-person-woman-733872.jpg&fm=jpg)' }}></div>
                <h4>{profile.username}</h4>
                <p className="profile-description">
                  <b>{profile.name}</b>
                </p>
                <p className="profile-description">
                  {profile.email} <br/>
                  {profile.phone} <br/>
                  <b>Website:</b>
                  {profile.website}
                </p>
                <Button color="success">Call to</Button>
              </div>
            </div>

          </Col>
        </Row>
      </Container>
    )
  }
}

class Perfil extends Component {

  render() {
    return <UserInfo />
  }
}

export default Perfil