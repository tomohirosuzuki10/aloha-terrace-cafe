/* =========================================================
   ALOHA TERRACE CAFE — script.js
   ・ナビ … スクロールすると背景が濃くなる
   ・reveal … 各セクションが画面に入るとふわっと表示
   ========================================================= */

// スクロールでナビの背景を切り替え
const nav = document.getElementById('nav');
addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', scrollY > 60);
});

// 画面に入った要素をふわっと表示
const io = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    if (e.isIntersecting) e.target.classList.add('show');
  });
}, { threshold: 0.18 });

document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
