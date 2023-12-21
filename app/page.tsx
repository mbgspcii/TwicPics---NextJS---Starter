// import TwicImg component
import { TwicImg } from '@twicpics/components/react';

export default function Home() {
  return (
    <main className="m-auto max-w-7xl p-24">
      <>
        <TwicImg
          src="components/puppy-dressed-as-a-reindeer.jpg" /* path to the image in the given domain */
          focus="50px53p" /* set the focus point to 50% in width and 53% in height */
          ratio="16:9" /* requires a 16:9 variant of our master file */
        />
        <p className="mt-6 text-center">There is no CLS here</p>
      </>
    </main>
  );
}
