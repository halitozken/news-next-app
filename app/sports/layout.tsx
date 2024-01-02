export async function generateMetadata() {
  return {
    title: "Sports News - Bi' News",
    description: "...",
  };
}

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
    </>
  );
}
