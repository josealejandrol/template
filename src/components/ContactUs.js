export const ContactUs = () => {
  return (
    <div className="contactus__container">
      <div className="contactus__content">
        <div className="contactus__content-top">
          <h1>Contact Us</h1>
          <p>Mauris a neque pulvinar orci tempor rutrum at vitae massa.</p>
          <p className="bold">
            Integer accumsan erat aliquam mauris placerat ullamcorper donec sed
            dui.
          </p>
        </div>
        <div className="contactus__content-row">
          <div className="contactus__content-row-column1">
            <h1>ON THE MAP</h1>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d9542.866242480242!2d-6.12562!3d53.276698!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTPCsDE2JzM2LjEiTiA2wrAwNyczMi4yIlc!5e0!3m2!1ses-419!2sus!4v1623173943169!5m2!1ses-419!2sus"
              width="320"
              height="250"
              style={{border: 0}}
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="contactus__content-row-column2">
            <h1>GENERAL INQUIRY</h1>
            <form>
              <input type="text" placeholder="Your name" className="form__input" />
              <input type="text" placeholder="Your e-mail" className="form__input" />
              <textarea placeholder="Your message" className="form__textarea"></textarea>
              <button className="form__button">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
