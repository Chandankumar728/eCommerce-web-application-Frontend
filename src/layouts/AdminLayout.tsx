// @ts-ignore
// @ts-nocheck
import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

const AdminLayout = ({ children }:any) => {
  return (
    <div className="flex h-screen overflow-hidden">
    <Sidebar className="w-64 h-screen overflow-y-auto bg-gray-800 text-white" />
    <div className="flex flex-col flex-1 overflow-y-auto">
      <Topbar />
      <main className="p-4">{children}</main>
    </div>
  </div>
  );
};

export default AdminLayout;
