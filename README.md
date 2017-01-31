# graphql-example-server

query {
  users {
    id
    name
    email
    password
    isActive
    visitedPlaces {
      id
      title
    }
    photos {
      id
    }
    birthDate
    website
    friends {
      id
      name
    }
  }

  activities {
    id
    title
    description
    places {
      id
      title
    }
    tags {
      id
      name
    }
  }

  photos {
    id
    url
  }

  tags {
    id
    name
  }

  places {
    id
    title
    description
    location {
      lat
      lng
    }
    tags {
      id
      name
    }
  }
}