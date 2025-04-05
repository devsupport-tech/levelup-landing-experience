
import { cn } from '@/lib/utils';
import { Phone, Zap } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const DesktopMenu = () => {
  return (
    <div className="hidden md:flex items-center">
      <NavigationMenu className="animate-fade-in">
        <NavigationMenuList className="space-x-1">
          <NavigationMenuItem>
            <NavigationMenuLink 
              href="/tech-solutions" 
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-accent/50 transition-all"
              )}
            >
              <Zap className="h-4 w-4 mr-1" /> AI & Tech
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink 
              href="#services" 
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-accent/50 transition-all"
              )}
            >
              Services
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink 
              href="#about" 
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-accent/50 transition-all"
              )}
            >
              About Us
            </NavigationMenuLink>
          </NavigationMenuItem>
          
          <NavigationMenuItem>
            <NavigationMenuLink 
              href="#contact" 
              className={cn(
                navigationMenuTriggerStyle(),
                "bg-transparent hover:bg-accent/50 transition-all"
              )}
            >
              Contact Us
            </NavigationMenuLink>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
      
      <a 
        href="tel:+13462986933" 
        className="ml-6 flex items-center text-sm font-medium text-foreground hover:text-primary transition-colors gap-1 hover:scale-105 transition-transform duration-200"
      >
        <Phone className="h-4 w-4" /> (346) 298-6933
      </a>
      
      <a 
        href="#contact" 
        className="ml-6 bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90 transition-all duration-300 hover:scale-105 hover:shadow-md hover:shadow-primary/20"
      >
        Book a Call
      </a>
    </div>
  );
};

export default DesktopMenu;
