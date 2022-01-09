import React from 'react';
import { Card } from 'react-bootstrap';
import Button from './Button';

const Listprofile = props => {
    const profiles = props.profiles;
    const viewProfile = props.viewProfile;

    return (


        profiles?.length && (
            <div className="container">
                <div className="row align-items-center">
                    <h2 className="container">List Persons</h2>
                    {profiles?.map(profile =>
                    (
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3 p-2" key={profile._id}>
                            <Card>
                                <Card.Img variant="top" src={profile.picture} alt={profile.name} />
                                <Card.Body>
                                    <Card.Text style={{ fontSize: "14px" }}>
                                        <p>Name:{profile.name}</p>
                                        <p>Age: {profile.age}</p>
                                        <p>EyeColor: {profile.eyeColor}</p>
                                        <p>Company: {profile.company}</p>
                                        <p>Email: {profile.email}</p>
                                    </Card.Text>
                                    <Button type="info" style={{ borderRadius: "10px" }}
                                        click={() => viewProfile(profile._id)}
                                    />
                                </Card.Body>
                            </Card>
                        </div>
                    ))
                    }
                </div>
            </div>
        )

    )

}

export default Listprofile;