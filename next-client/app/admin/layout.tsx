import AdminSidebar from "./components/admin-sidebar/admin-sidebar"; 

export default function AdminLayout({ children }: { children: React.ReactNode }) {
      return (
            <section className="flex">
                  <aside className="w-64 shrink-0">
                        <AdminSidebar />
                  </aside>
                  <div className="flex-1">
                        <header className="bg-white shadow-[rgba(0, 0, 0, 0.1)_0px_1px_3px_0px, rgba(0, 0, 0, 0.06)_0px_1px_2px_0px]">

                        </header>
                        <main className="min-h-screen secondary-bg-color p-4">{ children }</main>
                        <footer></footer>
                  </div>
            </section>
      );
}