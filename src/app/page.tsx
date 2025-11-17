"use client"

import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import HeroBillboardCarousel from '@/components/sections/hero/HeroBillboardCarousel';
import AboutFeature from '@/components/sections/about/AboutFeature';
import FeatureCardFour from '@/components/sections/feature/FeatureCardFour';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import FaqDouble from '@/components/sections/faq/FaqDouble';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { AlertTriangle, Heart, Brain, Zap, AlertCircle, Sparkles, Wind, Moon, DollarSign, Shield, Users, HelpCircle } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-bubble"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="small"
      background="none"
      cardStyle="gradient-bordered"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="glass"
      showBlurBottom={false}
    >
      {/* Navigation */}
      <div id="nav" data-section="nav">
        <NavbarStyleApple
          navItems={[
            { name: "Health Facts", id: "about" },
            { name: "Why Quit", id: "features" },
            { name: "Success Stories", id: "testimonials" },
            { name: "Help Sara", id: "contact" },
            { name: "FAQ", id: "faq" }
          ]}
          brandName="Quit Vaping Sara"
        />
      </div>

      {/* Hero Section */}
      <div id="hero" data-section="hero">
        <HeroBillboardCarousel
          title="Sara, It's Time to Quit Vaping"
          description="Your health, your future, your choice. Discover the shocking truth about vaping and take the first step towards freedom."
          tag="Health Warning"
          tagIcon={AlertTriangle}
          mediaItems={[
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763407592833-mq35yjh3.jpg",
              imageAlt: "Health impact of vaping"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763407593587-mup376oo.jpg",
              imageAlt: "Lung damage from vaping"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763407594327-ebzw76dj.jpg",
              imageAlt: "Healthy lungs recovery"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763407594985-7dke5cl7.jpg",
              imageAlt: "Success story"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763407595794-7x1urn39.jpg",
              imageAlt: "Health recovery journey"
            },
            {
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763407599522-9xnc7pav.jpg",
              imageAlt: "Support and help"
            }
          ]}
          buttons={[
            { text: "See the Facts", href: "about" },
            { text: "Get Help Now", href: "contact" }
          ]}
        />
      </div>

      {/* About Health Risks Section */}
      <div id="about" data-section="about">
        <AboutFeature
          title="Sara, vaping is destroying your body in ways you can't see. These health risks are real, immediate, and getting worse every day you continue."
          features={[
            {
              icon: Heart,
              title: "Heart Disease Risk",
              description: "Vaping increases your risk of heart attack and stroke by damaging blood vessels and raising blood pressure."
            },
            {
              icon: Brain,
              title: "Brain Development Damage",
              description: "Nicotine permanently alters brain development, affecting memory, concentration, and learning ability."
            },
            {
              icon: Zap,
              title: "Lung Function Decline",
              description: "Vaping causes severe lung inflammation, scarring, and reduces your ability to breathe normally."
            },
            {
              icon: AlertCircle,
              title: "Unknown Chemical Exposure",
              description: "You're inhaling thousands of unknown chemicals daily, many proven to cause cancer and organ damage."
            }
          ]}
        />
      </div>

      {/* Benefits of Quitting Section */}
      <div id="features" data-section="features">
        <FeatureCardFour
          title="What You'll Gain By Quitting"
          description="Every day without vaping is a victory for your health and future"
          tag="Benefits"
          tagIcon={Sparkles}
          textboxLayout="default"
          animationType="slide-up"
          features={[
            {
              title: "Improved Breathing",
              description: "Within 48 hours, your lung function begins to improve and you'll breathe easier than you have in months",
              icon: Wind
            },
            {
              title: "Better Sleep",
              description: "Nicotine withdrawal ends and your natural sleep patterns return, giving you deeper, more restful nights",
              icon: Moon
            },
            {
              title: "Save Money",
              description: "The average vaper spends $1,500+ per year. Imagine what you could do with that money instead",
              icon: DollarSign
            },
            {
              title: "Regain Control",
              description: "Break free from the constant craving and anxiety. Take back control of your thoughts and actions",
              icon: Shield
            }
          ]}
        />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="Real People Who Quit Successfully"
          description="These are real stories from people who broke free from vaping addiction"
          tag="Success Stories"
          tagIcon={Users}
          textboxLayout="default"
          animationType="slide-up"
          testimonials={[
            {
              id: "1",
              name: "Sarah M.",
              role: "Former 3-year vaper",
              testimonial: "I thought vaping was harmless until I couldn't climb stairs without gasping. Quitting saved my life. Now I run marathons.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763407596632-s70lsdow.jpg",
              imageAlt: "Sarah's success story"
            },
            {
              id: "2",
              name: "Mike R.",
              role: "Quit after 5 years",
              testimonial: "The anxiety was killing me. I was vaping every 10 minutes. Three months clean and I finally feel like myself again.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763407597337-gel3o1zo.jpg",
              imageAlt: "Mike's recovery journey"
            },
            {
              id: "3",
              name: "Jessica L.",
              role: "Student, age 22",
              testimonial: "My grades improved dramatically after quitting. I can actually focus now instead of counting minutes until my next hit.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763407598027-68136v0r.jpg",
              imageAlt: "Jessica's academic improvement"
            },
            {
              id: "4",
              name: "Alex T.",
              role: "Healthcare worker",
              testimonial: "Seeing lung damage at work made me realize I was doing this to myself. Best decision I ever made was throwing my vape away.",
              imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_32T51L3BHE8qqE8rXXWBwMZaYtk/uploaded-1763407598742-cqm8zhet.jpg",
              imageAlt: "Alex's health awakening"
            }
          ]}
        />
      </div>

      {/* FAQ Section */}
      <div id="faq" data-section="faq">
        <FaqDouble
          title="Common Questions About Quitting"
          description="Get answers to the questions holding you back from quitting"
          tag="Help"
          tagIcon={HelpCircle}
          textboxLayout="default"
          animationType="smooth"
          faqs={[
            {
              id: "1",
              title: "How long does withdrawal last?",
              content: "Physical withdrawal peaks in 3-5 days and mostly ends within 2-4 weeks. The hardest part is short-term, but the benefits last forever."
            },
            {
              id: "2",
              title: "Will I gain weight if I quit?",
              content: "Some people gain 3-5 pounds initially, but this is temporary. Your metabolism returns to normal, and you'll have more energy to exercise."
            },
            {
              id: "3",
              title: "What if I've tried quitting before?",
              content: "Most successful quitters tried multiple times. Each attempt teaches you something. Don't give up - you're closer to success than you think."
            },
            {
              id: "4",
              title: "How do I deal with cravings?",
              content: "Cravings last 3-5 minutes. Use the 4-7-8 breathing technique, drink water, or call a friend. They get weaker each time you resist."
            },
            {
              id: "5",
              title: "Is vaping really worse than cigarettes?",
              content: "Both are harmful, but vaping delivers higher nicotine concentrations and unknown chemicals. The goal should be eliminating all nicotine addiction."
            },
            {
              id: "6",
              title: "What support resources are available?",
              content: "Free quitlines (1-800-QUIT-NOW), apps like QuitNow, support groups, and your doctor can all help. You don't have to do this alone."
            }
          ]}
        />
      </div>

      {/* Contact Section */}
      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Take Action"
          tagIcon={Heart}
          title="Sara, Your Life is Worth More Than Any Addiction"
          description="Get personalized support, resources, and encouragement sent directly to your inbox. Take the first step toward freedom today."
          inputPlaceholder="Enter your email for help"
          buttonText="Get Help Now"
          termsText="We respect your privacy and will only send helpful resources to support your quit journey."
        />
      </div>

      {/* Footer Section */}
      <div id="footer" data-section="footer">
        <FooterBase
          logoText="Quit Vaping Sara"
          copyrightText="© 2025 | Your Health Matters"
          columns={[
            {
              title: "Resources",
              items: [
                { label: "Health Facts", href: "about" },
                { label: "Quit Benefits", href: "features" },
                { label: "Success Stories", href: "testimonials" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Get Help", href: "contact" },
                { label: "FAQ", href: "faq" },
                { label: "Crisis Hotline", href: "tel:988" }
              ]
            },
            {
              title: "Emergency",
              items: [
                { label: "Poison Control", href: "tel:1-800-222-1222" },
                { label: "Mental Health", href: "tel:988" },
                { label: "Medical Emergency", href: "tel:911" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}