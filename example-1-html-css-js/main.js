const fetchBtn = document.getElementById('fetch-users-btn');
const userListContainer = document.getElementById('user-list-container');
const modalOverlay = document.getElementById('modal-overlay');
const closeModalBtn = document.getElementById('close-modal-btn');

function renderUsers(users) {
    userListContainer.innerHTML = '';
    for (const user of users) {
        const companyCatchphrase = user.company.catchphrase;
        const card = document.createElement('div');
        card.className = 'user-card';
        card.innerHTML = `
                <h3>${user.name}</h3>
                <p>${user.email}</p>
                <p><em>${companyCatchphrase}</em></p>
            `;

        card.addEventListener('click', () => {
            modalOverlay.classList.remove('hidden');
        });
        userListContainer.appendChild(card);
    }
}

async function fetchAndDisplayUsers() {
    userListContainer.innerHTML = 'Loading...';
    try {
        const response = fetch('https://jsonplaceholder.typicode.com/users');
        const users = response.json();
        renderUsers(users);

    } catch (error) {
        userListContainer.innerHTML = 'Failed to fetch users.';
        console.error('Error fetching users:', error);
    }
}

fetchBtn.addEventListener('click', fetchAndDisplayUsers);
closeModalBtn.addEventListener('click', () => {
    modalOverlay.classList.add('hidden');
});
