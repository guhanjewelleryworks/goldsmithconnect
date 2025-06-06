import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle, DollarSign, Users, BarChart } from 'lucide-react';
import Image from 'next/image';

// Inline SVG for a Hammer/Anvil icon representing craftsmanship
const CraftIcon = () => (
 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-primary">
    <path d="M15 12l-4-4 1-1 4 4-1 1z"/>
    <path d="M3 21h18"/>
    <path d="M12 21v-6"/><path d="M7.5 7.5C9 6 10 6 11 7c1-1 2-1 3.5-1.5s2.5.5 2.5 2c0 2-2.5 4.5-5 6.5s-5 4.5-5 6.5c0 1.5 1 2.5 2.5 2.5S13 22 14 21"/>
 </svg>
);


export default function GoldsmithPortalPage() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-b from-secondary to-background">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                 <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground shadow-sm">Goldsmith Portal</div>
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-primary-foreground">
                  Showcase Your Craft, Connect with Clients
                </h1>
                <p className="max-w-[600px] text-foreground md:text-xl">
                  Join Goldsmith Connect to receive custom orders, manage your business, and reach a wider audience of jewelry enthusiasts.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
                  <Link href="/goldsmith-portal/register">
                    Register Your Workshop
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="shadow-md hover:shadow-lg transition-shadow border-accent text-accent hover:bg-accent/10">
                  <Link href="/goldsmith-portal/login">
                    Login to Dashboard
                  </Link>
                </Button>
              </div>
            </div>
             <Image
              src="https://picsum.photos/seed/goldsmith-portal/600/400"
              alt="Goldsmith working"
              width={600}
              height={400}
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="w-full py-12 md:py-24 lg:py-32 bg-background">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-foreground">Why Partner with Us?</h2>
              <p className="max-w-[900px] text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Expand your reach, streamline your orders, and focus on what you do best – creating beautiful jewelry.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:gap-12 lg:grid-cols-3 lg:max-w-none pt-12">
            <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-primary-foreground">Receive Orders</CardTitle>
                 <Users className="h-6 w-6 text-accent" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get notified instantly about new custom order requests from local customers.
                </p>
              </CardContent>
            </Card>
             <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-primary-foreground">Manage Your Business</CardTitle>
                <DollarSign className="h-6 w-6 text-accent" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track order progress, communicate with clients, and manage payments easily through your dedicated dashboard.
                </p>
              </CardContent>
            </Card>
             <Card className="shadow-sm hover:shadow-lg transition-shadow duration-300 ease-in-out transform hover:-translate-y-1 bg-card border-primary/20">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-primary-foreground">Grow Your Reach</CardTitle>
                 <BarChart className="h-6 w-6 text-accent" />
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Showcase your portfolio and gain visibility among customers actively seeking custom jewelry.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

       {/* How to Join Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-primary-foreground">Joining is Simple</h2>
               <p className="max-w-[900px] text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Start connecting with customers in just a few steps.
              </p>
            </div>
          </div>
          <div className="mx-auto grid max-w-3xl items-start gap-8 sm:grid-cols-2 md:gap-12 pt-12">
             <div className="grid gap-1 text-center items-center">
                <div className="flex justify-center items-center mb-2">
                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">1</span>
                  <h3 className="text-xl font-bold text-primary-foreground">Register</h3>
                </div>
                <p className="text-sm text-foreground">
                  Sign up and create your goldsmith profile. Tell us about your workshop and specialties.
                </p>
              </div>
               <div className="grid gap-1 text-center items-center">
                <div className="flex justify-center items-center mb-2">
                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">2</span>
                  <h3 className="text-xl font-bold text-primary-foreground">Verification</h3>
                </div>
                <p className="text-sm text-foreground">
                  We'll verify your details to ensure quality and trust within our network.
                </p>
              </div>
               <div className="grid gap-1 text-center items-center sm:col-span-2">
                <div className="flex justify-center items-center mb-2">
                 <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground mr-2">3</span>
                 <h3 className="text-xl font-bold text-primary-foreground">Start Connecting</h3>
                </div>
                <p className="text-sm text-foreground">
                  Once approved, you'll start receiving order requests and can manage everything from your dashboard.
                </p>
              </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 border-t border-border">
        <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
             <CraftIcon />
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-primary-foreground">
              Ready to Elevate Your Goldsmith Business?
            </h2>
            <p className="mx-auto max-w-[600px] text-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Join our growing network of skilled artisans. Register today and start receiving custom orders.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
             <Button asChild size="lg" className="shadow-md hover:shadow-lg transition-shadow">
              <Link href="/goldsmith-portal/register">
                Register Now
                <CheckCircle className="ml-2 h-5 w-5" />
              </Link>
            </Button>
             <Button asChild variant="link" size="lg" className="text-accent hover:text-accent/80">
               <Link href="/contact?subject=GoldsmithInquiry">
                 Have Questions? Contact Us
               </Link>
             </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
