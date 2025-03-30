
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, CheckCircle, ChevronRight, Code, Globe, Shield, Users } from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    integration: false,
    benefits: false,
    cta: false
  });

  useEffect(() => {
    setIsVisible({
      hero: true,
      features: true,
      integration: true,
      benefits: true,
      cta: true
    });
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // You could add more scroll-based animations here
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Hero Section */}
      <section className={`relative min-h-screen flex items-center transition-opacity duration-1000 ${isVisible.hero ? 'opacity-100' : 'opacity-0'}`}>
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-background to-background"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 right-20 w-72 h-72 bg-primary/20 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-64 h-64 bg-primary/10 rounded-full filter blur-3xl"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="inline-block py-1 px-3 mb-6 text-sm font-medium bg-primary/10 text-primary rounded-full animate-fade-in">
                Self-Onboarding Platform
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
                Welcome to <span className="bg-gradient-to-r from-[#00d4a4] to-[#00b9c1] bg-clip-text text-transparent">Hyperguest</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Connect to our powerful API and seamlessly integrate with multiple hospitality systems through a single platform.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button size="lg" className="group">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  View Documentation
                </Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2">
              <div className="relative">
                <div className="bg-secondary/30 backdrop-blur-sm border border-white/10 shadow-xl rounded-lg overflow-hidden p-6 animate-float">
                  <div className="absolute -right-8 -top-8 w-36 h-36 bg-primary/30 rounded-full filter blur-3xl"></div>
                  <div className="absolute -left-8 -bottom-8 w-36 h-36 bg-[#00b9c1]/30 rounded-full filter blur-3xl"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="h-3 w-3 rounded-full bg-red-500 mr-2"></div>
                      <div className="h-3 w-3 rounded-full bg-yellow-500 mr-2"></div>
                      <div className="h-3 w-3 rounded-full bg-green-500"></div>
                      <div className="ml-4 text-xs text-muted-foreground">Hyperguest API Terminal</div>
                    </div>
                    
                    <div className="bg-black/50 p-4 rounded-md font-mono text-sm text-foreground/90 overflow-x-auto">
                      <pre><code className="text-green-400">$ curl -X GET "https://api.hyperguest.com/v1/properties" \</code></pre>
                      <pre><code className="text-green-400">  -H "Authorization: Bearer {API_KEY}" \</code></pre>
                      <pre><code className="text-green-400">  -H "Content-Type: application/json"</code></pre>
                      <pre><code className="text-primary">{`
{
  "data": [
    {
      "id": "prop_123456",
      "name": "Ocean Breeze Resort",
      "type": "hotel",
      "rooms_available": 15,
      "price": {
        "amount": 189.99,
        "currency": "USD"
      }
    },
    ...
  ],
  "meta": {
    "total": 245,
    "page": 1,
    "per_page": 10
  }
}`}</code></pre>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className={`py-24 relative transition-opacity duration-1000 ${isVisible.features ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/5 to-background"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Powerful <span className="bg-gradient-to-r from-[#00d4a4] to-[#00b9c1] bg-clip-text text-transparent">Features</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our platform provides everything you need to integrate hospitality systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Globe className="h-12 w-12 text-primary" />,
                title: "Global Distribution",
                description: "Connect to multiple hospitality systems worldwide through a single integration."
              },
              {
                icon: <Code className="h-12 w-12 text-primary" />,
                title: "Simplified API",
                description: "Easy-to-use API with comprehensive documentation and developer tools."
              },
              {
                icon: <Shield className="h-12 w-12 text-primary" />,
                title: "Secure Platform",
                description: "Enterprise-grade security with OAuth 2.0 and encrypted data transfer."
              },
              {
                icon: <Users className="h-12 w-12 text-primary" />,
                title: "Multi-Channel Support",
                description: "Integrate with multiple channel managers and PMSs simultaneously."
              },
              {
                icon: <CheckCircle className="h-12 w-12 text-primary" />,
                title: "Real-time Updates",
                description: "Get instant notifications about availability and pricing changes."
              },
              {
                icon: <Globe className="h-12 w-12 text-primary" />,
                title: "Unified Bookings",
                description: "Create and manage bookings across systems with a single API call."
              }
            ].map((feature, index) => (
              <Card key={index} className="bg-secondary/30 backdrop-blur-sm border border-white/10 shadow-xl hover:shadow-primary/10 transition-all duration-300 hover:-translate-y-1">
                <CardContent className="p-6">
                  <div className="rounded-full bg-primary/10 p-3 w-16 h-16 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* Integration Process Section */}
      <section className={`py-24 relative transition-opacity duration-1000 ${isVisible.integration ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Seamless <span className="bg-gradient-to-r from-[#00d4a4] to-[#00b9c1] bg-clip-text text-transparent">Self-Onboarding</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get up and running in minutes with our easy integration process
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-16 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary to-transparent hidden md:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  title: "Create an Account",
                  description: "Sign up for Hyperguest and get immediate access to our developer portal.",
                  number: "01"
                },
                {
                  title: "Generate API Keys",
                  description: "Create API keys for both testing and production environments.",
                  number: "02"
                },
                {
                  title: "Explore Documentation",
                  description: "Read our comprehensive documentation with code examples and use cases.",
                  number: "03"
                },
                {
                  title: "Test in Sandbox",
                  description: "Test your integration in our sandbox environment before going live.",
                  number: "04"
                },
                {
                  title: "Go Live",
                  description: "Switch to production API keys and start processing real bookings.",
                  number: "05"
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-8 relative">
                  <div className="md:w-12 md:h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10 shadow-lg shadow-primary/20">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 bg-secondary/30 backdrop-blur-sm border border-white/10 shadow-xl rounded-lg p-6 md:ml-8">
                    <div className="text-xs font-mono text-primary mb-2">{step.number}</div>
                    <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className={`py-24 relative transition-opacity duration-1000 ${isVisible.benefits ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="w-full lg:w-1/2 order-2 lg:order-1">
              <div className="bg-secondary/30 backdrop-blur-sm border border-white/10 shadow-xl rounded-lg p-8 animate-float">
                <h3 className="text-2xl font-bold bg-gradient-to-r from-[#00d4a4] to-[#00b9c1] bg-clip-text text-transparent mb-6">
                  Why Choose Hyperguest
                </h3>
                
                <ul className="space-y-4">
                  {[
                    "Unified API for multiple hospitality systems",
                    "Real-time availability and rates",
                    "Developer-friendly documentation",
                    "Secure and reliable platform",
                    "Dedicated technical support",
                    "Regular API updates and improvements"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mr-3" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="mt-8 w-full sm:w-auto">Learn More</Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Benefits of Our <span className="bg-gradient-to-r from-[#00d4a4] to-[#00b9c1] bg-clip-text text-transparent">Platform</span>
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Hyperguest provides a comprehensive solution for travel technology companies looking to integrate with multiple hospitality systems without the complexity.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "Time Savings",
                      description: "Reduce integration time from months to days"
                    },
                    {
                      title: "Cost Efficiency",
                      description: "Single integration instead of multiple connections"
                    },
                    {
                      title: "Scalability",
                      description: "Easily add new properties and partners"
                    },
                    {
                      title: "Reliability",
                      description: "99.9% uptime with 24/7 monitoring"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-secondary/20 backdrop-blur-sm border border-white/5 rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className={`py-24 relative transition-opacity duration-1000 ${isVisible.cta ? 'opacity-100' : 'opacity-0'}`}>
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="bg-secondary/30 backdrop-blur-sm border border-white/10 shadow-xl rounded-lg p-8 text-center max-w-4xl mx-auto">
            <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/20 rounded-full filter blur-3xl"></div>
            <div className="absolute -left-10 -bottom-10 w-40 h-40 bg-[#00b9c1]/20 rounded-full filter blur-3xl"></div>
            
            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Ready to Get <span className="bg-gradient-to-r from-[#00d4a4] to-[#00b9c1] bg-clip-text text-transparent">Started?</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the growing number of companies using Hyperguest to streamline their hospitality integrations
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="group">
                  Create Account
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
