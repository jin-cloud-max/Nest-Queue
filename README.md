# Jobs With NestJS
Background jobs with NestJS Framework

# Installation
Clone this repository and then run 
```
npm install
```

# Usage
After cloning this repository and installing the dependencies set your enviroments variables according to .env.example file. 
(you need to have an account on Ethereal, in case you do not have click [here](https://ethereal.email/#:~:text=Ethereal%20is%20a%20fake%20SMTP%20service%2C%20mostly%20aimed,anti-transactional%20email%20service%20where%20messages%20never%20get%20delivered. "here") to create one)

After that you can run `npm run start:dev` and access http://localhost:3000.
### Requests
there is only one route of type POST `/create-user` and it receive `name` and `email`

After make the request, check your Ethereal messeges and you will see the Welcome e-mail.

## License
[MIT](https://choosealicense.com/licenses/mit/)
