export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-32 pb-16">
      <div className="max-w-5xl mx-auto bg-white text-black rounded-[32px] p-8 md:p-14 shadow-2xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            Terms of Service
          </h1>

          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Last Updated: May 20, 2026
          </p>
        </div>

        <div className="space-y-12 text-[15px] md:text-[16px] leading-8 text-neutral-800">
          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              1. Acceptance of Terms
            </h2>

            <p>
              By accessing or using the services provided by Personal
              Web Studio (“we”, “our”, or “us”), you agree to comply
              with and be bound by these Terms of Service.
            </p>

            <p className="mt-4">
              If you do not agree with these terms, you should not use
              our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              2. Services Provided
            </h2>

            <p>
              Personal Web Studio provides digital solutions including
              but not limited to:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>WhatsApp automation systems</li>
              <li>AI-powered chatbot solutions</li>
              <li>Business workflow automation</li>
              <li>Website and communication services</li>
              <li>Lead management integrations</li>
              <li>Technical support and consulting</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              3. User Responsibilities
            </h2>

            <p>
              Users agree to use our services lawfully and responsibly.
              Users must not:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Use the platform for spam or abusive messaging</li>
              <li>Violate WhatsApp or Meta policies</li>
              <li>Send misleading or fraudulent content</li>
              <li>Attempt unauthorized access to systems or data</li>
              <li>Use services for illegal activities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              4. WhatsApp & Third-Party Platforms
            </h2>

            <p>
              Our services may integrate with third-party platforms
              including Meta and the WhatsApp Business Platform.
            </p>

            <p className="mt-4">
              Users are responsible for complying with applicable
              policies, terms, and regulations imposed by such
              third-party services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              5. AI & Automation Disclaimer
            </h2>

            <p>
              Some services may use AI-generated responses and automated
              workflows. While we strive for accuracy and reliability,
              automated systems may occasionally generate incorrect or
              incomplete responses.
            </p>

            <p className="mt-4">
              Users should independently verify important information
              when necessary.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              6. Service Availability
            </h2>

            <p>
              We do not guarantee uninterrupted or error-free service.
              Services may occasionally be unavailable due to
              maintenance, technical issues, third-party outages, or
              platform restrictions.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              7. Limitation of Liability
            </h2>

            <p>
              Personal Web Studio shall not be liable for indirect,
              incidental, special, or consequential damages arising from
              the use or inability to use our services.
            </p>

            <p className="mt-4">
              Users assume responsibility for how automation systems are
              configured and utilized within their businesses.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              8. Intellectual Property
            </h2>

            <p>
              All branding, software, systems, designs, and materials
              provided through our services remain the intellectual
              property of Personal Web Studio unless otherwise stated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              9. Account Suspension or Termination
            </h2>

            <p>
              We reserve the right to suspend or terminate access to our
              services for violations of these terms, abuse of the
              platform, or activities that may harm our systems or
              reputation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              10. Changes To Terms
            </h2>

            <p>
              We may update these Terms of Service from time to time.
              Continued use of our services after updates constitutes
              acceptance of the revised terms.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              11. Contact Information
            </h2>

            <div className="bg-neutral-100 rounded-2xl p-6 mt-4">
              <p>
                <span className="font-semibold">Email:</span>{" "}
                hello@personalwebstudio.com
              </p>

              <p className="mt-2">
                <span className="font-semibold">Website:</span>{" "}
                https://personalwebstudio.com
              </p>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}