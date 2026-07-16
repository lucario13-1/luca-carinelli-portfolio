"use client";

import * as React from "react";
import { Send } from "lucide-react";
import { site } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

/**
 * Static-site-friendly contact form: it doesn't call a backend, it opens
 * the visitor's email client with a pre-filled message addressed to you.
 * If you later add a form backend (Formspree, Resend, etc.), replace the
 * handleSubmit body below with a fetch() call, everything else here can
 * stay the same. See OWNER_GUIDE.md → "Connecting the contact form".
 */
export function ContactForm() {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio contact from ${name || "website visitor"}`);
    const body = encodeURIComponent(`${message}\n\nFrom ${name} (${email})`);
    window.location.href = `${site.links.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Jane Smith"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="jane@company.com"
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me a bit about the role or project..."
        />
      </div>

      <Button type="submit" size="lg" className="gap-2 rounded-full px-6">
        <Send className="size-4" />
        Send message
      </Button>
    </form>
  );
}
