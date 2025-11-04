"use client"

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import SplitAbout from '@/components/sections/about/SplitAbout';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import FaqSplitText from '@/components/sections/faq/FaqSplitText';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Coffee, Heart, Leaf, Home, UtensilsCrossed, Star, MapPin } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="icon-arrow"
      defaultTextAnimation="background-highlight"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          navItems={[
            { name: "Menu", id: "product" },
            { name: "About", id: "about" },
            { name: "Reviews", id: "testimonial" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="Onana Coffee & Brunch"
          button={{
            text: "Order Now",
            href: "https://ordernow.example.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Fresh Coffee & Delicious Brunch"
          description="Start your day right with our artisanal coffee and gourmet brunch dishes made with the finest ingredients"
          tag="Welcome"
          tagIcon={Coffee}
          imageSrc="https://images.pexels.com/photos/23384632/pexels-photo-23384632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Modern coffee shop interior"
          frameStyle="card"
          buttons={[
            { text: "View Menu", href: "product" },
            { text: "Visit Us", href: "contact" }
          ]}
        />
      </div>

      <div id="about" data-section="about">
        <SplitAbout
          title="About Onana Coffee & Brunch"
          description="We're passionate about serving exceptional coffee and creating memorable brunch experiences in a welcoming atmosphere"
          tag="Our Story"
          tagIcon={Heart}
          bulletPoints={[
            {
              title: "Premium Coffee",
              description: "Ethically sourced beans roasted to perfection",
              icon: Coffee
            },
            {
              title: "Fresh Ingredients",
              description: "Local, organic produce in every dish",
              icon: Leaf
            },
            {
              title: "Cozy Atmosphere",
              description: "Perfect space for work, meetings, or relaxation",
              icon: Home
            }
          ]}
          imageSrc="https://images.pexels.com/photos/942801/pexels-photo-942801.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Premium coffee beans"
          imagePosition="right"
          buttons={[
            { text: "Learn More", href: "contact" }
          ]}
        />
      </div>

      <div id="product" data-section="product">
        <ProductCardTwo
          title="Our Menu"
          description="Discover our carefully crafted coffee drinks and delicious brunch options"
          tag="Menu"
          tagIcon={UtensilsCrossed}
          products={[
            {
              id: "1",
              brand: "Signature",
              name: "Artisan Espresso",
              price: "$4.50",
              rating: 5,
              reviewCount: "120+",
              imageSrc: "https://images.pexels.com/photos/6205539/pexels-photo-6205539.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Artisan espresso"
            },
            {
              id: "2",
              brand: "Brunch Special",
              name: "Avocado Toast",
              price: "$12.00",
              rating: 5,
              reviewCount: "85+",
              imageSrc: "https://images.pexels.com/photos/566566/pexels-photo-566566.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Gourmet avocado toast"
            },
            {
              id: "3",
              brand: "House Favorite",
              name: "Cappuccino",
              price: "$5.00",
              rating: 5,
              reviewCount: "200+",
              imageSrc: "https://images.pexels.com/photos/2283599/pexels-photo-2283599.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cappuccino with latte art"
            },
            {
              id: "4",
              brand: "Healthy Choice",
              name: "Breakfast Bowl",
              price: "$14.00",
              rating: 4,
              reviewCount: "95+",
              imageSrc: "https://images.pexels.com/photos/106877/pexels-photo-106877.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Healthy breakfast bowl"
            },
            {
              id: "5",
              brand: "Summer Special",
              name: "Cold Brew",
              price: "$4.00",
              rating: 5,
              reviewCount: "150+",
              imageSrc: "https://images.pexels.com/photos/7282737/pexels-photo-7282737.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Cold brew coffee"
            },
            {
              id: "6",
              brand: "Fresh Baked",
              name: "Butter Croissant",
              price: "$3.50",
              rating: 4,
              reviewCount: "75+",
              imageSrc: "https://images.pexels.com/photos/34517053/pexels-photo-34517053.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Fresh croissant"
            }
          ]}
          carouselMode="buttons"
          buttons={[
            { text: "Full Menu", href: "https://menu.example.com" }
          ]}
        />
      </div>

      <div id="testimonial" data-section="testimonial">
        <TestimonialCardOne
          title="What Our Customers Say"
          description="Don't just take our word for it - hear from our happy customers"
          tag="Reviews"
          tagIcon={Star}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Regular Customer",
              company: "Local Business Owner",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/3796810/pexels-photo-3796810.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Sarah Johnson"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Coffee Enthusiast",
              company: "Tech Professional",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/6826026/pexels-photo-6826026.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Michael Chen"
            },
            {
              id: "3",
              name: "Emma Rodriguez",
              role: "Brunch Lover",
              company: "Marketing Director",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/7315008/pexels-photo-7315008.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "Emma Rodriguez"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Daily Visitor",
              company: "Freelance Designer",
              rating: 5,
              imageSrc: "https://images.pexels.com/photos/4790061/pexels-photo-4790061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
              imageAlt: "David Kim"
            }
          ]}
          carouselMode="buttons"
        />
      </div>

      <div id="faq" data-section="faq">
        <FaqSplitText
          sideTitle="Frequently Asked Questions"
          sideDescription="Everything you need to know about visiting Onana Coffee & Brunch"
          textPosition="left"
          faqs={[
            {
              id: "1",
              title: "What are your opening hours?",
              content: "We're open Monday through Sunday from 7:00 AM to 3:00 PM, perfect for breakfast and brunch."
            },
            {
              id: "2",
              title: "Do you offer vegan and gluten-free options?",
              content: "Yes! We have a variety of vegan and gluten-free options clearly marked on our menu."
            },
            {
              id: "3",
              title: "Can I work on my laptop here?",
              content: "Absolutely! We provide free Wi-Fi and have comfortable seating areas perfect for working or studying."
            },
            {
              id: "4",
              title: "Do you take reservations?",
              content: "We operate on a first-come, first-served basis, but we do accept reservations for groups of 6 or more."
            },
            {
              id: "5",
              title: "Is there parking available?",
              content: "Yes, we have a parking lot behind the building, and there's also street parking available."
            }
          ]}
          animationType="smooth"
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplit
          tag="Visit Us"
          tagIcon={MapPin}
          title="Find Us & Stay Connected"
          description="Join our newsletter for updates on new menu items, special events, and exclusive offers"
          imageSrc="https://images.pexels.com/photos/23384632/pexels-photo-23384632.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          imageAlt="Coffee shop location"
          mediaPosition="right"
          inputPlaceholder="Enter your email"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive our newsletter and can unsubscribe at any time."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterLogoEmphasis
          logoText="Onana Coffee & Brunch"
          columns={[
            {
              items: [
                { label: "Menu", href: "product" },
                { label: "About Us", href: "about" },
                { label: "Location", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Reviews", href: "testimonial" },
                { label: "FAQ", href: "faq" },
                { label: "Contact", href: "contact" }
              ]
            },
            {
              items: [
                { label: "Order Online", href: "https://order.example.com" },
                { label: "Gift Cards", href: "https://giftcards.example.com" },
                { label: "Catering", href: "https://catering.example.com" }
              ]
            }
          ]}
        />
      </div>
    </ThemeProvider>
  );
}