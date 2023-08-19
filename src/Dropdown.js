
// eslint-disable-next-line
import React, { useState } from 'react';
import './Dropdown.css'; // Add your CSS file for styling

function Dropdown() {
  const [nestedDropdownOpen, setNestedDropdownOpen] = useState(false);
  const [secondRowDropdownOpen, setSecondRowDropdownOpen] = useState(false);
  const [thirdRowDropdownOpen, setThirdRowDropdownOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState('Status');
  const [selectedPriority, setSelectedPriority] = useState('Priority');

  const toggleNestedDropdown = () => {
    setNestedDropdownOpen(!nestedDropdownOpen);
  };

  const toggleSecondRowDropdown = () => {
    setSecondRowDropdownOpen(!secondRowDropdownOpen);
  };

  const toggleThirdRowDropdown = () => {
    setThirdRowDropdownOpen(!thirdRowDropdownOpen);
  };

  const handleStatusClick = (status) => {
    setSelectedStatus(status);
    toggleSecondRowDropdown();
  };

  const handlePriorityClick = (priority) => {
    setSelectedPriority(priority);
    toggleThirdRowDropdown();
  };
  
  return (
    <div className="dropdown">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        onClick={toggleNestedDropdown}
      ><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-sliders2" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.5 1a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4H1.5a.5.5 0 0 1 0-1H10V1.5a.5.5 0 0 1 .5-.5ZM12 3.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Zm-6.5 2A.5.5 0 0 1 6 6v1.5h8.5a.5.5 0 0 1 0 1H6V10a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5ZM1 8a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2A.5.5 0 0 1 1 8Zm9.5 2a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V13H1.5a.5.5 0 0 1 0-1H10v-1.5a.5.5 0 0 1 .5-.5Zm1.5 2.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5Z"/>
    </svg>
        Display
      </button>
      <ul className={`dropdown-menu ${nestedDropdownOpen ? 'show' : ''}`}>
        <li className="d-flex align-items-center">
          <a className="dropdown-item non-clickable" href="#">
            Grouping
          </a>
          <div className="dropdown ml-3">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              onClick={toggleSecondRowDropdown}
            >
              {selectedStatus}
            </button>
            <ul className={`dropdown-menu ${secondRowDropdownOpen ? 'show' : ''}`}>
              <li>
                <a className="dropdown-item" onClick={() => handleStatusClick('Status')}>
                  Status
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => handleStatusClick('User')}>
                  User
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => handleStatusClick('Priority')}>
                  Priority
                </a>
              </li>
            </ul>
          </div>
        </li>
        <li className="d-flex align-items-center">
          <a className="dropdown-item non-clickable" href="#">
            Ordering
          </a>
          <div className="dropdown ml-3">
            <button
              className="btn btn-light dropdown-toggle"
              type="button"
              onClick={toggleThirdRowDropdown}
            >
              {selectedPriority}
            </button>
            <ul className={`dropdown-menu ${thirdRowDropdownOpen ? 'show' : ''}`}>
              <li>
                <a className="dropdown-item" onClick={() => handlePriorityClick('Priority')}>
                  Priority
                </a>
              </li>
              <li>
                <a className="dropdown-item" onClick={() => handlePriorityClick('Title')}>
                  Title
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
}

export default Dropdown;