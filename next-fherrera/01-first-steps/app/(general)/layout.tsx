export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="flex flex-col items-center p-24">
      <h1>General Layout</h1> 
      {children}
    </main>
  );
}
