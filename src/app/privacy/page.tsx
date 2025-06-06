import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PrivacyPage() {
  return (
    <div className="container mx-auto max-w-4xl py-12 px-4 md:px-6">
       <Card className="shadow-lg border-primary/20">
         <CardHeader>
           <CardTitle className="text-3xl font-bold text-primary-foreground mb-4">Privacy Policy</CardTitle>
            <p className="text-sm text-muted-foreground">Last Updated: {new Date().toLocaleDateString()}</p>
         </CardHeader>
        <CardContent className="prose prose-stone dark:prose-invert max-w-none text-foreground space-y-4">

            <p>Your privacy is important to us. It is Goldsmith Connect's policy to respect your privacy regarding any information we may collect from you across our website, [Your Website URL], and other sites we own and operate.</p>

            <h2 className="text-xl font-semibold text-primary-foreground">Information We Collect</h2>
            <p>We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.</p>
            <p>Information we may collect includes:</p>
            <ul>
                <li>Contact information (such as name, email address, phone number)</li>
                <li>Location data (if you grant permission)</li>
                <li>Account credentials</li>
                <li>Order details and specifications</li>
                <li>Communication records between users and goldsmiths</li>
                <li>Usage data and analytics</li>
            </ul>

             <h2 className="text-xl font-semibold text-primary-foreground">How We Use Your Information</h2>
             <p>We use the information we collect in various ways, including to:</p>
            <ul>
                 <li>Provide, operate, and maintain our website</li>
                <li>Improve, personalize, and expand our website</li>
                <li>Understand and analyze how you use our website</li>
                <li>Develop new products, services, features, and functionality</li>
                 <li>Communicate with you, either directly or through one of our partners, including for customer service, to provide you with updates and other information relating to the website, and for marketing and promotional purposes</li>
                <li>Process your transactions and manage orders</li>
                <li>Find and prevent fraud</li>
            </ul>


            <h2 className="text-xl font-semibold text-primary-foreground">Log Files</h2>
            <p>Goldsmith Connect follows a standard procedure of using log files. These files log visitors when they visit websites. [...]</p>

            <h2 className="text-xl font-semibold text-primary-foreground">Cookies and Web Beacons</h2>
            <p>Like any other website, Goldsmith Connect uses 'cookies'. [...]</p>

            <h2 className="text-xl font-semibold text-primary-foreground">Third Party Privacy Policies</h2>
            <p>Goldsmith Connect's Privacy Policy does not apply to other advertisers or websites. [...]</p>

            <h2 className="text-xl font-semibold text-primary-foreground">Your Data Protection Rights</h2>
            <p>We would like to make sure you are fully aware of all of your data protection rights. Every user is entitled to the following:</p>
             <ul>
                <li>The right to access – You have the right to request copies of your personal data.</li>
                <li>The right to rectification – You have the right to request that we correct any information you believe is inaccurate. [...]</li>
                {/* Add other rights: erasure, restrict processing, object to processing, data portability */}
            </ul>

            <p>If you make a request, we have one month to respond to you. If you would like to exercise any of these rights, please contact us.</p>

             <h2 className="text-xl font-semibold text-primary-foreground">Children's Information</h2>
             <p>Another part of our priority is adding protection for children while using the internet. [...]</p>

             <p><strong>Please read the full Privacy Policy carefully.</strong></p>
        </CardContent>
      </Card>
    </div>
  );
}
