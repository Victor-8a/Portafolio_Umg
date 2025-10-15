import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "MisPelis",
    description:
      "Aplicación web para gestión y descubrimiento de películas. Permite a los usuarios explorar, buscar y guardar sus películas favoritas con una interfaz intuitiva y moderna.",
    image: "/MisPelis.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "API REST"],
    liveUrl: "http://www.mispelis.me/", 
    githubUrl: "https://github.com/JassCast18/MisPelis",
  },
  {
    title: "School-UMG",
    description:
      "Sistema de gestión escolar completo que incluye administración de estudiantes, profesores, cursos y calificaciones. Diseñado específicamente para instituciones educativas.",
    image: "/SchoolUmg.jpg",
    technologies: ["Next.js", "TypeScript", "SQL Server", "Azure"],
    liveUrl: "https://www.schoolumg.tech/", 
    githubUrl: "https://github.com/Aiden-01/SchoolUmg_Front.git",
  },
  {
    title: "Portafolio Personal",
    description:
      "Sitio web de portafolio profesional que muestra proyectos, habilidades y experiencia. Incluye diseño responsive, animaciones suaves y formulario de contacto funcional.",
    image: "/Portafolio.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "https://aiden-01.github.io/Portafolio/",
    githubUrl: "https://github.com/Aiden-01/Portafolio.git",
  },
  {
    title: "Red Social",
    description:
      "Desarrollo de una red social con funcionalidades completas: publicación, comentarios, likes, edición de perfil, mensajería, notificaciones, búsqueda, etiquetas (# y menciones) y gestión de cuentas públicas o privadas con solicitudes de seguimiento. Proyecto desarrollado en el curso Base de Datos 2.",
    image: "/RedSocial.jpg",
    technologies: ["React", "Node.js", "MongoDB", "Spring Boot"],
    liveUrl: null, // sin demo
    githubUrl: "https://github.com/Aiden-01/Fron_NexusSenpai.git",
  },
  {
    title: "Aproximaxión de Vogel",
    description:
      "proyecto realizado con el fin de manipular datos utilizando operaciones completas aritmeticas, haciendo resulocion por medio de aproximaciones para matrices.",
    image: "/voguel.png",
    technologies: ["Java", "JavaFx", "Maven"],
    liveUrl: null, // sin demo
    githubUrl: "https://github.com/JassCast18/AproximacionDeVoguel.git",
  },
  {
    title: "Concesionario El Rojo",
    description:
      "El proyecto tiene como objetivo representar de forma profesional la presencia digital del Concesionario El Rojo, brindando a los clientes un sitio atractivo, fácil de navegar y funcional, que refuerce la identidad de la marca y facilite la comunicación con sus potenciales compradores.",
    image: "/ElRojo.png",
    technologies: ["Java", "CSS", "HTML"],
    liveUrl: null, // ejemplo con demo visible
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">
            Nuestros Proyectos
          </h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Una selección de los proyectos desarrollados durante el curso de
            Desarrollo Web y otros cursos relevantes. Cada proyecto demuestra
            diferentes habilidades técnicas y enfoques de desarrollo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => {
            const hasDemo = !!project.liveUrl && project.liveUrl !== "#"
            const hasCode = !!project.githubUrl && project.githubUrl !== "#"

            return (
              <Card
                key={index}
                className="bg-surface border border-border overflow-hidden hover:shadow-xl hover:scale-[1.02] hover:border-primary transition-all duration-300 ease-in-out flex flex-col"
              >
                <div className="aspect-video relative overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-500" />
                </div>

                <CardHeader>
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {project.description}
                  </p>
                </CardHeader>

                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>

                {(hasDemo || hasCode) && (
                  <CardFooter className="flex gap-3">
                    {hasDemo && (
                      <Button
                        variant="default"
                        size="sm"
                        asChild
                        className={hasCode ? "flex-1" : "w-full"}
                      >
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          Ver Demo
                        </a>
                      </Button>
                    )}
                    {hasCode && (
                      <Button
                        variant="outline"
                        size="sm"
                        asChild
                        className={hasDemo ? "flex-1" : "w-full bg-transparent"}
                      >
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github className="h-4 w-4 mr-2" />
                          Código
                        </a>
                      </Button>
                    )}
                  </CardFooter>
                )}
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
