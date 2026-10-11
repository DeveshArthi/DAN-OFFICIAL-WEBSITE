import { useId } from 'react';

// Pass your illustration path through imageSrc.
export default function Form({ onSubmit }) {
  const id = useId();

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = Object.fromEntries(
      new FormData(event.currentTarget).entries()
    );

    // Connect onSubmit to your email service or backend.
    onSubmit?.(data);
  };

  return (
    <section className="contact_section" id="contact">
      <div className="contact_container">
        <h2 style={{ textAlign: 'center' }}>Have an Idea? Lets make it happen</h2>
        <p className="contact_intro">
          Tell me what you’re building. Let’s create something for your business.
        </p>

        <div className="contact_layout">
          <form className="contact_form" onSubmit={handleSubmit}>
            <div className="form_row">
              <div className="form_field">
                <label htmlFor={`${id}-name`}>Name</label>
                <input
                  id={`${id}-name`}
                  name="name"
                  type="text"
                  placeholder="Your name"
                  autoComplete="name"
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
                required
              />
            </div>

            <button type="submit">Send Enquiry</button>
          </form>

        </div>
      </div>
    </section>
  );
}