import { Code2, Rocket, Users } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const teamMembers = [
  {
    name: "Integrante 1",
    role: "Desarrollador Full Stack",
    image: "/professional-developer-portrait.png",
    description: "Especializado en desarrollo frontend y backend con experiencia en React y Node.js.",
  },
  {
    name: "Integrante 2",
    role: "Diseñador UI/UX",
    image: "/professional-designer-portrait.png",
    description: "Enfocado en crear interfaces intuitivas y experiencias de usuario excepcionales.",
  },
  {
    name: "Integrante 3",
    role: "Desarrollador Backend",
    image: "/professional-programmer.png",
    description: "Experto en bases de datos, APIs y arquitectura de sistemas escalables.",
  },
]

const skills = [
  {
    icon: Code2,
    title: "Desarrollo Web",
    description: "Experiencia en HTML, CSS, JavaScript, React, Next.js y tecnologías modernas de desarrollo web.",
  },
  {
    icon: Rocket,
    title: "Despliegue en la Nube",
    description: "Conocimientos en Azure, AWS, Netlify y otras plataformas de hosting y despliegue.",
  },
  {
    icon: Users,
    title: "Trabajo en Equipo",
    description: "Colaboración efectiva en proyectos grupales con metodologías ágiles y control de versiones.",
  },
]

export function AboutSection() {
  return (
    <section id="acerca" className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Acerca de Nosotros</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            Somos estudiantes de la Universidad Mariano Gálvez de Guatemala, campus Petén, cursando Desarrollo Web.
            Nuestro objetivo es crear soluciones web innovadoras y funcionales que demuestren nuestras habilidades
            técnicas y creatividad en el desarrollo de aplicaciones modernas.
          </p>
        </div>

        {/* Skills */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          {skills.map((skill, index) => (
            <Card key={index} className="bg-background border-border hover:border-primary transition-colors">
              <CardContent className="p-6">
                <skill.icon className="h-12 w-12 text-primary mb-4" />
                <h3 className="text-xl font-semibold mb-3">{skill.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Team Members */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold text-center mb-12">Nuestro Equipo</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card
                key={index}
                className="bg-background border-border overflow-hidden hover:border-primary transition-colors"
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h4 className="text-xl font-semibold mb-1">{member.name}</h4>
                  <p className="text-primary text-sm mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">{member.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
