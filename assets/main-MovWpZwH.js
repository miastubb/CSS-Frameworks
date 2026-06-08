(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();function e(e=!1){let t=`/CSS-Frameworks/`;return e?`
      <nav class="flex items-center justify-between border-b border-(--color-border) bg-(--color-bg) p-7">
        <a href="${t}" class="logo text-4xl font-normal text-white">
          The Wire™
        </a>

        <div class="flex gap-8">
          <a href="${t}feed/" class="btn btn-login">Create Post</a>
          <a href="${t}" class="btn btn-register">Logout</a>
        </div>
      </nav>
    `:`
      <nav class="flex items-center justify-between border-b border-(--color-border) bg-(--color-bg) p-7">
        <a href="${t}" class="logo text-4xl font-normal text-white">
          The Wire™
        </a>

        <div class="flex gap-8">
          <a href="${t}login/" class="btn btn-login">Login</a>
          <a href="${t}register/" class="btn btn-register">Register</a>
        </div>
      </nav>
    `}var t=`/CSS-Frameworks/assets/mia-and-pippin-BZjlCDQN.jpg`,n=document.querySelector(`#header`),r=[`/profile/`,`/feed/`].some(e=>window.location.pathname.includes(e));n&&(n.innerHTML=e(r));var i=document.querySelector(`#profile-image`);i&&(i.src=t);