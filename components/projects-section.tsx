import { ExternalLink, Github } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const projects = [
  {
    title: "MisPleis",
    description:
      "Aplicación web para gestión y descubrimiento de películas. Permite a los usuarios explorar, buscar y guardar sus películas favoritas con una interfaz intuitiva y moderna.",
    image: "/movie-streaming-app-interface.png",
    technologies: ["React", "Next.js", "Tailwind CSS", "API REST"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "School-UMG",
    description:
      "Sistema de gestión escolar completo que incluye administración de estudiantes, profesores, cursos y calificaciones. Diseñado específicamente para instituciones educativas.",
    image: "/school-management-dashboard.png",
    technologies: ["Next.js", "TypeScript", "SQL Server", "Azure"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Portafolio Personal",
    description:
      "Sitio web de portafolio profesional que muestra proyectos, habilidades y experiencia. Incluye diseño responsive, animaciones suaves y formulario de contacto funcional.",
    image: "/modern-portfolio-website.png",
    technologies: ["Next.js", "React", "Tailwind CSS", "Vercel"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "E-Commerce Platform",
    description:
      "Plataforma de comercio electrónico con carrito de compras, pasarela de pagos y panel de administración. Proyecto desarrollado en curso de Programación Web.",
    image: "/ecommerce-website-interface.png",
    technologies: ["React", "Node.js", "MongoDB", "Stripe"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Task Manager App",
    description:
      "Aplicación de gestión de tareas con funcionalidades de colaboración en equipo, asignación de tareas, seguimiento de progreso y notificaciones en tiempo real.",
    image: "/task-management-app.png",
    technologies: ["Vue.js", "Firebase", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Weather Dashboard",
    description:
      "Dashboard meteorológico que muestra pronósticos del tiempo en tiempo real, gráficos de temperatura y alertas climáticas para múltiples ubicaciones.",
    image: "/weather-dashboard-interface.png",
    technologies: ["React", "OpenWeather API", "Chart.js"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-20 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Nuestros Proyectos</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Una selección de los proyectos desarrollados durante el curso de Desarrollo Web y otros cursos relevantes.
            Cada proyecto demuestra diferentes habilidades técnicas y enfoques de desarrollo.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-surface border-border overflow-hidden hover:border-primary transition-all duration-300 flex flex-col"
            >
              <div className="aspect-video overflow-hidden">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{project.description}</p>
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
              <CardFooter className="flex gap-3">
                <Button variant="default" size="sm" asChild className="flex-1">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Ver Demo
                  </a>
                </Button>
                <Button variant="outline" size="sm" asChild className="flex-1 bg-transparent">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Github className="h-4 w-4 mr-2" />
                    Código
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
