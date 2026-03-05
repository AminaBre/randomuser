import { getRandomUsers } from './requests/getRandomUsers'
import './style.css'

async function showAllUsers() {
  const allUsers = await getRandomUsers();
  console.log(allUsers);
}

showAllUsers();

