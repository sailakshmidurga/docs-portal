// import Header from "./components/Header";
// import Sidebar from "./components/Sidebar";
// import "./globals.css";
// import TableOfContents from "./components/TableOfContents";
// import "./globals.css";

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   return (
//     <html lang="en">
//       <body className="min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300">
//         <Header />
//         <div className="flex">
//           <Sidebar />
//           <div className="flex flex-1">
//   <main className="flex-1 p-6">{children}</main>
// </div>

//         </div>
//       </body>
//     </html>
//   );
// }

import "./globals.css";
import Header from "./components/Header";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}

