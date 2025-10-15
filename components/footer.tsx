import Link from "next/link"
import { Github, Linkedin, Facebook, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">UMG Portafolio</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Desarrollo Web - Universidad Mariano Gálvez, Campus Petén. Creando soluciones web innovadoras.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link href="#inicio" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Inicio
                </Link>
              </li>
              <li>
                <Link href="#acerca" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Acerca de
                </Link>
              </li>
              <li>
                <Link href="#proyectos" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Proyectos
                </Link>
              </li>
              <li>
                <Link href="#contacto" className="text-muted-foreground hover:text-primary text-sm transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Social & Contact */}
          
        </div>

        <div className="border-t border-border pt-8 text-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} UMG Portafolio - Desarrollo Web. Todos los derechos reservados.
          </p>
          <p className="text-muted-foreground text-xs mt-2">
            Proyecto desarrollado por estudiantes de la Universidad Mariano Gálvez de Guatemala
          </p>
        </div>
      </div>
    </footer>
  )
}
