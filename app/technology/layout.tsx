export async function generateMetadata() {
  return {
    title: "Technology News - Bi' News",
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
