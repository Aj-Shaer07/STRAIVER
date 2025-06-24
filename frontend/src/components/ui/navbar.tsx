import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "./navigationbar"
import { LoginOrProfileButton } from "./login"
import GlareHover from "../../blocks/Animations/GlareHover/GlareHover"
import { Link } from "react-router-dom";
import GButton from "./generatebutton.tsx";


export function Navbar() {
  return (
    <>
      <nav className="navbar flex items-center px-8 py-3 shadow-md fixed top-0 left-0 w-full z-50"
        style={{ backgroundColor: "transparent", paddingRight: "0.5rem" }}>
        <div className="flex items-center gap-2 mr-8">
          <img src="/logo.png" style={{ height: 70, width: 100 }} />
          <span className="font-bold text-lg" style={{ color: "white" }}>Str-aver</span>
        </div>
        <div className="flex flex-1">
          <NavigationMenu>
        <NavigationMenuList className="flex gap-6 ml-0">
          <NavigationMenuItem>
            <GlareHover>
          <NavigationMenuLink href="/" className="font-medium text-base">Home</NavigationMenuLink>
            </GlareHover>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <GlareHover>
          <NavigationMenuTrigger>
            <NavigationMenuLink asChild>
            <Link to="/problems" className="font-medium text-base">
              Problems
            </Link>
            </NavigationMenuLink>
          </NavigationMenuTrigger>
            </GlareHover>
            <NavigationMenuContent>
          <GlareHover>
            <NavigationMenuLink href="/problems/easy">Easy</NavigationMenuLink>
          </GlareHover>
          <GlareHover>
            <NavigationMenuLink href="/problems/medium">Medium</NavigationMenuLink>
          </GlareHover>
          <GlareHover>
            <NavigationMenuLink href="/problems/hard">Hard</NavigationMenuLink>
          </GlareHover>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <GlareHover>
          <NavigationMenuLink href="/contact-us" className="font-medium text-base">Contact-us</NavigationMenuLink>
            </GlareHover>
          </NavigationMenuItem>
        </NavigationMenuList>
        <NavigationMenuIndicator />
        <NavigationMenuViewport />
          </NavigationMenu>
        </div>
        <GButton />
        <LoginOrProfileButton />
      </nav>
    </>
  )
}