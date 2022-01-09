import React from 'react';
import { Card } from 'react-bootstrap';


const Profil = props => {

    const profile = props.profile;

    return (
        profile && (
            <div className="container">
                <div className="row">
                    <div className="col mb-3">
                        <Card className="flex-row border-0" id="profileCard" >
                            <div className="col-12 col-lg-2 col-md-3 col-sm-4 col-xl-2">
                                <Card.Img src={profile.picture} alt={profile.name} />
                            </div>
                            <div className="col-12 col-md-5 col-sm-7 col-xl-4">
                                <Card.Body className="align-items-center d-flex h-100 p-1">
                                    <Card.Text>
                                        <p>Name:{profile.name}</p>
                                        <p>Age: {profile.age}</p>
                                        <p>Email: {profile.email}</p>
                                    </Card.Text>
                                </Card.Body>
                            </div>
                            <div className="col-12 col-lg-5 col-md-4 col-sm-1 col-xl-6" style={{ backgroundColor: "#FFFAF0" }} />
                        </Card>
                    </div>
                </div>
            </div>
        )
    )
}

export default Profil;