import { Head } from "$fresh/runtime.ts";

export default function Error404() {
  return (
    <>
      <Head>
        <title>Oups, vous êtes perdus</title>
      </Head>
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Oups</h1>
          <p class="my-4">
            Il semblerait que vous soyez perdus...
          </p>
          <a href="/" class="underline">Revenir en lieu sûr</a>
        </div>
    </>
  );
}
