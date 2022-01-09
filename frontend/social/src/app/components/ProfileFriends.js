import React from 'react';
import { Card } from 'react-bootstrap';


const ProfileFriends = props => {

    const friends = props.friends;

    return (
        friends?.length && (
            <div className="container">
                <div className="row align-items-center">
                    <h2>List Friends</h2>
                    {friends?.map(friend =>
                    (
                        <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3 p-2" key={friend._id}>
                            <Card>
                                <Card.Img variant="top" src={friend.picture} alt={friend.name} />
                                <Card.Body>
                                    <Card.Text style={{ fontSize: "14px" }}>
                                        <p>Name:{friend.name}</p>
                                        <p>Age: {friend.age}</p>
                                        <p>EyeColor: {friend.eyeColor}</p>
                                        <p>Company: {friend.company}</p>
                                        <p>Email: {friend.email}</p>
                                    </Card.Text>
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

export default ProfileFriends;
