"use client"

import type React from "react"
import { useState } from "react"
import { Mail, Phone, MapPin, Github, Linkedin, Facebook } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

const contactInfo = [
  {
    icon: Mail,
    label: "Emails",
    emails: [
      { value: "vochoaj@miumg.edu.gt", href: "mailto:vochoaj@miumg.edu.gt" },
      { value: "jbarquinp@miumg.edu.gt", href: "mailto:jbarquinp@miumg.edu.gt" },
      { value: "hcoradoh@miumg.edu.gt", href: "mailto:hcoradoh@miumg.edu.gt" },
      { value: "rcastellanosl@miumg.edu.gt", href: "mailto:rcastellanosl@miumg.edu.gt" },
    ],
  },
  {
    icon: Phone,
    label: "Teléfonos",
    phones: [
      { value: "+502 4486-5105", href: "tel:+50244865105" },
      { value: "+502 3218-0321", href: "tel:+50232180321" },
      { value: "+502 4975-4449", href: "tel:+50249754449" },
      { value: "+502 3074-9784", href: "tel:+50230749784" },
    ],
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Petén, Guatemala",
    href: "#",
  },
]

// 🔹 Redes sociales por integrante (orden igual al de los emails y teléfonos)
const teamSocials = [
  {
    name: "Victor Ochoa",
    github: "https://github.com/vochoaj",
    linkedin: "https://linkedin.com/in/vochoaj",
  },
  {
    name: "José Barquín",
    github: "https://github.com/jbarquinp",
    linkedin: "https://linkedin.com/in/jbarquinp",
  },
  {
    name: "Hugo Corado",
    github: "https://github.com/hcoradoh",
    linkedin: "https://linkedin.com/in/hcoradoh",
  },
  {
    name: "Jaser Castellanos",
    github: "https://github.com/JassCast18",
    linkedin: "https://www.linkedin.com/in/jaser-castellanos-89733a276",

  },
]

export function ContactSection() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    toast({
      title: "¡Mensaje enviado!",
      description: "Gracias por contactarnos. Te responderemos pronto.",
    })
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contacto" className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-balance">Contacto</h2>
          <p className="text-lg text-muted-foreground text-pretty leading-relaxed">
            ¿Tienes alguna pregunta o propuesta? No dudes en contactarnos. Estamos disponibles para colaboraciones y nuevos proyectos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* FORMULARIO */}
          <Card className="bg-background border-border">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre Completo</label>
                  <Input id="name" name="name" type="text" required value={formData.name} onChange={handleChange} placeholder="Tu nombre" className="bg-surface" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Correo Electrónico</label>
                  <Input id="email" name="email" type="email" required value={formData.email} onChange={handleChange} placeholder="tu@email.com" className="bg-surface" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Asunto</label>
                  <Input id="subject" name="subject" type="text" required value={formData.subject} onChange={handleChange} placeholder="¿En qué podemos ayudarte?" className="bg-surface" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                  <Textarea id="message" name="message" required value={formData.message} onChange={handleChange} placeholder="Escribe tu mensaje aquí..." rows={5} className="bg-surface resize-none" />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* INFORMACIÓN DE CONTACTO */}
          <div className="space-y-6">
            <div className="space-y-4">
              {contactInfo.map((info, index) => (
                <Card key={index} className="bg-background border-border hover:border-primary transition-colors">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>

                        {/* Emails */}
                        {info.emails && info.emails.map((email, i) => (
                          <p key={i} className="font-medium group-hover:text-primary transition-colors">
                            <a href={email.href}>{email.value}</a>
                          </p>
                        ))}

                        {/* Teléfonos */}
                        {info.phones && info.phones.map((phone, i) => (
                          <p key={i} className="font-medium group-hover:text-primary transition-colors">
                            <a href={phone.href}>{phone.value}</a>
                          </p>
                        ))}

                        {/* Valor único (como ubicación) */}
                        {info.value && !info.emails && !info.phones && (
                          <p className="font-medium group-hover:text-primary transition-colors">
                            {info.href ? <a href={info.href}>{info.value}</a> : info.value}
                          </p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* 🔹 Redes Sociales por Integrante */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-sm text-muted-foreground mb-1">Redes Sociales de los Integrantes</h3>
                <div className="space-y-4">
                  {teamSocials.map((member, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <p className="font-medium">{member.name}</p>
                      <div className="flex gap-3">
                        <a href={member.github} target="_blank" rel="noopener noreferrer"><Github className="h-5 w-5 hover:text-primary transition-colors" /></a>
                        <a href={member.linkedin} target="_blank" rel="noopener noreferrer"><Linkedin className="h-5 w-5 hover:text-primary transition-colors" /></a>
                        
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Horario */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Horario de Atención</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Lunes a Viernes: 8:00 AM - 5:00 PM<br />
                  Sábados: 9:00 AM - 1:00 PM<br />
                  Domingos: Cerrado
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
