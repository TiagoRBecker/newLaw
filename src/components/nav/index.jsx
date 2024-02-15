import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
const Header = () => {
  const showMenuMobile = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="w-full h-28 bg-blue-950 flex items-center justify-center">
      <nav className="w-full h-full flex items-center justify-around px-4">
        <div className="w-full md:w-[30%]">
          <img
            src="/ma.png"
            alt="Logo"
            className="w-full h-auto object-cover"
          />
        </div>
        <ul className="hidden md:w-full md:flex items-center justify-end  gap-4">
          <li className="text-white text-base hover:text-gray-400">
            <Link href={"#empresarial"}>Direito Empresarial</Link>
          </li>
          <li className="text-white text-base hover:text-gray-400">
            <Link href={"#civil"}>Direito Civil</Link>
          </li>
          <li className="text-white text-base hover:text-gray-400">
            <Link href={"#medico"}>Direto Medico</Link>
          </li>
          <li className="text-white text-base hover:text-gray-400">
            <Link href={"#"}>Sobre Nós</Link>
          </li>
          <li className="text-white text-base hover:text-gray-400">
            <Link href={"#"}>Contato</Link>
          </li>
        </ul>
        <div className="w-[30%] flex items-center justify-end md:hidden">
          <Menu>
            <MenuButton colorScheme="pink">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </MenuButton>
            <MenuList>
              <MenuItem>
                <Link href={"#empresarial"}>Direito Empresarial</Link>
              </MenuItem>
              <MenuItem>
                <Link href={"#civil"}>Direito Civil</Link>
              </MenuItem>
              <MenuItem>
                {" "}
                <Link href={"#medico"}>Direto Medico</Link>
              </MenuItem>
              <MenuItem>
                <Link href={"#sobre"}>Sobre Nós</Link>{" "}
              </MenuItem>
              <MenuItem>
                {" "}
                <Link href={"#contato"}>Contato</Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </div>
      </nav>
    </header>
  );
};

export default Header;
