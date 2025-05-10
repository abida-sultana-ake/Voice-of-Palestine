import React from "react";

const FQ = () => {
  return (
    <div className="bg-green-50 p-4">
        <h1 className="p-5 text-2xl font-semibold text-center text-green-600">Learn, Understand, and Stand with Palestine</h1>
      <div className="collapse collapse-plus bg-green-100 border border-base-300">
        <input type="radio" name="voice-of-palestine-faq" defaultChecked />
        <div className="collapse-title font-semibold">
          What is the Voice of Palestine project?
        </div>
        <div className="collapse-content text-sm">
          The Voice of Palestine project is a digital platform aimed at sharing
          the stories, history, and ongoing struggle of the Palestinian people
          through articles, videos, and interactive media.
        </div>
      </div>
      <div className="collapse collapse-plus bg-green-100 border border-base-300">
        <input type="radio" name="voice-of-palestine-faq" />
        <div className="collapse-title font-semibold">
          How can I contribute to the project?
        </div>
        <div className="collapse-content text-sm">
          You can contribute by submitting articles, media content, or by
          volunteering as a translator, writer, or researcher through our "Get
          Involved" page.
        </div>
      </div>
      <div className="collapse collapse-plus bg-green-100 border border-base-300">
        <input type="radio" name="voice-of-palestine-faq" />
        <div className="collapse-title font-semibold">
          Is the content verified and authentic?
        </div>
        <div className="collapse-content text-sm">
          Yes, all content is reviewed by a team of researchers and editors to
          ensure accuracy, credibility, and respectful representation of
          Palestinian voices.
        </div>
      </div>
      <div className="collapse collapse-plus bg-green-100 border border-base-300">
        <input type="radio" name="voice-of-palestine-faq" />
        <div className="collapse-title font-semibold">
          Can I donate to support the project?
        </div>
        <div className="collapse-content text-sm">
          Absolutely. Donations help keep the platform running and support local
          storytellers and journalists. Visit our "Support Us" page for more
          details.
        </div>
      </div>
      <div className="collapse collapse-plus bg-green-100 border-base-300">
        <input type="radio" name="voice-of-palestine-faq" />
        <div className="collapse-title font-semibold">
          Who runs the Voice of Palestine project?
        </div>
        <div className="collapse-content text-sm">
          The project is managed by a collective of activists, educators,
          journalists, and developers dedicated to preserving and amplifying
          Palestinian narratives.
        </div>
      </div>
      <div className="collapse collapse-plus bg-green-100 border border-base-300">
        <input type="radio" name="voice-of-palestine-faq" />
        <div className="collapse-title font-semibold">
          How often is new content published?
        </div>
        <div className="collapse-content text-sm">
          New articles, media, and personal stories are published weekly, with
          special updates during significant political or historical events.
        </div>
      </div>
      <div className="collapse collapse-plus bg-green-100 border border-base-300">
        <input type="radio" name="voice-of-palestine-faq" />
        <div className="collapse-title font-semibold">
          Can I use content from the site for educational purposes?
        </div>
        <div className="collapse-content text-sm">
          Yes, content may be used for non-commercial educational use with
          proper attribution. For commercial or publication rights, please
          contact us.
        </div>
      </div>
      <div className="collapse collapse-plus bg-green-100 border border-base-300">
        <input type="radio" name="voice-of-palestine-faq" />
        <div className="collapse-title font-semibold">
          Is the site available in multiple languages?
        </div>
        <div className="collapse-content text-sm">
          Currently, the site is available in English and Arabic, with plans to
          expand into other languages to reach a broader global audience.
        </div>
      </div>
      <div className="collapse collapse-plus bg-green-100 border border-base-300 pb-5">
        <input type="radio" name="voice-of-palestine-faq" />
        <div className="collapse-title font-semibold">
          How can I report misinformation or suggest a correction?
        </div>
        <div className="collapse-content text-sm">
          If you find incorrect information or want to suggest improvements,
          please use the "Report an Issue" form on our Contact page.
        </div>
      </div>
    </div>
  );
};

export default FQ;
