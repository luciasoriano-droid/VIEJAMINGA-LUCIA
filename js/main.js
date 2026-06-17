document.addEventListener('DOMContentLoaded', () => {
  const offcanvasElement = document.getElementById('offcanvas');
  if (offcanvasElement) {
    const offcanvas = new bootstrap.Offcanvas(offcanvasElement);
    const cartBtn = document.querySelector('.cart-btn');
    if (cartBtn) {
      cartBtn.addEventListener('click', () => {
        offcanvas.show();
      });
    }
  }
});
