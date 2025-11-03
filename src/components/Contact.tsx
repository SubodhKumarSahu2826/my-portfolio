
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSending, setIsSending] = useState(false);

  // Initialize EmailJS (only runs once when component mounts)
  // Make sure to call this before sending emails
  emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);

    // Validate form data
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      toast({
        title: 'Error',
        description: 'Please fill in all fields.',
        variant: 'destructive',
      });
      setIsSending(false);
      return;
    }

    try {
      // Send email using EmailJS
      const result = await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,      // Your Service ID
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,     // Your Template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY        // Your Public Key
      );

      console.log('Email sent successfully:', result.text);

      toast({
        title: 'Message Sent!',
        description: "Thanks for reaching out. I'll get back to you soon!",
      });

      // Clear form after successful submission
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('Failed to send email:', error);

      toast({
        title: 'Error',
        description: 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-16 md:py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-gradient">
          Get In Touch
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6 animate-fade-in">
          <div>
            <Input
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isSending}
              className="bg-input border-border focus:border-glow transition-all"
            />
          </div>

          <div>
            <Input
              name="email"
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isSending}
              className="bg-input border-border focus:border-glow transition-all"
            />
          </div>

          <div>
            <Textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isSending}
              rows={6}
              className="bg-input border-border focus:border-glow transition-all resize-none"
            />
          </div>

          <Button
            type="submit"
            disabled={isSending}
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <Send className="mr-2 h-4 w-4" />
            {isSending ? 'Sending...' : 'Send Message'}
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;