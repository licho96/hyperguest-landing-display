
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  ArrowRight, 
  CheckCircle, 
  ChevronRight, 
  Building, 
  Globe, 
  Shield, 
  Users, 
  Calendar, 
  RefreshCw,
  Link,
  Key,
  BarChart3,
  Lightbulb
} from "lucide-react";

const Index = () => {
  const [isVisible, setIsVisible] = useState({
    hero: false,
    features: false,
    integration: false,
    benefits: false,
    partners: false,
    cta: false
  });

  useEffect(() => {
    // Initial animations
    setIsVisible({
      hero: true,
      features: true,
      integration: true,
      benefits: true,
      partners: true,
      cta: true
    });
    
    const handleScroll = () => {
      // Add dynamic scroll animations if needed
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
                Hospitality API Platform
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
                Connect your <span className="bg-gradient-to-r from-[#00d4a4] to-[#00b9c1] bg-clip-text text-transparent">hospitality</span> systems
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl">
                Seamlessly integrate with multiple OTAs and channel managers through Hyperguest's unified API platform.
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Button size="lg" className="group">
                  Start Integration
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Explore Documentation
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
                      <div className="ml-4 text-xs text-muted-foreground">Hyperguest ARI API Terminal</div>
                    </div>
                    
                    <div className="bg-black/50 p-4 rounded-md font-mono text-sm text-foreground/90 overflow-x-auto">
                      <pre><code className="text-green-400">$ curl -X GET "https://api.hyperguest.com/v1/properties" \</code></pre>
                      <pre><code className="text-green-400">  -H "Authorization: Bearer YOUR_API_KEY" \</code></pre>
                      <pre><code className="text-green-400">  -H "Content-Type: application/json"</code></pre>
                      <pre><code className="text-primary">{`
{
  "data": [
    {
      "id": "prop_123456",
      "name": "Ocean Breeze Resort",
      "type": "hotel",
      "rooms_available": 15,
      "rate_plans": [
        {
          "id": "rp_789",
          "name": "Standard",
          "price": {
            "amount": 189.99,
            "currency": "USD"
          }
        }
      ],
      "channel_managers": ["cm_456", "cm_789"],
      "last_updated": "2023-05-15T10:23:45Z"
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
      
      {/* Partner Logos Section */}
      <section className={`py-12 relative transition-opacity duration-1000 ${isVisible.partners ? 'opacity-100' : 'opacity-0'}`}>
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <p className="text-muted-foreground">Trusted by leading hospitality technology providers</p>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="h-12 w-32 bg-primary/10 rounded-md flex items-center justify-center text-primary font-semibold">OTA Partner</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="h-12 w-32 bg-primary/10 rounded-md flex items-center justify-center text-primary font-semibold">Channel Mgr</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="h-12 w-32 bg-primary/10 rounded-md flex items-center justify-center text-primary font-semibold">PMS System</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="h-12 w-32 bg-primary/10 rounded-md flex items-center justify-center text-primary font-semibold">Travel Tech</div>
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
              Advanced <span className="bg-gradient-to-r from-[#00d4a4] to-[#00b9c1] bg-clip-text text-transparent">ARI</span> Management
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive API for Availability, Rates, and Inventory across multiple hospitality systems
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Building className="h-12 w-12 text-primary" />,
                title: "Property Management",
                description: "Connect with multiple PMSs and manage property details through a single API endpoint."
              },
              {
                icon: <Calendar className="h-12 w-12 text-primary" />,
                title: "Reservation Control",
                description: "Create, modify, and cancel bookings across channel managers with unified booking references."
              },
              {
                icon: <Globe className="h-12 w-12 text-primary" />,
                title: "Multi-Channel Distribution",
                description: "Distribute inventory to OTAs and booking channels while maintaining rate parity."
              },
              {
                icon: <RefreshCw className="h-12 w-12 text-primary" />,
                title: "Real-time Updates",
                description: "Receive immediate notifications about availability and pricing changes from all channels."
              },
              {
                icon: <BarChart3 className="h-12 w-12 text-primary" />,
                title: "Dynamic Pricing",
                description: "Implement flexible rate strategies with support for multiple rate plans and pricing rules."
              },
              {
                icon: <Link className="h-12 w-12 text-primary" />,
                title: "Seamless Integration",
                description: "Easily connect your existing systems with our unified API and webhook infrastructure."
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
              Effortless <span className="bg-gradient-to-r from-[#00d4a4] to-[#00b9c1] bg-clip-text text-transparent">Self-Onboarding</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Get your integration running in minutes, not months
            </p>
          </div>
          
          <div className="relative">
            <div className="absolute left-16 top-0 h-full w-1 bg-gradient-to-b from-primary via-primary to-transparent hidden md:block"></div>
            
            <div className="space-y-16">
              {[
                {
                  title: "Sign Up",
                  description: "Create your Hyperguest account and access the developer dashboard with comprehensive documentation.",
                  icon: <Key className="h-8 w-8 text-white" />,
                  number: "01"
                },
                {
                  title: "Connect Channels",
                  description: "Link your existing OTAs, channel managers or PMS systems through our intuitive interface.",
                  icon: <Link className="h-8 w-8 text-white" />,
                  number: "02"
                },
                {
                  title: "Test API Integration",
                  description: "Use our sandbox environment to test your implementation with real-world scenarios.",
                  icon: <RefreshCw className="h-8 w-8 text-white" />,
                  number: "03"
                },
                {
                  title: "Deploy to Production",
                  description: "When you're ready, switch to production credentials and start managing your hospitality inventory.",
                  icon: <Globe className="h-8 w-8 text-white" />,
                  number: "04"
                },
                {
                  title: "Scale Your Business",
                  description: "Add more properties, channels, and OTAs as your business grows, all through the same API.",
                  icon: <BarChart3 className="h-8 w-8 text-white" />,
                  number: "05"
                }
              ].map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-start gap-8 relative">
                  <div className="md:w-12 md:h-12 bg-primary text-white rounded-full flex items-center justify-center font-bold text-lg relative z-10 shadow-lg shadow-primary/20">
                    {index + 1}
                  </div>
                  
                  <div className="flex-1 bg-secondary/30 backdrop-blur-sm border border-white/10 shadow-xl rounded-lg p-6 md:ml-8">
                    <div className="text-xs font-mono text-primary mb-2">{step.number}</div>
                    <div className="flex items-center mb-2">
                      <div className="bg-primary/20 rounded-full p-2 mr-3">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-semibold">{step.title}</h3>
                    </div>
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
                  Why Hospitality Partners Choose Hyperguest
                </h3>
                
                <ul className="space-y-4">
                  {[
                    "Single API for OTAs, channel managers, and PMSs",
                    "Bi-directional real-time ARI synchronization",
                    "Complete reservation lifecycle management",
                    "Secure channel connectivity with OAuth 2.0",
                    "Dedicated hospitality integration experts",
                    "99.9% uptime guarantee with 24/7 monitoring"
                  ].map((benefit, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-primary shrink-0 mr-3" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <Button className="mt-8 w-full sm:w-auto">Schedule Demo</Button>
              </div>
            </div>
            
            <div className="w-full lg:w-1/2 order-1 lg:order-2">
              <div className="text-center lg:text-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Benefits for <span className="bg-gradient-to-r from-[#00d4a4] to-[#00b9c1] bg-clip-text text-transparent">Hospitality</span> Technology
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Our platform provides the missing link between fragmented hospitality systems, enabling seamless management of availability, rates, and inventory.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {[
                    {
                      title: "OTA Integration",
                      description: "Connect to leading online travel agencies through a single API endpoint"
                    },
                    {
                      title: "Channel Management",
                      description: "Synchronize inventory across multiple distribution channels"
                    },
                    {
                      title: "PMS Connectivity",
                      description: "Integrate with property management systems for real-time updates"
                    },
                    {
                      title: "Booking Engine Optimization",
                      description: "Power your direct booking engine with real-time availability"
                    }
                  ].map((item, index) => (
                    <div key={index} className="bg-secondary/20 backdrop-blur-sm border border-white/5 rounded-lg p-4">
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
                
                <div className="mt-8 p-6 bg-secondary/10 rounded-lg border border-white/5">
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-2 rounded-full mr-4">
                      <Lightbulb className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Did you know?</h4>
                      <p className="text-sm text-muted-foreground">Hotels using a unified API for channel management report an average of 23% increase in operational efficiency and 15% growth in direct bookings.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background"></div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-[#00d4a4] to-[#00b9c1] bg-clip-text text-transparent">How</span> It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hyperguest connects your systems with a powerful two-way synchronization architecture
            </p>
          </div>
          
          <div className="relative">
            <div className="glass-card rounded-lg overflow-hidden p-8">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-1 flex flex-col space-y-4">
                  <div className="bg-secondary/50 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold mb-2 text-primary">Channel Managers</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>SiteMinder</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>D-EDGE</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>RateGain</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>+ More</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/50 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold mb-2 text-primary">Property Management</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>Cloudbeds</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>Mews</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>Opera</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>+ More</span>
                      </li>
                    </ul>
                  </div>
                </div>
                
                <div className="col-span-1 flex items-center justify-center">
                  <div className="relative">
                    <div className="rounded-full bg-primary/20 p-6 w-48 h-48 flex items-center justify-center animate-pulse">
                      <div className="rounded-full bg-primary/50 p-4">
                        <div className="text-white font-bold text-lg">Hyperguest</div>
                        <div className="text-white/70 text-xs">ARI API Platform</div>
                      </div>
                    </div>
                    <div className="absolute -z-10 inset-0 bg-primary/20 rounded-full blur-2xl"></div>
                    
                    {/* Connector Lines */}
                    <div className="absolute -left-24 top-1/2 w-24 h-1 bg-gradient-to-r from-transparent to-primary"></div>
                    <div className="absolute -right-24 top-1/2 w-24 h-1 bg-gradient-to-l from-transparent to-primary"></div>
                  </div>
                </div>
                
                <div className="col-span-1 flex flex-col space-y-4">
                  <div className="bg-secondary/50 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold mb-2 text-primary">Online Travel Agencies</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>Expedia</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>Booking.com</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>Airbnb</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>+ More</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="bg-secondary/50 rounded-lg p-4 border border-white/10">
                    <h4 className="font-semibold mb-2 text-primary">Your Applications</h4>
                    <ul className="text-sm space-y-2">
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>Booking Engine</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>Mobile Apps</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>Backend Systems</span>
                      </li>
                      <li className="flex items-center">
                        <div className="w-2 h-2 rounded-full bg-primary mr-2"></div>
                        <span>Custom Solutions</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="mt-12 text-center">
                <p className="text-muted-foreground mb-6">Hyperguest provides bidirectional synchronization between all your connected systems</p>
                <Button size="lg">
                  Explore Technical Documentation
                </Button>
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
                Ready to Transform Your <span className="bg-gradient-to-r from-[#00d4a4] to-[#00b9c1] bg-clip-text text-transparent">Hospitality</span> Tech?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join the growing network of hotels, OTAs, and technology providers using Hyperguest to streamline their operations
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                <Button size="lg" className="group">
                  Start Integration
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Schedule Demo
                </Button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="flex flex-col items-center p-4">
                  <div className="text-2xl font-bold text-primary mb-1">30+</div>
                  <div className="text-sm text-muted-foreground">Integrated Channel Managers</div>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className="text-2xl font-bold text-primary mb-1">5,000+</div>
                  <div className="text-sm text-muted-foreground">Connected Properties</div>
                </div>
                <div className="flex flex-col items-center p-4">
                  <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                  <div className="text-sm text-muted-foreground">API Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
