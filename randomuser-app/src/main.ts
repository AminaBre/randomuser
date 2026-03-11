import { getRandomUsers } from "./requests/getRandomUsers";
import type { User } from "./types/user.type";
import "./style.css";

let users: User[] = [];

async function showAllUsers() {
  users = await getRandomUsers();

  users.forEach((user) => {
    const div = document.createElement("div");

    div.innerHTML = `
    <img src="${user.picture.large}" />
    <h2>${user.name.last}</h2>
    <h3>${user.dob.age}</h3>
    `;
    document.body.append(div);
  });
}

showAllUsers();
