export function createHeader() {
  return `
    <nav class="flex items-center justify-between border-b border-(--color-border) bg-(--color-bg) p-7">
      <a href="/" class="logo text-4xl font-normal text-white">
        The Wire™
      </a>

      <div class="flex gap-8">
        <a href="/login/" class="btn btn-login">Login</a>
        <a href="/register/" class="btn btn-register">Register</a>
      </div>
    </nav>
  `;
}
