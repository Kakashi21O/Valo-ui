// Interactive tab selection & match button states
document.addEventListener('DOMContentLoaded', () => {
  const navIcons = document.querySelectorAll('.nav-icon');
  const playTab = document.querySelector('.play-tab');
  const findMatchBtn = document.getElementById('find-match');
  const toast = document.getElementById('toast');

  let toastTimeout;
  const showToast = (msg) => {
    if (!toast) return;
    toast.textContent = msg;
    toast.classList.add('show');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('show'), 2200);
  };

  navIcons.forEach((btn) => {
    btn.addEventListener('click', () => {
      navIcons.forEach((i) => i.classList.remove('active'));
      btn.classList.add('active');
      showToast(`Navigated to ${btn.getAttribute('title') || 'Tab'}`);
    });
  });

  const modeTabs = document.querySelectorAll('.mode-tab');
  modeTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      modeTabs.forEach((t) => t.classList.remove('active'));
      tab.classList.add('active');
      showToast(`Mode: ${tab.textContent.trim()}`);
    });
  });

  if (playTab) {
    playTab.addEventListener('click', () => {
      navIcons.forEach((i) => i.classList.remove('active'));
      showToast('PLAY Lobby Selected');
    });
  }

  if (findMatchBtn) {
    findMatchBtn.addEventListener('click', () => {
      const isSearching = findMatchBtn.classList.toggle('searching');
      const label = findMatchBtn.querySelector('.button-label');
      if (label) {
        label.textContent = isSearching ? 'MATCHMAKING...' : 'FIND MATCH';
      }
      showToast(isSearching ? 'Queue entered: Finding match...' : 'Queue cancelled');
    });
  }
});
