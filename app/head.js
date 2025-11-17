export default function Head() {
  return (
    <>
      <title>Tasbih Counter - Track Your Daily Dhikr</title>
      <meta name="description" content="An Islamic dhikr counter app to track your daily tasbih and remembrance of Allah." />

      {/* Open Graph */}
      <meta property="og:title" content="Tasbih Counter - Track Your Daily Dhikr" />
      <meta property="og:description" content="Track your daily tasbih and dhikr easily with this Islamic counter app." />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://tasbih-counter-delta.vercel.app/" />
      <meta property="og:image" content="/preview.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Tasbih Counter - Track Your Daily Dhikr" />
      <meta name="twitter:description" content="Track your daily tasbih and dhikr easily." />
      <meta name="twitter:image" content="/preview.png" />
    </>
  );
}
