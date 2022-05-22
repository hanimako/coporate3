'use strict';

{
  // ハンバーガーメニュー制御
  const menuToggleBtn = document.getElementById('menuToggleBtn');
  const header = document.getElementById('header');

  menuToggleBtn.addEventListener('click', () => {
    header.classList.toggle('appear');
  });
}

{
  // トップへボタン押下時に「ふわっと」トップに戻る制御
  const toTop = document.getElementById('to-top');

  toTop.addEventListener('click', e => {
    e.preventDefault();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  });
}

{
  // id="target"までスクロールしたら「トップへ戻るボタン」を表示する
  const toTop = document.getElementById('to-top');

  function inScrollCallback(entries) {
    entries.forEach(entry => {
      if(entry.isIntersecting) {
        toTop.classList.remove('scrolled');
      } else {
        toTop.classList.add('scrolled');
      }
    });
  }

  const onScrollObserver = new IntersectionObserver(inScrollCallback);
  onScrollObserver.observe(document.getElementById('target'));
}
