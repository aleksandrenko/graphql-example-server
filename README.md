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
```

mutation queries:

``` 
mutation CreateUser($userInput: UserInput) {
  createUser(user: $userInput) {
    name
    email
  }
}

query vars:
{ 
	"userInput": {
    "name": "Nikolay Aleksandrenko",
    "email": "aleksandrenko@gmail.com",
    "password": "pawwrod123",
    "isActive": false,
    "birthDate": "01/01/1983",
    "website": "aleksandrenko.com"
  }
}
```
