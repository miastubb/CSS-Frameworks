export function createHeader(isLoggedIn = false) {
  const base = import.meta.env.BASE_URL;

  if (isLoggedIn) {
    return `
      <nav class="flex items-center justify-between border-b border-(--color-border) bg-(--color-bg) p-7">
        <a href="${base}" class="logo text-4xl font-normal text-white">
          The Wire™
        </a>

        <div class="flex gap-8">
          <a href="${base}feed/" class="btn btn-login">Create Post</a>
          <a href="${base}" class="btn btn-register">Logout</a>
        </div>
      </nav>
    `;
  }

  return `
      <nav class="flex items-center justify-between border-b border-(--color-border) bg-(--color-bg) p-7">
        <a href="${base}" class="logo text-4xl font-normal text-white">
          The Wire™
        </a>

        <div class="flex gap-8">
          <a href="${base}login/" class="btn btn-login">Login</a>
          <a href="${base}register/" class="btn btn-register">Register</a>
        </div>
      </nav>
    `;
}
