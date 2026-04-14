export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 px-6 py-12 text-zinc-900 dark:bg-zinc-950 dark:text-zinc-100">
      <section className="mx-auto w-full max-w-3xl rounded-2xl border border-zinc-200 bg-white p-8 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
        <p className="text-sm font-medium uppercase tracking-wider text-zinc-500 dark:text-zinc-400">
          Web Deployment
        </p>
        <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
          Laboratory work #1
        </h1>
        <p className="mt-4 text-base leading-7 text-zinc-600 dark:text-zinc-300">
          This project demonstrates a basic Next.js setup with TypeScript,
          linting, and automated deployment to GitHub Pages and Vercel.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <a
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            href="https://github.com/Vlad-Dzemiuk/lab-1-setup"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-sm text-zinc-500 dark:text-zinc-400">Source</p>
            <p className="mt-1 font-semibold">GitHub repository</p>
          </a>

          <a
            className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 transition hover:bg-zinc-100 dark:border-zinc-700 dark:bg-zinc-800 dark:hover:bg-zinc-700"
            href="https://vlad-dzemiuk.github.io/lab-1-setup/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <p className="text-sm text-zinc-500 dark:text-zinc-400">
              Deployment
            </p>
            <p className="mt-1 font-semibold">GitHub Pages</p>
          </a>
        </div>

        <div className="mt-8">
          <a
            className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-zinc-700 dark:bg-zinc-100 dark:text-zinc-900 dark:hover:bg-zinc-300"
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Vercel Dashboard
          </a>
        </div>
      </section>
    </main>
  );
}
