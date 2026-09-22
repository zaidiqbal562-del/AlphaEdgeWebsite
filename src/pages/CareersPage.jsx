import { useState } from 'react';
import Layout from '../layout/Layout';

export default function CareersPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    linkedIn: '',
    experience: '',
    position: '',
    resume: null,
    coverLetter: '',
    agreed: false,
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : type === 'file' ? files[0] : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formDataToSend = new FormData();
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('phone', formData.phone);
      formDataToSend.append('linkedIn', formData.linkedIn);
      formDataToSend.append('experience', formData.experience);
      formDataToSend.append('position', formData.position);
      formDataToSend.append('coverLetter', formData.coverLetter);
      if (formData.resume) {
        formDataToSend.append('resume', formData.resume);
      }

      setSubmitted(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        linkedIn: '',
        experience: '',
        position: '',
        resume: null,
        coverLetter: '',
        agreed: false,
      });
      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Layout
      title="Careers | AlphaEdge"
      description="Join AlphaEdge and be part of a premier research-led institute. We're looking for passionate individuals in quantitative finance, engineering, and AI."
      keywords="careers, jobs, hiring, quantitative finance, AI, trading, research"
    >
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--text-muted)]">Join us</p>
          <h1 className="mt-4 text-4xl font-black tracking-[-0.06em] text-[var(--text-primary)] sm:text-5xl">
            Build the future of quantitative finance and AI.
          </h1>
          <p className="mt-6 text-lg leading-8 text-[var(--text-secondary)]">
            AlphaEdge is building a world-class team of researchers, engineers, and practitioners. We're looking for exceptional talent to join us on our mission to advance quantitative finance and applied AI.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-20 sm:px-6 lg:px-8">
        <div className="rounded-[28px] border border-[var(--border-soft)] bg-[var(--surface)] p-8">
          <h2 className="text-3xl font-bold tracking-[-0.05em] text-[var(--text-primary)] mb-8">Submit Your Application</h2>

          {submitted && (
            <div className="mb-8 rounded-xl border border-emerald-500/50 bg-emerald-500/10 p-4">
              <p className="text-sm font-semibold text-emerald-400">✓ Application submitted successfully! We'll review your profile and get back to you soon.</p>
            </div>
          )}

          {error && (
            <div className="mb-8 rounded-xl border border-rose-500/50 bg-rose-500/10 p-4">
              <p className="text-sm font-semibold text-rose-400">✗ {error}</p>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">Full Name *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors focus:border-[var(--accent)] focus:outline-none"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors focus:border-[var(--accent)] focus:outline-none"
                  placeholder="your@email.com"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors focus:border-[var(--accent)] focus:outline-none"
                  placeholder="+1 (555) 000-0000"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors focus:border-[var(--accent)] focus:outline-none"
                  placeholder="linkedin.com/in/yourprofile"
                />
              </div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">Years of Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text-primary)] transition-colors focus:border-[var(--accent)] focus:outline-none"
                >
                  <option value="">Select experience level</option>
                  <option value="0-2">0-2 years</option>
                  <option value="2-5">2-5 years</option>
                  <option value="5-10">5-10 years</option>
                  <option value="10+">10+ years</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">Position of Interest *</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleChange}
                  required
                  className="w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text-primary)] transition-colors focus:border-[var(--accent)] focus:outline-none"
                >
                  <option value="">Select a position</option>
                  <option value="Quantitative Researcher">Quantitative Researcher</option>
                  <option value="Machine Learning Engineer">Machine Learning Engineer</option>
                  <option value="Software Engineer">Software Engineer</option>
                  <option value="Instructor">Stock Trader</option>
                  <option value="Data Engineer">Data Engineer</option>
                  <option value="Trading Systems">Trading Systems Engineer</option>
                  <option value="Research Analyst">Research Analyst</option>
                  <option value="Instructor">Instructor / Mentor</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[var(--text-primary)] mb-2">Cover Letter / Message</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleChange}
                rows="5"
                className="w-full rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] px-4 py-3 text-[var(--text-primary)] placeholder-[var(--text-muted)] transition-colors focus:border-[var(--accent)] focus:outline-none"
                placeholder="Tell us why you're interested in joining AlphaEdge..."
              />
            </div>

            <div className="flex items-start gap-3">
              <input
                type="checkbox"
                name="agreed"
                id="agreed"
                checked={formData.agreed}
                onChange={handleChange}
                required
                className="mt-1 rounded border-[var(--border-soft)] bg-[var(--surface-strong)] accent-[var(--accent)]"
              />
              <label htmlFor="agreed" className="text-sm text-[var(--text-secondary)]">
                I agree that AlphaEdge can store and process my information for recruitment purposes. *
              </label>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-slate-950 shadow-[0_0_30px_rgba(16,185,129,0.35)] transition-all hover:shadow-[0_0_45px_rgba(16,185,129,0.5)] active:scale-95 disabled:opacity-75 disabled:cursor-not-allowed"
            >
              {loading ? 'Submitting...' : 'Submit Application'}
            </button>
          </form>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Research</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">Help us conduct cutting-edge research in quantitative finance and AI systems.</p>
          </div>
          <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Engineering</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">Build production-grade systems for research, trading, and learning infrastructure.</p>
          </div>
          <div className="rounded-xl border border-[var(--border-soft)] bg-[var(--surface-strong)] p-6">
            <h3 className="text-lg font-semibold text-[var(--text-primary)]">Education</h3>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">Mentor and teach the next generation of quantitative professionals.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
