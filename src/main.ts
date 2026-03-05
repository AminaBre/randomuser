import { getRandomUsers } from './requests/getRandomUsers'
import type { User } from './users/user.type';
import './style.css'

async function showAllUsers() {
  const allUsers = await getRandomUsers();

  const users: User[] = allUsers;

  console.log(users);

  allUsers.forEach((user) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <img src="${user.picture.medium}">
    <h2>${user.name.first} ${user.name.last}</h2>
    <h3>${user.phone}</h3>
    `

    document.body.append(div);
  })
}

showAllUsers();

