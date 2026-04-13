(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
    burger: document.querySelector('[data-mobile-menu-open]'),
    mobileMenu: document.querySelector('[data-mobile-menu]'),
    closeMobileMenuBtn: document.querySelector('[data-mobile-menu-close]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);
  refs.burger.addEventListener('click', toggleMobileMenu);
  refs.closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);

  function toggleModal() {
    refs.modal.classList.toggle('is-open');
  }

  function toggleMobileMenu() {
    refs.mobileMenu.classList.toggle('is-open');
  }
})();
