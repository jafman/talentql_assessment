# HOW IT WORKS

This Application calculates and return the age of a person, given their date of birth (timestamp).

## Installation
```
npm install
```

## Run App
```
npm start
```
## Sample Request / Response

### GET
```
/howold?dob=707720400000
```

### RESPONSE
```
{
    "status": "success",
    "age": 30
}
```

### GET
```
/howold?dob=11111111111111110000
```

### RESPONSE
```
{
    "status": "error",
    "error": "Invalid time stamp!"
}
```
