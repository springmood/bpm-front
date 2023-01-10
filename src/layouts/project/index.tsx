// Chakra imports
import { Portal, Box, useDisclosure, Icon } from "@chakra-ui/react";
import Footer from "components/footer/FooterAdmin";
// Layout components
import Navbar from "components/navbar/NavbarAdmin";
import Sidebar from "components/sidebar/Sidebar";
import { SidebarContext } from "contexts/SidebarContext";
import { PropsWithChildren, useEffect, useState } from "react";
import { MdHome } from "react-icons/md";
import routes from "routes";
import {
  getActiveNavbar,
  getActiveNavbarText,
  getActiveRoute,
  isWindowAvailable,
} from "utils/navigation";
import RTL from "pages/rtl/rtl-default";
import { useRouter } from "next/router";

interface DashboardLayoutProps extends PropsWithChildren {
  [x: string]: any;
}

// Custom Chakra theme
export default function ProjectLayout(props: DashboardLayoutProps) {
  const { children, ...rest } = props;
  // states and functions
  const [fixed] = useState(false);
  const [toggleSidebar, setToggleSidebar] = useState(false);
  // functions for changing the states from components
  const { onOpen } = useDisclosure();

  useEffect(() => {
    window.document.documentElement.dir = "ltr";
  });

  const route = useRouter();

  const projectId = route.query.project_id;

  return (
    <Box>
      <SidebarContext.Provider
        value={{
          toggleSidebar,
          setToggleSidebar,
        }}
      >
        <Sidebar
          routes={[
            {
              name: "Dashboard",
              layout: `/admin`,
              path: `/projects/${projectId}/dashboard`,
              icon: (
                <Icon as={MdHome} width="20px" height="20px" color="inherit" />
              ),
              component: RTL,
            },
            {
              name: "Members",
              layout: `/admin`,
              path: `/projects/${projectId}/dashboard`,
              icon: (
                <Icon as={MdHome} width="20px" height="20px" color="inherit" />
              ),
              component: RTL,
            },
            {
              name: "Tasks",
              layout: `/admin`,
              path: `/projects/${projectId}/dashboard`,
              icon: (
                <Icon as={MdHome} width="20px" height="20px" color="inherit" />
              ),
              component: RTL,
            },
            {
              name: "Plugins",
              layout: `/admin`,
              path: `/projects/${projectId}/dashboard`,
              icon: (
                <Icon as={MdHome} width="20px" height="20px" color="inherit" />
              ),
              component: RTL,
            },
          ]}
          display="none"
          {...rest}
        />
        <Box
          float="right"
          minHeight="100vh"
          height="100%"
          overflow="auto"
          position="relative"
          maxHeight="100%"
          w={{ base: "100%", xl: "calc( 100% - 290px )" }}
          maxWidth={{ base: "100%", xl: "calc( 100% - 290px )" }}
          transition="all 0.33s cubic-bezier(0.685, 0.0473, 0.346, 1)"
          transitionDuration=".2s, .2s, .35s"
          transitionProperty="top, bottom, width"
          transitionTimingFunction="linear, linear, ease"
        >
          <Portal>
            <Box>
              <Navbar
                onOpen={onOpen}
                logoText={"Horizon UI Dashboard PRO"}
                brandText={getActiveRoute(routes)}
                secondary={getActiveNavbar(routes)}
                message={getActiveNavbarText(routes)}
                fixed={fixed}
                {...rest}
              />
            </Box>
          </Portal>

          <Box
            mx="auto"
            p={{ base: "20px", md: "30px" }}
            pe="20px"
            minH="100vh"
            pt="50px"
          >
            {children}
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      </SidebarContext.Provider>
    </Box>
  );
}
