import "../Styles/MenuDropdown.css";

export const MenuDropdown= () => {
    return(
        <div className="dropdown-menu" >
        <ul>
        <li className = 'dropdownItem'><a> Home </a></li>
        <li className = 'dropdownItem'><a> About Me </a></li>
        <li className = 'dropdownItem'><a> Skills </a></li>
        <li className = 'dropdownItem'><a> Works </a></li>
        <li className = 'dropdownItem'><a> Services </a></li>
        <li className = 'dropdownItem'><a> Contact </a></li>
          </ul>
          </div>
    );
}