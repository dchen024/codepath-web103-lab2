import { Gift } from '../types';

const renderGift = async (): Promise<void> => {
  try {
    const requestedID = parseInt(
      window.location.href.split('/').pop() || '',
      10
    );

    const response = await fetch('/gifts');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data: Gift[] = await response.json();

    const giftContent = document.getElementById('gift-content');
    if (!giftContent) {
      throw new Error('Gift content element not found');
    }

    let gift = data.find((gift) => gift.id === requestedID);

    if (gift) {
      const imageElement = document.getElementById('image') as HTMLImageElement;
      if (imageElement) {
        imageElement.src = gift.image;
      }

      const nameElement = document.getElementById('name');
      if (nameElement) {
        nameElement.textContent = gift.name;
      }

      const submittedByElement = document.getElementById('submittedBy');
      if (submittedByElement) {
        submittedByElement.textContent = `Submitted By: ${gift.submittedBy}`;
      }

      const submittedOnElement = document.getElementById('submittedOn');
      if (submittedOnElement) {
        submittedOnElement.textContent = `Submitted On: ${new Date().toLocaleDateString()}`;
      }

      const pricePointElement = document.getElementById('pricePoint');
      if (pricePointElement) {
        pricePointElement.textContent = `Price: ${gift.pricePoint}`;
      }

      const audienceElement = document.getElementById('audience');
      if (audienceElement) {
        audienceElement.textContent = `Great For: ${gift.audience}`;
      }

      const descriptionElement = document.getElementById('description');
      if (descriptionElement) {
        descriptionElement.textContent = gift.description;
      }

      document.title = gift.name;
    } else {
      const message = document.createElement('h2');
      message.textContent = 'No Gifts Available 😞';
      giftContent.appendChild(message);
    }
  } catch (error) {
    console.error('Failed to fetch gift:', error);
  }
};

const setupHeader = (): void => {
  const header = document.querySelector('header');

  if (header) {
    const headerContainer = document.createElement('div');
    headerContainer.className = 'header-container';

    const headerLeft = document.createElement('div');
    headerLeft.className = 'header-left';

    const headerLogo = document.createElement('img');
    headerLogo.src = '/logo.png';
    headerLogo.alt = 'Logo';

    const headerTitle = document.createElement('h1');
    headerTitle.textContent = 'UnEarthed';

    headerLeft.appendChild(headerLogo);
    headerLeft.appendChild(headerTitle);

    const headerRight = document.createElement('div');
    headerRight.className = 'header-right';

    const headerButton = document.createElement('button');
    headerButton.textContent = 'Home';
    headerButton.addEventListener('click', () => {
      window.location.href = '/';
    });

    headerRight.appendChild(headerButton);

    headerContainer.appendChild(headerLeft);
    headerContainer.appendChild(headerRight);

    header.appendChild(headerContainer);
  } else {
    console.error('Header element not found.');
  }
};

setupHeader();
renderGift();
