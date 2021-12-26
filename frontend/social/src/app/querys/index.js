import { gql } from "@apollo/client";

const ListProfiles = gql`
 query Query {
  list {
    _id,
     index,
     picture,
     age,
     eyeColor,
     name,
     company,
     email,
     phone,
     friends {
       _id,
     index,
     picture,
     age,
     eyeColor,
     name,
     company,
     email,
     phone
     }
  }
}
`

const ListProfilesByName = gql`
 query Query($name: String!) {
  listByName(name: $name) {
    _id,
     index,
     picture,
     age,
     eyeColor,
     name,
     company,
     email,
     phone,
     friends {
       _id,
     index,
     picture,
     age,
     eyeColor,
     name,
     company,
     email,
     phone
     }
  }
}
`

const FindProfileById = gql`
 query Query($id: String!) {
  findProfileById(_id: $id) {
    _id,
     index,
     picture,
     age,
     eyeColor,
     name,
     company,
     email,
     phone,
     friends {
       _id,
     index,
     picture,
     age,
     eyeColor,
     name,
     company,
     email,
     phone
     }
  }
}
`

const ListProfileByFriends = gql`
 query Query($id: String!, $name: String!) {
  listProfileByFriends(_id: $id, name: $name) {
    _id,
     index,
     picture,
     age,
     eyeColor,
     name,
     company,
     email,
     phone
  }
}
`

export {
  ListProfiles,
  ListProfilesByName,
  FindProfileById,
  ListProfileByFriends
};