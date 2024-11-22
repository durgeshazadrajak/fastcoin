import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="sidebar bg-white pt-4">
      <ul className="list-unstyled">
        <li>
          <Link href="/admin" className="sidebar-item d-flex align-items-center active">
            <i className="bi bi-house"></i> <span className="text">Dashboard</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/upload-documents" className="sidebar-item d-flex align-items-center">
            <i className="bi bi-cloud-arrow-up"></i> <span className="text">Upload Documents</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/documentlist" className="sidebar-item d-flex align-items-center">
            <i className="bi bi-list-ul"></i> <span className="text">Document List</span>
          </Link>
        </li>
        <li>
          <Link href="/admin/profile" className="sidebar-item d-flex align-items-center">
            <i className="bi bi-person-circle"></i> <span className="text">My Profile</span>
          </Link>
        </li>
        <li>
          <Link href="/" className="sidebar-item d-flex align-items-center">
            <i className="bi bi-box-arrow-left"></i> <span className="text">Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
