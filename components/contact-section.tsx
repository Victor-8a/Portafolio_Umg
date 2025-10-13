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
      { value: "contacto@miumg.edu.gt", href: "mailto:contacto@miumg.edu.gt" },
      { value: "soporte@miumg.edu.gt", href: "mailto:soporte@miumg.edu.gt" },
      { value: "hcoradoh@miumg.edu.gt", href: "mailto:hcoradoh@miumg.edu.gt" },
      { value: "rcastellanosl@miumg.edu.gt", href: "mailto:rcastellanosl@miumg.edu.gt" },
    ],
  },
  {
    icon: Phone,
    label: "Teléfono",
    value: "+502 1234-5678",
    href: "tel:+50212345678",
  },
  {
    icon: MapPin,
    label: "Ubicación",
    value: "Petén, Guatemala",
    href: "#",
  },
]

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
  { icon: Facebook, label: "Facebook", href: "https://facebook.com" },
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

    // Simulate form submission
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
            ¿Tienes alguna pregunta o propuesta? No dudes en contactarnos. Estamos disponibles para colaboraciones y
            nuevos proyectos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="bg-background border-border">
            <CardContent className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nombre Completo
                  </label>
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
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Correo Electrónico
                  </label>
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
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-2">
                    Asunto
                  </label>
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
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensaje
                  </label>
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
                </div>

                <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                  {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
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

          {/* Si info tiene emails (array) */}
          {info.emails ? (
            info.emails.map((email, i) => (
              <p key={i} className="font-medium group-hover:text-primary transition-colors">
                <a href={email.href}>{email.value}</a>
              </p>
            ))
          ) : (
            // Caso normal: teléfono, ubicación, etc.
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

            {/* Social Links */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Síguenos en Redes Sociales</h3>
                <div className="flex gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-surface hover:bg-primary hover:text-primary-foreground rounded-lg transition-colors"
                      aria-label={social.label}
                    >
                      <social.icon className="h-6 w-6" />
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Additional Info */}
            <Card className="bg-background border-border">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-3">Horario de Atención</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Lunes a Viernes: 8:00 AM - 5:00 PM
                  <br />
                  Sábados: 9:00 AM - 1:00 PM
                  <br />
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
