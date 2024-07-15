// Sample data for challenges (you should replace this with your actual data)
const challenges = [
    { id: 1, name: "vintage", title: "Vintage Look Challenge", description: "Create a vintage look and earn points!" },
    { id: 2, name: "streetwear", title: "Streetwear Style Challenge", description: "Show off your best streetwear style!" },
    { id: 3, name: "boho", title: "Boho Chic Challenge", description: "Design a bohemian-inspired outfit!" },
    { id: 4, name: "formal", title: "Formal Attire Challenge", description: "Show your best formal outfit!" },
    { id: 5, name: "casual", title: "Casual Comfort Challenge", description: "Create a comfy casual look!" },
    { id: 6, name: "sporty", title: "Sporty Style Challenge", description: "Design a sporty and stylish outfit!" },
    { id: 7, name: "ethnic", title: "Ethnic Wear Challenge", description: "Showcase your best ethnic wear!" },
    { id: 8, name: "glam", title: "Glamorous Look Challenge", description: "Create a glamorous look for the evening!" },
    { id: 9, name: "business", title: "Business Casual Challenge", description: "Show your business casual style!" },
    { id: 10, name: "retro", title: "Retro Style Challenge", description: "Design a retro-inspired outfit!" }
];

// Sample data for leaderboard (you should replace this with your actual data)
const leaderboard = [
    { rank: 1, username: "FashionGuru", points: 350 },
    { rank: 2, username: "StyleStar", points: 320 },
    { rank: 3, username: "TrendSetter", points: 300 },
    { rank: 4, username: "ChicMaster", points: 290 },
    { rank: 5, username: "GlamQueen", points: 280 },
    { rank: 6, username: "BohoBabe", points: 270 },
    { rank: 7, username: "StreetKing", points: 260 },
    { rank: 8, username: "FormalFinest", points: 250 },
    { rank: 9, username: "CasualCool", points: 240 },
    { rank: 10, username: "SportySpice", points: 230 }
];

// Function to render challenges
function renderChallenges() {
    const challengesList = document.getElementById('challenges-list');
    challengesList.innerHTML = '';

    challenges.forEach(challenge => {
        const challengeDiv = document.createElement('div');
        challengeDiv.classList.add('challenge');

        const challengeTitle = document.createElement('h3');
        const challengeLink = document.createElement('a');
        challengeLink.href = `challenge-${challenge.name}.html`; // Dynamically create link to challenge detail page
        challengeLink.textContent = challenge.title;
        challengeTitle.appendChild(challengeLink);

        const challengeDescription = document.createElement('p');
        challengeDescription.textContent = challenge.description;

        challengeDiv.appendChild(challengeTitle);
        challengeDiv.appendChild(challengeDescription);

        challengesList.appendChild(challengeDiv);
    });
}

// Function to render leaderboard
function renderLeaderboard() {
    const leaderboardTable = document.getElementById('leaderboard-table').getElementsByTagName('tbody')[0];
    leaderboardTable.innerHTML = '';

    leaderboard.forEach(entry => {
        const row = leaderboardTable.insertRow();
        row.innerHTML = `
            <td>${entry.rank}</td>
            <td>${entry.username}</td>
            <td>${entry.points}</td>
        `;
    });
}

// Event listener after DOM is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    renderChallenges();
    renderLeaderboard();
});
// script.js

// Function to show the modal popup
function showPopup(event) {
    event.preventDefault(); // Prevent the form from submitting
    var modal = document.getElementById("myModal");
    var span = document.getElementsByClassName("close")[0];

    // Show the modal
    modal.style.display = "block";

    // Close the modal when the user clicks on <span> (x)
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Close the modal when the user clicks anywhere outside of the modal
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // You can add your form submission code here if needed
    // For example, use AJAX to submit the form without refreshing the page
    return false; // Prevent the default form submission
}
