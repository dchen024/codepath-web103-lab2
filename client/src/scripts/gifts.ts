import { Gift } from '../types';

const renderGifts = async (): Promise<void> => {
  try {
    const response = await fetch('/gifts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Gift[] = await response.json();

    const mainContent = document.getElementById('main-content');
    if (!mainContent) {
      throw new Error('Main content element not found');
    }

    if (data.length > 0) {
      data.forEach((gift: Gift) => {
        const card = document.createElement('div');
        card.classList.add('card');

        const topContainer = document.createElement('div');
        topContainer.classList.add('top-container');

        const bottomContainer = document.createElement('div');
        bottomContainer.classList.add('bottom-container');

        topContainer.style.backgroundImage = `url(${gift.image})`;

        const name = document.createElement('h3');
        name.textContent = gift.name;
        bottomContainer.appendChild(name);

        const pricePoint = document.createElement('p');
        pricePoint.textContent = 'Price: ' + gift.pricePoint;
        bottomContainer.appendChild(pricePoint);

        const audience = document.createElement('p');
        audience.textContent = 'Great For: ' + gift.audience;
        bottomContainer.appendChild(audience);

        const link = document.createElement('a');
        link.textContent = 'Read More >';
        link.setAttribute('role', 'button');
        link.href = `/gifts/${gift.id}`;
        bottomContainer.appendChild(link);

        card.appendChild(topContainer);
        card.appendChild(bottomContainer);
        mainContent.appendChild(card);
      });
    } else {
      const message = document.createElement('h2');
      message.textContent = 'No Gifts Available 😞';
      mainContent.appendChild(message);
    }
  } catch (error) {
    console.error('Failed to fetch gifts:', error);
  }
};

const requestedURL = window.location.pathname.split('/').pop();

if (requestedURL) {
  window.location.href = '../404.html';
} else {
  renderGifts();
}
