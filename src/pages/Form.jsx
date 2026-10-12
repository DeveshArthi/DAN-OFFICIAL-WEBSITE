import { useEffect, useId, useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';

export default function Form() {
  const id = useId();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState(null);

  useEffect(() => {
    if (!feedback) return;

    const timer = setTimeout(() => {
      setFeedback(null);
    }, 2000);

    return () => clearTimeout(timer);
  }, [feedback]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSubmitting) return;

    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const apiUrl = import.meta.env.VITE_API_URL;

      if (!apiUrl) {
        throw new Error('The contact service has not been configured.');
      }

      const response = await fetch(
        `${apiUrl.replace(/\/$/, '')}/api/contact`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        }
      );

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || 'Unable to save your enquiry.');
      }

      setFeedback({
        type: 'success',
        message: result.message,
      });

      form.reset();
    } catch (error) {
      setFeedback({
        type: 'error',
        message:
          error instanceof TypeError
            ? 'Cannot reach the server. Please try again.'
            : error.message || 'Unable to save your enquiry.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact_section" id="contact">
      <div className="contact_container">
        <h2 style={{ textAlign: 'center' }}>
          Have an Idea? Let’s make it happen
        </h2>

        <p className="contact_intro">
          Tell me what you’re building. Let’s create something for your business.
        </p>

        <div className="contact_layout">
          <form
            className="contact_form"
            onSubmit={handleSubmit}
            aria-busy={isSubmitting}
          >
            <div className="form_row">
              <div className="form_field">
                <label htmlFor={`${id}-name`}>Name</label>
                <input
                  id={`${id}-name`}
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
                  maxLength={100}
                  required
                />
              </div>

              <div className="form_field">
                <label htmlFor={`${id}-email`}>Email</label>
                <input
                  id={`${id}-email`}
                  name="email"
                  type="email"
                  placeholder="Your email"
                  autoComplete="email"
                  maxLength={254}
                  required
                />
              </div>
            </div>

            <div className="form_field">
              <label htmlFor={`${id}-service`}>Service Needed</label>
              <select
                id={`${id}-service`}
                name="service"
                defaultValue=""
                required
              >
                <option value="" disabled>Select a service</option>
                <option value="website-development">Website Development</option>
                <option value="website-redesign">Website Redesign</option>
                <option value="ui-ux-design">UI / UX Design</option>
                <option value="maintenance">Website Maintenance</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="form_field">
              <label htmlFor={`${id}-message`}>
                Tell Me About Your Project
              </label>
              <textarea
                id={`${id}-message`}
                name="message"
                placeholder="Share your project details..."
                rows={3}
                maxLength={5000}
                required
              />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Sending...' : 'Send Enquiry'}
            </button>

            <Dialog
              open={Boolean(feedback)}
              onClose={() => setFeedback(null)}
              aria-labelledby={`${id}-feedback-title`}
              aria-describedby={`${id}-feedback-message`}
              maxWidth="xs"
              fullWidth
              slotProps={{
                paper: {
                  className: 'contact_dialog',
                },
              }}
            >
              <DialogContent
                className={`contact_dialog_content ${feedback?.type || ''}`}
              >
                {feedback?.type === 'success' ? (
                  <CheckCircleIcon className="feedback_icon" />
                ) : (
                  <HighlightOffIcon className="feedback_icon" />
                )}

                <h3 id={`${id}-feedback-title`}>
                  {feedback?.type === 'success' ? 'Enquiry received!' : 'Unable to send'}
                </h3>

                <p id={`${id}-feedback-message`}>
                  {feedback?.message}
                </p>
              </DialogContent>
            </Dialog>
          </form>
        </div>
      </div>
    </section>
  );
}