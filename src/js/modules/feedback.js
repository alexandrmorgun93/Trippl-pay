module.exports = (form) => {
  // const popupClose = document.querySelector('.popup_close');
  const popup = document.querySelector('.popup_wrap');

  function encode(wrap, name) {

    try {
      let data = wrap.querySelector(`[name =${name}]`).value;
      wrap.querySelector(`[name =${name}]`).value = "";

      return encodeURIComponent(data);
    } catch (err) {
      return encodeURIComponent('');
    }
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    popup.classList.add('active');
    document.body.classList.add('active');
    let dataForm = `name=${encode(form, 'name')}&email=${encode(form, 'email')}&url=${encode(form, 'url')}`;
  });



  function nameCheckField() {
    let pattern = /^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?/;
    console.log(pattern);
  }

  // popupClose.addEventListener('click', () => {
  //   popup.classList.remove('active');
  //   document.body.classList.remove('active');
  //
  // })
}
