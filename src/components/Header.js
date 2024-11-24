import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const headerRef = useRef(null);

  useEffect(() => {
    let lastKnownScrollPosition = window.scrollY;


    function handleScroll() {
      const currentScrollPosition = window.scrollY;
      const currentHeaderElement = headerRef.current;

      if (!currentHeaderElement) return;

      // Scrolling up
      if (lastKnownScrollPosition > currentScrollPosition) {
        currentHeaderElement.style.transform = "translateY(0)";
      } else {
        currentHeaderElement.style.transform = "translateY(-200px)";
      }
      lastKnownScrollPosition = currentScrollPosition;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav style={{ display: "flex", gap: "25px" }}>
            {socials.map((data) => (
              <a
                key={data.url}
                href={data.url}
                icon={data.icon}
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon key={data.url} icon={data.icon} size="2x" />
              </a>
            ))}
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" onClick={handleClick("projects")}>
                Projects
              </a>
              <a href="/#contact-me" onClick={handleClick("contactme")}>
                Contact Me
              </a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
