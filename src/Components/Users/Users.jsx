import React from "react";
import "./Users.css";
import { FaRegEdit } from "react-icons/fa";
import { MdDeleteOutline } from "react-icons/md";
const Users = () => {
  return (
    <div className="users-container">
      <div className="users-intro">
        <h1>İstifadəçilərin siyahısı</h1>
        <button>Əlavə et</button>
      </div>
      <table className="users-table">
        <thead>
          <tr>
            <th>Sıra nömrəsi</th>
            <th>İstifadəçi adı</th>
            <th>Düzəliş et</th>
            <th>Sil</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="list-number">1</td>
            <td>Elnur</td>
            <td>
              <FaRegEdit className="user-edit-btn" />
            </td>
            <td>
              <MdDeleteOutline className="user-delete-btn" />
            </td>
          </tr>
          <tr>
            <td className="list-number">1</td>
            <td>Elnur</td>
            <td>
              <FaRegEdit className="user-edit-btn" />
            </td>
            <td>
              <MdDeleteOutline className="user-delete-btn" />
            </td>
          </tr>
          <tr>
            <td className="list-number">1</td>
            <td>Elnur</td>
            <td>
              <FaRegEdit className="user-edit-btn" />
            </td>
            <td>
              <MdDeleteOutline className="user-delete-btn" />
            </td>
          </tr>
          <tr>
            <td className="list-number">1</td>
            <td>Elnur</td>
            <td>
              <FaRegEdit className="user-edit-btn" />
            </td>
            <td>
              <MdDeleteOutline className="user-delete-btn" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Users;
