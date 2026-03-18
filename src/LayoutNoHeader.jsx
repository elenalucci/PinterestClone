function LayoutNoHeader() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}