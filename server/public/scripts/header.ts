// Select the header element
const header = document.querySelector('header');

if (header) {
  // Create the header container div
  const headerContainer = document.createElement('div');
  headerContainer.className = 'header-container';

  // Create the left side of the header
  const headerLeft = document.createElement('div');
  headerLeft.className = 'header-left';

  // Create the logo element
  const headerLogo = document.createElement('img');
  headerLogo.src = '/logo.png';
  headerLogo.alt = 'Logo';

  // Create the title element
  const headerTitle = document.createElement('h1');
  headerTitle.textContent = 'UnEarthed';

  // Append the logo and title to the left side of the header
  headerLeft.appendChild(headerLogo);
  headerLeft.appendChild(headerTitle);

  // Create the right side of the header
  const headerRight = document.createElement('div');
  headerRight.className = 'header-right';

  // Create the Home button
  const headerButton = document.createElement('button');
  headerButton.textContent = 'Home';

  // Add a click event listener to the button
  headerButton.addEventListener('click', function handleClick(event) {
    window.location.href = '/';
  });

  // Append the button to the right side of the header
  headerRight.appendChild(headerButton);

  // Append the left and right header div elements to the header container
  headerContainer.appendChild(headerLeft);
  headerContainer.appendChild(headerRight);

  // Append the header container to the header element
  header.appendChild(headerContainer);
} else {
  console.error('Header element not found.');
}
