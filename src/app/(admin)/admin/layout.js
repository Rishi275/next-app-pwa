import "../../globals.css";
import AdminSidebar from "./components/adminSidebar";


export default function AdminLayout({ children }) {
  return (
    <>
    <html>
      <body>
        
    
      <div className="fixed top-0 left-0 right-0 h-[50px] bg-blue-800 z-10" />

      <div className="flex pt-[50px] min-h-screen">
        {/* Sidebar */}
        <div className="fixed top-[50px] left-0 bottom-0">
          <AdminSidebar />
        </div>

        {/* Main content */}
        <div className="ml-64 flex-1 p-6">{children}</div>
      </div>
      </body>
      </html>
    </>
  );
}
