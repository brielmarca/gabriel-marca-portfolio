import { DesktopNavigation } from "@/components/DesktopNavigation";
import { MobileNavigation } from "@/components/MobileNavigation";

export function Header() {
  return (
    <header className="site-header">
      <div className="page-container header-inner">
        <a className="brand" href="#home" aria-label="Gabriel Marca, home">GM<span>.</span></a>
        <DesktopNavigation />
        <div className="header-control-slot" aria-hidden="true" />
        <MobileNavigation />
      </div>
    </header>
  );
}
