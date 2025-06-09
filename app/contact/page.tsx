"use client";
import React, { useState, useRef } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Heart, 
  Send, 
  AlertCircle,
  Users,
  Building,
  MessageCircle,
  CheckCircle,
  Shield
} from 'lucide-react';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';

// EmailJS configuration
const EMAILJS_CONFIG = {
  serviceId: 'your_service_id',
  templateId: 'your_template_id',
  publicKey: 'your_public_key',
  // Add your EmailJS credentials here
};

// Hero Component
const ContactHero = () => {
  return (
    <section className="relative py-20 bg-gradient-to-r from-green-600 via-black to-red-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black/30"></div>
      
      {/* Kenyan flag inspired decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 border-2 border-white/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 bg-red-500/20 rounded-full animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-green-500/20 rounded-full animate-pulse delay-500"></div>
      
      <div className="relative container mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-3 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full mb-8">
          <Heart className="w-5 h-5 text-red-300" />
          <span className="text-white/90 font-semibold">Harambee Spirit</span>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">
          Contact <span className="text-green-400">Us</span>
        </h1>
        <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
          Together we build Kenya's blood donation network. Reach out for donations, partnerships, or any questions about our mission.
        </p>
      </div>
    </section>
  );
};

// Emergency Banner Component
const EmergencyBanner = () => {
  return (
    <section className="bg-gradient-to-r from-red-600 to-red-700 py-4 border-t-4 border-green-500">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-center gap-4 text-white">
          <AlertCircle className="w-6 h-6 animate-pulse text-yellow-300" />
          <span className="font-semibold">Emergency Blood Needed?</span>
          <a 
            href="tel:+254700123456" 
            className="bg-white text-red-600 px-4 py-2 rounded-full font-bold hover:bg-green-50 transition-colors border-2 border-green-400"
          >
            Call Now: +254 720 572 793
          </a>
        </div>
      </div>
    </section>
  );
};

// Contact Info Card Component
interface ContactInfo {
  icon: React.ElementType;
  title: string;
  primary: string;
  secondary: string;
  description: string;
  index: number;
}

const ContactInfoCard = ({ info }: { info: ContactInfo }) => {
interface ColorClasses {
    bg: string;
    icon: string;
    hover: string;
}

const getColorClasses = (index: number): ColorClasses => {
    const colors: ColorClasses[] = [
        { bg: 'bg-green-100', icon: 'text-green-600', hover: 'group-hover:bg-green-600' },
        { bg: 'bg-red-100', icon: 'text-red-600', hover: 'group-hover:bg-red-600' },
        { bg: 'bg-black/10', icon: 'text-black', hover: 'group-hover:bg-black' },
        { bg: 'bg-red-100', icon: 'text-red-600', hover: 'group-hover:bg-red-600' }
    ];
    return colors[index % colors.length];
};

  const colorClass = getColorClasses(info.index);

  return (
    <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-green-500 hover:shadow-xl transition-all duration-300 group">
      <div className="flex items-start gap-4">
        <div className={`flex-shrink-0 w-12 h-12 ${colorClass.bg} rounded-full flex items-center justify-center ${colorClass.hover} group-hover:text-white transition-colors`}>
          <info.icon className={`w-6 h-6 ${colorClass.icon} group-hover:text-white`} />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 mb-2">{info.title}</h3>
          <div className="text-green-700 font-medium mb-1">{info.primary}</div>
          <div className="text-gray-600 mb-2">{info.secondary}</div>
          <div className="text-sm text-gray-500">{info.description}</div>
        </div>
      </div>
    </div>
  );
};
// Contact Type Selection Component
interface ContactTypeSelectorProps {
  selectedType: string;
  onTypeChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContactTypeSelector = ({ selectedType, onTypeChange }: ContactTypeSelectorProps) => {
  interface ContactType {
    value: string;
    label: string;
    icon: React.ElementType;
    color: 'green' | 'red' | 'black';
  }

  const contactTypes: ContactType[] = [
    { value: 'general', label: 'General Inquiry', icon: MessageCircle, color: 'green' },
    { value: 'donation', label: 'Blood Donation', icon: Heart, color: 'red' },
    { value: 'partnership', label: 'Partnership', icon: Users, color: 'black' },
    { value: 'emergency', label: 'Emergency', icon: AlertCircle, color: 'red' },
    { value: 'corporate', label: 'Corporate', icon: Building, color: 'green' }
  ];

interface ColorClasses {
    [key: string]: string;
}

interface ColorMap {
    green: string;
    red: string;
    black: string;
}

const getColorClasses = (color: 'green' | 'red' | 'black', isSelected: boolean): string => {
    const colorMap: ColorMap = {
        green: isSelected 
            ? 'border-green-600 bg-green-50 text-green-700' 
            : 'border-gray-200 bg-white text-gray-600 hover:border-green-300',
        red: isSelected 
            ? 'border-red-600 bg-red-50 text-red-700' 
            : 'border-gray-200 bg-white text-gray-600 hover:border-red-300',
        black: isSelected 
            ? 'border-black bg-gray-50 text-black' 
            : 'border-gray-200 bg-white text-gray-600 hover:border-gray-400'
    };
    return colorMap[color];
};

  return (
    <div>
      <label className="block text-sm font-semibold text-gray-700 mb-3">
        What can we help you with?
      </label>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {contactTypes.map((type) => (
          <label key={type.value} className="relative cursor-pointer">
            <input
              type="radio"
              name="contactType"
              value={type.value}
              checked={selectedType === type.value}
              onChange={onTypeChange}
              className="sr-only"
            />
            <div className={`p-3 rounded-lg border-2 transition-all duration-200 text-center ${
              getColorClasses(type.color, selectedType === type.value)
            }`}>
              <type.icon className="w-5 h-5 mx-auto mb-1" />
              <div className="text-sm font-medium">{type.label}</div>
            </div>
          </label>
        ))}
      </div>
    </div>
  );
};

// Form Input Component
interface FormInputProps {
  label: string;
  type?: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  required?: boolean;
  placeholder?: string;
  rows?: number;
}

const FormInput = ({ label, type = 'text', name, value, onChange, required = false, placeholder, rows }: FormInputProps) => {
  const InputComponent = type === 'textarea' ? 'textarea' : 'input';
  
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-semibold text-gray-700 mb-2">
        {label} {required && <span className="text-red-600">*</span>}
      </label>
      <InputComponent
        type={type !== 'textarea' ? type : undefined}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={rows}
        className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-colors"
        placeholder={placeholder}
      />
    </div>
  );
};

// Success Message Component
const SuccessMessage = () => {
  return (
    <div className="text-center py-12">
      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4 border-4 border-green-500">
        <CheckCircle className="w-8 h-8 text-green-600" />
      </div>
      <h3 className="text-2xl font-bold text-gray-900 mb-2">Asante Sana!</h3>
      <p className="text-gray-600">Your message has been sent. We'll get back to you as soon as possible.</p>
    </div>
  );
};

const MapSection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-red-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Find Us</h2>
          <p className="text-xl text-gray-600 mb-8">Visit our main office and donation center in Nairobi</p>
          
          {/* Location Summary Cards */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-green-600">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-green-600 rounded-full mr-3"></div>
                <h3 className="text-lg font-bold text-green-800">MAIN OFFICE</h3>
              </div>
              <p className="text-gray-700 font-semibold">Riara Center, Office B7</p>
              <p className="text-gray-600">Riara Road, Nairobi</p>
              <p className="text-sm text-gray-500 mt-2">Administrative headquarters</p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg border-l-4 border-red-600">
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-red-600 rounded-full mr-3"></div>
                <h3 className="text-lg font-bold text-red-800">MAIN DONATION CENTER</h3>
              </div>
              <p className="text-gray-700 font-semibold">Kenya National Blood Transfusion Services</p>
              <p className="text-gray-600">Next to Kenyatta National Hospital</p>
              <p className="text-sm text-gray-500 mt-2">Primary blood donation facility</p>
            </div>
          </div>
        </div>
        
        {/* Interactive Maps */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Main Office Map */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                <div>
                  <h3 className="text-lg font-bold">Main Office</h3>
                  <p className="text-green-100 text-sm">Riara Center, Office B7 - Riara Road</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7952464774453!2d36.75703047350064!3d-1.2975492356354632!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1a6b77b230bf%3A0x362d342aa8a77c3!2sRiara%20Center!5e0!3m2!1sen!2ske!4v1749047991040!5m2!1sen!2ske" 
                referrerPolicy="no-referrer-when-downgrade"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Riara Center Main Office Location"
              ></iframe>
              <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                📍 Main Office
              </div>
            </div>
            <div className="p-4 bg-gray-50">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                </svg>
                Administrative services and inquiries
              </div>
            </div>
          </div>

          {/* Main Donation Center Map */}
          <div className="bg-white rounded-2xl overflow-hidden shadow-xl border border-gray-200">
            <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-white rounded-full mr-3"></div>
                <div>
                  <h3 className="text-lg font-bold">Main Donation Center</h3>
                  <p className="text-red-100 text-sm">Kenya National Blood Transfusion Services</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7915959379047!2d36.8091013735008!3d-1.2998622356380434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11efb4e7c7e1%3A0xe9614cbc83d02b91!2sKenya%20National%20Blood%20Transfusion%20Services%20(Nbts)!5e0!3m2!1sen!2ske!4v1749048461278!5m2!1sen!2ske" 
                width="100%" 
                height="350" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Kenya National Blood Transfusion Services Location"
              ></iframe>
              <div className="absolute top-4 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-semibold shadow-lg">
                🩸 Donation Center
              </div>
            </div>
            <div className="p-4 bg-gray-50">
              <div className="flex items-center text-sm text-gray-600">
                <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                </svg>
                Primary blood donation facility
              </div>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-lg max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Need Directions?</h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-green-800 mb-2">📞 Main Office</h4>
                <p className="text-gray-600 text-sm">For administrative inquiries</p>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-2">🩸 Donation Center</h4>
                <p className="text-gray-600 text-sm">For blood donation appointments</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


// Main Contact Form Component
const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactType: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef<HTMLDivElement>(null);

interface FormDataChangeEvent {
    target: {
        name: string;
        value: string;
    }
}

const handleInputChange = (e: FormDataChangeEvent): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
        ...prev,
        [name]: value
    }));
};

  const sendEmail = async () => {
    try {
      // EmailJS integration would go here
      // const result = await emailjs.sendForm(
      //   EMAILJS_CONFIG.serviceId,
      //   EMAILJS_CONFIG.templateId,
      //   formRef.current,
      //   EMAILJS_CONFIG.publicKey
      // );
      
      // For demo purposes, we'll simulate the API call
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log('Email sent with data:', formData);
          resolve({ status: 200 });
        }, 2000);
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      throw error;
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    try {
      await sendEmail();
      setSubmitted(true);
      
      // Reset form after success
      setTimeout(() => {
        setSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          contactType: 'general'
        });
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border-l-4 border-green-500">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Send us a Message</h2>
      
      {submitted ? (
        <SuccessMessage />
      ) : (
        <div ref={formRef} className="space-y-6">
          <ContactTypeSelector 
            selectedType={formData.contactType}
            onTypeChange={handleInputChange}
          />

          <div className="grid md:grid-cols-2 gap-6">
            <FormInput
              label="Full Name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your full name"
            />
            <FormInput
              label="Email Address"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="your.email@example.com"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <FormInput
              label="Phone Number"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="+254 700 123 456"
            />
            <FormInput
              label="Subject"
              name="subject"
              value={formData.subject}
              onChange={handleInputChange}
              required
              placeholder="Brief subject of your message"
            />
          </div>

          <FormInput
            label="Message"
            type="textarea"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={6}
            placeholder="Tell us how we can help you or your organization..."
          />

          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="w-full bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 disabled:from-gray-400 disabled:to-gray-400 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-300 transform hover:scale-[1.02] disabled:scale-100 shadow-lg hover:shadow-green-500/30 flex items-center justify-center gap-3 border-2 border-white"
          >
            {isSubmitting ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Send Message
              </>
            )}
          </button>
        </div>
      )}
    </div>
  );
};

// Main Contact Page Component
export default function ContactPage() {
  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      primary: "+254 720 572 793",
      secondary: "+254 759 299 270",
      description: "Call us anytime for urgent blood donation needs",
      index: 0
    },
    {
      icon: Mail,
      title: "Email",
      primary: "derrick@iamkenyanbyblood.org",
      secondary: "lamech@iamkenyanbyblood.org",
      description: "Send us your questions or partnership inquiries",
      index: 1
    },
    {
      icon: Clock,
      title: "Hours",
      primary: "Mon - Fri: 8:00 AM - 6:00 PM",
      secondary: "Sat - Sun: 9:00 AM - 4:00 PM",
      description: "Emergency services available 24/7",
      index: 3
    }
  ];

  return (
    <>
        <Header />
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
        <ContactHero />
        <EmergencyBanner />
        
        {/* Main Content */}
        <section className="py-20">
            <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-3 gap-12">
                
                {/* Contact Information */}
                <div className="lg:col-span-1 space-y-8">
                <div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                    Harambee! Every second counts when it comes to saving lives. Contact us through any of these channels for immediate assistance or general inquiries.
                    </p>
                </div>

                <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                    <ContactInfoCard key={index} info={info} />
                    ))}
                </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-2">
                <ContactForm />
                </div>
            </div>
            </div>
        </section>

        <MapSection />
        </div>
        <Footer />
    </>
  );
}