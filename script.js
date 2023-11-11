function toggleVisibility(elementId, isVisible) {
  document.getElementById(elementId).style.display = isVisible
    ? 'block'
    : 'none';
}

function showModal() {
  toggleVisibility('modalWindow', true);
}

function closeModal() {
  toggleVisibility('modalWindow', false);
}

function startLoader() {
  toggleVisibility('loader', true);
}

function stopLoader() {
  toggleVisibility('loader', false);
}

function grantWish() {
  showModal();
}

function continueWish() {
  closeModal();
  toggleVisibility('container', false);
  toggleVisibility('wishGrantedScreen', false);

  toggleVisibility('progressContainer', true);
  updateProgress(
    'worldChangePercent',
    'worldChangeProgress',
    'selfChangePercent',
    'selfChangeProgress'
  );
}

function clearProgressValues(worldChangeId, selfChangeId) {
  document.getElementById(worldChangeId).textContent = '0%';
  document.getElementById(worldChangeId).style.width = '0%';
  document.getElementById(selfChangeId).textContent = '0%';
  document.getElementById(selfChangeId).style.width = '0%';
}

function updateProgress(
  worldChangeTextId,
  worldChangeBarId,
  selfChangeTextId,
  selfChangeBarId
) {
  clearProgressValues(worldChangeTextId, selfChangeTextId);
  let worldChangePercent = 0;

  let worldChangeInterval = setInterval(() => {
    if (worldChangePercent <= 100) {
      worldChangePercent += 1;
      document.getElementById(worldChangeTextId).textContent =
        worldChangePercent + '%';
      document.getElementById(worldChangeBarId).style.width =
        worldChangePercent + '%';
      if (worldChangePercent === 100) {
        clearInterval(worldChangeInterval);
        startSelfChangeProgress(selfChangeTextId, selfChangeBarId);
      }
    }
  }, 20);
}

function startSelfChangeProgress(selfChangeTextId, selfChangeBarId) {
  let selfChangePercent = 0;

  let selfChangeInterval = setInterval(() => {
    if (selfChangePercent <= 100) {
      selfChangePercent += 1;
      document.getElementById(selfChangeTextId).textContent =
        selfChangePercent + '%';
      document.getElementById(selfChangeBarId).style.width =
        selfChangePercent + '%';
      if (selfChangePercent === 100) {
        clearInterval(selfChangeInterval);
        displayWishGranted();
      }
    }
  }, 20);
}

function displayWishGranted() {
  toggleVisibility('progressContainer', false);
  toggleVisibility('wishGrantedScreen', true);
  //resetInputContainer();
}

function resetInputContainer() {
  toggleVisibility('container', true);
}
