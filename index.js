// ids: call1, call2

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content')

const call1 = document.getElementById('call1');
const call2 = document.getElementById('call2');

call1.onclick = () => {
  modal.style.display = 'block';
};

call2.onclick = () => {
  modal.style.display = 'block';
};

window.onclick = (event) => {
  if (event.target === modalContent) {
    modal.style.display = 'none';
  }
};


