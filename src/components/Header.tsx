import { Button } from "./ui/button"
import { Link } from "react-router-dom"
import Logo from "./Logo"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/95 backdrop-blur-sm border-b border-white/10">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="flex items-center">
            <Logo />
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex items-center gap-6">
          <Link 
            to="#features" 
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Features
          </Link>
          <Link 
            to="#benefits" 
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Benefits
          </Link>
          <Link 
            to="/docs" 
            className="text-sm font-medium text-white/80 hover:text-white transition-colors"
          >
            Documentation
          </Link>
          <Button
            asChild
            variant="ghost"
            className="text-sm font-medium text-white/80 hover:text-white hover:bg-white/10"
          >
            <Link to="/login">
              Login
            </Link>
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Header 