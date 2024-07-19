# E-Commerce API


- Prisma migrate example: 

```bash
dotenv -e .env.development -- npx prisma migrate dev --name init
```

- Mutation example:
```gql
 mutation CreateUser($email: String!, $first_name: String!, $last_name: String!, $password: String!) {
    createUser(email: $email, first_name: $first_name, last_name: $last_name, password: $password) {
      user_id
      email
      first_name
      last_name
    }
  }
```