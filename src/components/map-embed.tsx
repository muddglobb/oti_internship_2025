const MapEmbed = () => {
  return (
    <div className="w-full">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.13476410261!2d110.37449337455385!3d-7.775531777138042!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a583567e53123%3A0x50a93c27df6b337a!2sWisma%20FMIPA%20UGM!5e0!3m2!1sid!2sid!4v1746079111959!5m2!1sid!2sid"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapEmbed;
