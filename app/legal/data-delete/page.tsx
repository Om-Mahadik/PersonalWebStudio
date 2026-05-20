export default function DataDeletionPage() {
  return (
    <main className="min-h-screen bg-black px-6 pt-32 pb-16">
      <div className="max-w-4xl mx-auto bg-white text-black rounded-[32px] p-8 md:p-14 shadow-2xl">
        <div className="mb-12">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            User Data Deletion
          </h1>

          <p className="text-gray-600 mt-4 text-sm md:text-base">
            Last Updated: May 20, 2026
          </p>
        </div>

        <div className="space-y-8 text-[15px] md:text-[16px] leading-8 text-neutral-800">
          <section>
            <p>
              At Personal Web Studio, we respect user privacy and provide
              users with the ability to request deletion of their data
              associated with our services and applications.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              How To Request Data Deletion
            </h2>

            <p>
              Users may request deletion of their personal data,
              communication records, or account-related information by
              contacting us through the email below.
            </p>

            <div className="bg-neutral-100 rounded-2xl p-6 mt-6">
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

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Required Information
            </h2>

            <p>
              To process deletion requests efficiently, users may be
              asked to provide:
            </p>

            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Registered phone number or WhatsApp number</li>
              <li>Email address associated with the service</li>
              <li>Business or account identification details</li>
              <li>Brief description of the deletion request</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Processing Timeline
            </h2>

            <p>
              Verified deletion requests are generally processed within
              a reasonable timeframe, subject to operational, legal, and
              security requirements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Data Retention Exceptions
            </h2>

            <p>
              Certain information may be retained where required for
              legal compliance, fraud prevention, dispute resolution,
              security purposes, or enforcement of agreements.
            </p>
          </section>

          <section>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4">
              Contact Information
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