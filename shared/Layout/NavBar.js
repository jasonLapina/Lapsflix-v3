import { useMediaQuery } from "@chakra-ui/react";
import DesktopNav from "./DesktopNav";
import MobileNav from "./MobileNav";

function NavBar() {
  const [isMobile] = useMediaQuery("(max-width: 767px)");

  return (
    <>
      {!isMobile && <DesktopNav />}
      {isMobile && <MobileNav />}
    </>
  );
}

export default NavBar;
