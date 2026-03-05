import type { User } from "../users/user.type";

export async function getRandomUsers(): Promise<User[]> {
    const response = await fetch("https://randomuser.me/api/?results=100");
    const data = await response.json();

    const users: User[] = data.results;
    return users;
}
