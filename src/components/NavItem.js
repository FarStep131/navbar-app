import { NavLink } from "react-router-dom"

function NavItem({ Icon, title }) {
  return (
    <NavLink
      to={title.toLowerCase()}
      className="flex flex-col items-center cursor-pointer group w-12"
      activeClassName="text-red-600"
    >
     <Icon size={30} className="mb-1" />
     <p className="font-semibold opacity-0 group-hover:opacity-100">{title}</p> 
    </NavLink>
  )
}

export default NavItem
