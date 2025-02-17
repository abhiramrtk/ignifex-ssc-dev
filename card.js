//Cards Script
const cards = document.querySelectorAll('.card');
const resetBtn = document.querySelector('.reset-btn');
const cardContainer = document.querySelector('.card-container'); // Get the section container
let activeCard = null;
let cardPositions = [];

// Save initial positions
cards.forEach(card => {
    cardPositions.push({
        top: card.style.top,
        left: card.style.left,
        transform: card.style.transform
    });
});

// Add click events
cards.forEach((card, index) => {
    card.addEventListener('click', (event) => {
        event.stopPropagation();
        if (activeCard === card) return;

        resetCards();

        activeCard = card;
        const rect = card.getBoundingClientRect();
        const containerRect = cardContainer.getBoundingClientRect(); // Get section dimensions

        // Calculate center position within the section
        let centerX = containerRect.left + (containerRect.width / 2) - (rect.width / 2);
        let centerY = containerRect.top + (containerRect.height / 2) - (rect.height / 2);

        // Ensure the card stays within section bounds
        centerX = Math.max(containerRect.left, Math.min(centerX, containerRect.right - rect.width));
        centerY = Math.max(containerRect.top, Math.min(centerY, containerRect.bottom - rect.height));

        // Apply new position
        card.classList.add('selected');
        card.style.position = 'absolute';
        card.style.top = `${centerY - containerRect.top}px`; // Adjust relative to the section
        card.style.left = `${centerX - containerRect.left}px`;

        // Position reset button inside the section
        let btnX = containerRect.width - 50; // Right side of the section
        let btnY = containerRect.height - 50; // Bottom side of the section

        resetBtn.style.top = `${btnY}px`;
        resetBtn.style.left = `${btnX}px`;
        resetBtn.style.display = 'block';
    });
});

// Reset cards
function resetCards() {
    cards.forEach((card, index) => {
        card.classList.remove('selected');
        card.style.position = 'absolute';
        card.style.top = cardPositions[index].top;
        card.style.left = cardPositions[index].left;
        card.style.transform = cardPositions[index].transform;
    });

    resetBtn.style.display = 'none';
    activeCard = null;
}






