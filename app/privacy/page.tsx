"use client";

import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="py-8 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-muted-foreground">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                1. Introduction
              </h2>
              <p>
                LawDesk Company operates the LawDesk application. This page
                informs you of our policies regarding the collection, use, and
                disclosure of personal data when you use our Service and the
                choices you have associated with that data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                2. Information Collection and Use
              </h2>
              <p className="mb-4">
                We collect several different types of information for various
                purposes to provide and improve our Service to you.
              </p>
              <h3 className="font-semibold text-foreground mb-2">
                Types of Data Collected:
              </h3>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>
                  Personal Data: Name, email address, phone number, address,
                  cookies and usage data
                </li>
                <li>
                  Case Data: Information about your legal cases, documents, and
                  communications
                </li>
                <li>
                  Usage Data: Information about how you interact with our
                  Service
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                3. Use of Data
              </h2>
              <p>LawDesk uses the collected data for various purposes:</p>
              <ul className="list-disc list-inside space-y-2 ml-4 mt-4">
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>
                  To allow you to participate in interactive features of our
                  Service
                </li>
                <li>To provide customer support</li>
                <li>
                  To gather analysis or valuable information so that we can
                  improve our Service
                </li>
                <li>To monitor the usage of our Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                4. Security of Data
              </h2>
              <p>
                The security of your data is important to us but remember that
                no method of transmission over the Internet or method of
                electronic storage is 100% secure. While we strive to use
                commercially acceptable means to protect your Personal Data, we
                cannot guarantee its absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                5. Changes to This Privacy Policy
              </h2>
              <p>
                We may update our Privacy Policy from time to time. We will
                notify you of any changes by posting the new Privacy Policy on
                this page and updating the "Last updated" date at the top of
                this Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">
                6. Contact Us
              </h2>
              <p>
                If you have any questions about this Privacy Policy, please
                contact us at shadrackandare@gmail.com
              </p>
            </section>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
