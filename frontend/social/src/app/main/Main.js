import React, { useState, useCallback } from 'react';
import { useQuery } from "@apollo/client";
import { Card } from 'react-bootstrap';

// Querys
import {
  ListProfiles,
  ListProfilesByName,
  FindProfileById,
  ListProfileByFriends
} from "../querys/index";

// Components
import Search from '../components/Search';
import Button from '../components/Button';


const Social = () => {
  const [description, setDescription] = useState('');
  const [changeWindow, setChangeWindow] = useState(false);
  const [query, setQuery] = useState(ListProfiles);
  const [filter, setFilter] = useState({});
  const [id, setId] = useState(null);
  let profiles = [];
  let profile = null;
  let friends = [];

  const { error, data } = useQuery(query, {
    variables: filter
  });


  if (data?.list?.length) {
    profiles = data.list;
  } else if (data?.listByName?.length) {
    profiles = data.listByName;
  } else if (data?.findProfileById) {
    profile = data.findProfileById;
    friends = profile.friends;
  } else if (data?.listProfileByFriends?.length) {
    friends = data.listProfileByFriends;
  }

  const viewProfile = _id => {
    setId(_id);
    setQuery(FindProfileById);
    setFilter({ id: _id });
    setChangeWindow(true);
    setDescription('');
  }

  const searchProfilesByName = e => {

    const descript = e.target.value?.replace(new RegExp('^[0-9]'), '');

    setDescription(descript);

    if (descript?.trim() != "") {
      if (id) {
        setQuery(ListProfileByFriends);
        setFilter({ name: descript, id: id });
      } else {
        setQuery(ListProfilesByName);
        setFilter({ name: descript });
      }
    } else {

      if (id) {
        viewProfile(id);
      } else {
        setQuery(ListProfiles);
        setFilter({});
      }

    }

  }

  const goToHome = () => {
    setChangeWindow(false);
    setQuery(ListProfiles);
    setFilter({});
    setId(null);
    setDescription('');
  }

  const Listprofile = () =>
  (
    profiles?.length && (
      <div className="container">
        <div className="row align-items-center">
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

  const Profil = () =>
  (
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

  const ProfileFriends = () =>
  (
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


  return (
    <>
      <Search value={description} change={searchProfilesByName}
        click={goToHome} />
      {!changeWindow && (
        <>
          <h2 className="container">List Persons</h2>
          <Listprofile />
        </>
      )}
      {changeWindow && (
        <>
          <Profil />
          <ProfileFriends />
        </>
      )}
    </>
  )

}

export default Social;
