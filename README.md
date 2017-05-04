# live-code-dyankastutara

## Deskripsi Program

Program ini dibuat sebagai pelatihan dalam penerapan CRUD (Create Read Update Delete)

## How to Use

- Open Postman
- Choice Route
- Enter request url : default (localhost:3000/{route})
- example : localhost:3000/foods

## List route

list route for foods:

|   ROUTE    |  HTTP  |    DESCRIPTION    |
| ---------- | ------ | ----------------- |
| /foods     | GET    | Show All Foods    |
| /foods     | POST   | Add Foods         |
| /foods/:id | GET    | Show Food by Id   |
| /foods/:id | DELETE | Delete Food by Id |
| /foods/:id | PATCH  | Update Food by Id |

list route for restaurant:

|      ROUTE       |  HTTP  |       DESCRIPTION       |
| ---------------- | ------ | ----------------------- |
| /restaurants     | GET    | Show All Restaurants    |
| /restaurants     | POST   | Add Restaurants         |
| /restaurants/:id | GET    | Show Restaurant by Id   |
| /restaurants/:id | DELETE | Delete Restaurant by Id |
| /restaurants/:id | PATCH  | Update Restaurant by Id |
