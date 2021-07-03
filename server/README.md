# Konnect Backend

## Data models

```
user: {
    id:
    username:
    name:
    year:
    branch:
    image:
    coverimg:
    followers:
    following:
    socials:[]
    header:
    pronouns:
    location:
    bio:
    positions:[{
        role:
        org:
        startdate:
        enddate:
    }]
    tags:[]
    signupdate:
    lastaccessdate:
}
```

```
tags: {
    id:
    name:
    icon:
}
```

```
activities: {
    id:
    emoji:
    tags:[]
    startdate:
    enddate:
    title:
    description:
    likes:[userid]
    media:[]
}
```

---

## API Specification
  
- `api/users/`
  
  - `GET api/users/:id` : To get details of a user with id
    
  - `POST` : Add a new user
    
  - `PUT api/users/:id` : To modify the data of an existing user
    
  - `DELETE api/users/:id` : To remove a user's details
    
- `api/activities/`
  
  - `GET api/activities/:id` : To get activity details with id
    
  - `POST` : Add a new activity
    
  - `PUT api/activities/:id` : Modify an existing activity
    
  - `DELETE api/activities/:id` : Delete an existing activity
    
- `api/tags/`
  
  - `GET api/tags/:id` : To get tag details with id
    
  - `POST` : Add a new tag
    
  - `PUT api/tags/:id` : Modify an existing tag
    
  - `DELETE api/tags/:id` : Delete an existing tag
    
- `api/admin/`
  
  - `GET api/admin/usecount` : get total user count
    
  - `GET api/admin/dailylogin` : get daily login count
    
  - `GET api/admin/dailysignup` : get daily signup count
    
  - `GET api/admin/weeklylogin` : get weekly login count
    
  - `GET api/admin/weeklysignup` : get weekly signup count
