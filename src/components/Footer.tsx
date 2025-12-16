const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="container mx-auto px-6 md:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-center md:text-left">
              <h3 className="font-heading text-lg font-bold text-foreground mb-2">
                Big Lou <span className="text-primary">Welding</span>
              </h3>
              <p className="text-muted-foreground text-sm">
                Mobile welding & metal fabrication in Nassau County
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8 text-sm">
              <div>
                <p className="text-muted-foreground mb-1">Phone</p>
                <a href="tel:5162659889" className="text-foreground hover:text-primary transition-colors font-medium">
                  (516) 265-9889
                </a>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Hours</p>
                <p className="text-foreground">5AM – 10PM Daily</p>
              </div>
              <div>
                <p className="text-muted-foreground mb-1">Area</p>
                <p className="text-foreground">Nassau County, NY</p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center">
            <p className="text-muted-foreground text-sm">
              © {currentYear} Big Lou Mobile Welding and Metal Fabrication Service. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;