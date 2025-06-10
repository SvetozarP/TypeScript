import { services } from "../services/services";
import type { User } from "../interfaces/User";
import { HtmlRenderer } from "../utils/html";

export async function usersTemplate(): Promise<void> {
    const users = await services.usersService.getAll();

    const template = `
    <h1>Users</h1>
    <ul>
        ${users.map(u => singleUserTemplate(u)).join('')}
    </ul>
    `;

    HtmlRenderer.render(template);
}

function singleUserTemplate(user: User) {
    return `
        <li>
            <h3>${user.name}</h3>
            <p>${user.address.city}</p>
            <p>${user.company.catchPhrase}</p>
        </li>
    `
}