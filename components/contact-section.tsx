"use client"

import React, { useState, useEffect } from "react"
import { useForm, ValidationError } from "@formspree/react"
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

const teamSocials = [
  {
    name: "Victor Ochoa",
    github: "https://github.com/Victor-8a",
    facebook: "https://www.facebook.com/victor.ochoa.152720",
  },
  {
    name: "José Barquín",
    github: "https://github.com/Josebarpi",
    facebook: "https://www.facebook.com/joseangel.barquinpinelo",
  },
  {
    name: "Hugo Corado",
    github: "https://github.com/Aiden-01",
    facebook: "https://www.facebook.com/huguito.corado.2025",
  },
  {
    name: "Jaser Castellanos",
    github: "https://github.com/JassCast18",
    likedin: "https://www.linkedin.com/in/jasser-castellanos-9b4b2523b/",
    
  },
]

export function ContactSection() {
  const { toast } = useToast()
  const [formState, handleSubmit] = useForm("xanppgar")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // ✅ Muestra solo el toast al completar envío exitoso
  useEffect(() => {
    if (formState.succeeded) {
      toast({
        title: "¡Mensaje enviado!",
        description: "Gracias por contactarnos. Te responderemos pronto.",
        
      })
      setFormData({ name: "", email: "", subject: "", message: "" })
    }
  }, [formState.succeeded, toast])

  return (
    <section id="contacto" className="py-20 md:py-32 bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Contacto</h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            ¿Tienes alguna pregunta o propuesta? No dudes en contactarnos. Estamos disponibles para colaboraciones y nuevos proyectos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* FORMULARIO CON FORMSPREE */}
          <Card className="bg-background border-border">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">Nombre Completo</label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                    className="bg-surface"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">Correo Electrónico</label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                    className="bg-surface"
                  />
                  <ValidationError prefix="Email" field="email" errors={formState.errors} />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">Asunto</label>
                  <Input
                    id="subject"
                    name="subject"
                    type="text"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                    className="bg-surface"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Mensaje</label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Escribe tu mensaje aquí..."
                    rows={5}
                    className="bg-surface resize-none"
                  />
                  <ValidationError prefix="Message" field="message" errors={formState.errors} />
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={formState.submitting}>
                  {formState.submitting ? "Enviando..." : "Enviar Mensaje"}
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
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <info.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>

                        {info.emails?.map((email, i) => (
                          <p key={i} className="font-medium">
                            <a href={email.href}>{email.value}</a>
                          </p>
                        ))}
                        {info.phones?.map((phone, i) => (
                          <p key={i} className="font-medium">
                            <a href={phone.href}>{phone.value}</a>
                          </p>
                        ))}
                        {info.value && !info.emails && !info.phones && (
                          <p className="font-medium">{info.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* REDES SOCIALES */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-sm text-muted-foreground mb-1">
                  Redes Sociales de los Integrantes
                </h3>
                <div className="space-y-4">
                  {teamSocials.map((member, i) => (
                    <div key={i} className="flex items-center justify-between">
                      <p className="font-medium">{member.name}</p>
                      <div className="flex gap-3">
                        {member.github && (
                          <a href={member.github} target="_blank" rel="noopener noreferrer">
                            <Github className="h-5 w-5 hover:text-primary transition-colors" />
                          </a>
                        )}
                        {member.facebook && (
                          <a href={member.facebook} target="_blank" rel="noopener noreferrer">
                            <Facebook className="h-5 w-5 hover:text-primary transition-colors" />
                          </a>
                        )}
                        {member.likedin && (
                          <a href={member.likedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-5 w-5 hover:text-primary transition-colors" />
                          </a>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* HORARIO */}
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
