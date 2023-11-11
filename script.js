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
  startOverallProgress([
    'Loading changes in your world...',
    'Changing your dimension...',
    'Placing you in your new world...',
    'Adjusting your new body size...',
    'Increasing your libido level...',
    'Adjusting your sexual preferences to bisexual...',
    'Adjusting your sexual preferences to straight...',
    'Finalizing...',
  ]);
}

function createProgressBar(id, message) {
  let progressSection = document.createElement('div');
  progressSection.className = 'progress-section';
  progressSection.id = 'progressSection' + id;

  let progressMessage = document.createElement('div');
  progressMessage.className = 'progress-message';
  progressMessage.textContent = message;

  let progressBar = document.createElement('div');
  progressBar.className = 'progress-bar';

  let progress = document.createElement('div');
  progress.className = 'progress';
  progress.id = 'progressBar' + id;
  progress.style.width = '0%';
  progress.textContent = '0%';

  progressBar.appendChild(progress);
  progressSection.appendChild(progressMessage);
  progressSection.appendChild(progressBar);

  document.getElementById('progressContainer').appendChild(progressSection);
}

function startOverallProgress(changesArray) {
  document.getElementById('progressContainer').innerHTML = '';

  changesArray.forEach((change, index) => {
    createProgressBar(index, change);
    setTimeout(() => {
      updateProgressBar(index);
    }, 2000 * index);
  });

  setTimeout(displayWishGranted, 2000 * changesArray.length + 100 * 100);
}

function updateProgressBar(barIndex) {
  let progressBar = document.getElementById('progressBar' + barIndex);
  let progress = 0;

  let progressInterval = setInterval(() => {
    if (progress <= 100) {
      if (progressBar) {
        progressBar.style.width = progress + '%';
        progressBar.textContent = progress + '%';
      }
      progress++;
    } else {
      clearInterval(progressInterval);
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
