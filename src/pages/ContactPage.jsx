import { useRef, useState } from 'react';
import PageHero from '../components/PageHero';
import { invitationPolicy, siteMeta } from '../data/siteContent';

export default function ContactPage() {
  const [status, setStatus] = useState('idle');
  const [error, setError] = useState('');
  const successHeading = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();
    if (status === 'sending') return;
    const form = event.currentTarget;
    setError('');
    if (import.meta.env.DEV || ['localhost', '127.0.0.1', '[::1]'].includes(window.location.hostname)) {
      setError('This local preview does not send messages. Your message has not been submitted.');
      return;
    }
    const body = new URLSearchParams(new FormData(form));
    setStatus('sending');
    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 15000);
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('success');
      window.requestAnimationFrame(() => successHeading.current?.focus());
    } catch {
      setStatus('idle');
      setError('We could not confirm your message was received. Please try again. Your message is still in the form.');
    } finally {
      window.clearTimeout(timeout);
    }
  }

  return (
    <>
      <PageHero eyebrow="Contact" title="A direct way to reach us." text="For existing partnerships, invited follow-up, donation inquiries, or general questions about the foundation, please use the form below." imageSrc="/images/contact-hero.png" imageAlt="Two women greeting one another with a handshake" />
      <section className="section surface">
        <div className="container contact-layout">
          <aside>
            <p className="eyebrow">Get in touch</p><h2>How can we help?</h2>
            <p>{siteMeta.location}</p>
            <div className="donation-note"><h3>Supporting our mission</h3><p>We welcome donations from those who wish to help support our mission. Please use the form to ask about making a contribution.</p></div>
            <div className="contact-policy"><h3>Requests for funding</h3><p>{invitationPolicy}</p></div>
            <p className="small-text">We use the information you provide to respond to your inquiry. Please do not include sensitive personal or financial information.</p>
          </aside>
          <div className="form-panel">
            {status === 'success' ? (
              <div className="form-success" role="status"><p className="eyebrow">Message received</p><h2 ref={successHeading} tabIndex={-1}>Thank you for getting in touch.</h2><p>Your message has been received.</p><button type="button" className="button button-secondary" onClick={() => setStatus('idle')}>Send another message</button></div>
            ) : (
              <form className="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit} aria-busy={status === 'sending'}>
                <input type="hidden" name="form-name" value="contact" />
                <input type="hidden" name="subject" value="Charis Legacy Foundation — website inquiry" />
                <div hidden aria-hidden="true"><label>Leave this field empty<input name="bot-field" tabIndex={-1} autoComplete="off" /></label></div>
                <p className="small-text form-intro">Fields marked * are required.</p>
                <div className="form-row">
                  <label htmlFor="contact-name">Name *<input id="contact-name" name="name" autoComplete="name" maxLength={120} required /></label>
                  <label htmlFor="contact-email">Email *<input id="contact-email" name="email" type="email" autoComplete="email" maxLength={254} required /></label>
                </div>
                <label htmlFor="contact-organization">Organization (optional)<input id="contact-organization" name="organization" autoComplete="organization" maxLength={160} /></label>
                <label htmlFor="contact-inquiry">Inquiry type *<select id="contact-inquiry" name="inquiry-type" defaultValue="" required><option value="" disabled>Select an inquiry type</option><option>General inquiry</option><option>Donation inquiry</option><option>Existing partnership</option><option>Invited follow-up</option></select></label>
                <label htmlFor="contact-message">Message *<textarea id="contact-message" name="message" rows={6} maxLength={6000} required /></label>
                {error && <p className="form-error" role="alert">{error}</p>}
                <div><button className="button button-primary" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Sending…' : 'Send Message'}</button></div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
