import React from "react";
export default function ProfileDropdown(props) {
    return (
      <div className="dropdown text-end">
        <a href="#" className="d-block link-dark text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
          <img src="https://i.pravatar.cc/30?img=1" alt="mdo" width="32" height="32" className="rounded-circle" />
        </a>
        <ul className="dropdown-menu text-small" aria-labelledby="dropdownUser1">
          <li><a className="dropdown-item" href="#">New project...</a></li>
          <li><a className="dropdown-item" href="#">Settings</a></li>
          <li><a className="dropdown-item" href="#">Profile</a></li>
          <li><a className="dropdown-item" href="#">Sign out</a></li>
        </ul>
      </div>
    );
  }
  