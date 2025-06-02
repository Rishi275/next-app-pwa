import Header from "@/components/header";
import Footer from "@/components/footer";

export default function UserLayout({ children }) {
  return (
    <html>
       <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#000000" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
      </head>
      <body>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-1">
          {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
