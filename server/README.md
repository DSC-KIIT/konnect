# Konnect Backend
---
## Data models

```json
profile: {
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

```json
tags: {
    id:
    name:
    icon:
}
```

```json
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

- `api/test/` : Test endpoint
  
- `api/profile/`
  
  - `GET api/profile/:id` : To get details of a user with id
    
  - `POST` : Add a new user
    
  - `PUT` : To modify the data of an existing user
    
  - `DELETE` : To remove a user's details
    
- `api/activities/`
  
  - `GET api/activities/:id` : To get activity details with id
    
  - `POST` : Add a new activity
    
  - `PUT` : Modify an existing activity
    
  - `DELETE` : Delete an existing activity
    
- `api/tags/`
  
  - `GET api/tags/:id` : To get tag details with id
    
  - `POST` : Add a new tag
    
  - `PUT` : Modify an existing tag
    
  - `DELETE` : Delete an existing tag
    
- `api/admin/`
  
  - `GET api/admin/usecount` : get total user count
    
  - `GET api/admin/dailylogin` : get daily login count
    
  - `GET api/admin/dailysignup` : get daily signup count
    
  - `GET api/admin/weeklylogin` : get weekly login count
    
  - `GET api/admin/weeklysignup` : get weekly signup count
