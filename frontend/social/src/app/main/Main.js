import React, { useState, useCallback } from 'react';
import { useQuery } from "@apollo/client";
import { Card, Alert } from 'react-bootstrap';

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
import Listprofile from '../components/ListProfile';
import Profil from '../components/Profil';
import ProfileFriends from '../components/ProfileFriends';


const Social = () => {
  const [description, setDescription] = useState('');
  const [changeWindow, setChangeWindow] = useState(false);
  const [query, setQuery] = useState(ListProfiles);
  const [filter, setFilter] = useState({});
  const [id, setId] = useState(null);
  let profiles = [];
  let profile = JSON.parse(localStorage.getItem('profile'));
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
    localStorage.setItem("profile", JSON.stringify(profile));
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

  const alertMessage = message =>
  (

    <Alert variant="danger" style={{
      display: "flex",
      justifyContent: "center",
      width: "40%",
      margin: "auto"
    }}>
      {message + ' ' + description}.
    </Alert>
  )


  return (
    <>
      <Search value={description} change={searchProfilesByName}
        click={goToHome} />

      {!changeWindow && profiles?.length > 0 && (
        <Listprofile profiles={profiles} viewProfile={viewProfile} />
      )}
      {!changeWindow && !profiles?.length &&
        alertMessage('No one was found in the list of people with')
      }
      {changeWindow && (
        <>
          <Profil profile={profile} />
          <ProfileFriends friends={friends} />
        </>
      )}
      {changeWindow && !friends?.length &&
        alertMessage('No one was found in the list of friends with')
      }
    </>
  )

}

export default Social;
