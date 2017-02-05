# graphql-example-server


```
query {
  user(id:1) {
    id
    name
    email
  }
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
    FriendsConnection {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
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
    tagsConnection {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
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
    TagsConnection {
      pageInfo {
        endCursor
        hasNextPage
        hasPreviousPage
        startCursor
      }
    }
  }
}