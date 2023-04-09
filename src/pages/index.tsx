import Head from "next/head";
import { W98Window } from "@/components/window";
import Delayed from "@/components/Delayed";
import { ReactNode } from "react";

export default function Home() {
  const windowsQuantity = 12;
  const windowsShowMsDelay = new Array(windowsQuantity)
    .fill(null)
    .map((value, index) => index * 100);
  const windowsSpacingEmValues = new Array(windowsQuantity)
    .fill(null)
    .map((value, index) => index);
  const windowsComponents = new Array(windowsQuantity)
    .fill(null)
    .map((value, index) => {
      const waitBeforeShow = windowsShowMsDelay[index];
      const spacingEmValue = `${windowsSpacingEmValues[index]}em`;

      return (
        <Delayed waitBeforeShow={waitBeforeShow}>
          <W98Window
            key={index}
            style={{ marginTop: spacingEmValue, marginRight: spacingEmValue }}
          />
        </Delayed>
      );
    });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {windowsComponents}
    </>
  );
}
