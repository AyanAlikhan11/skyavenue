import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-800/60 bg-slate-950/80">
      <div className="section section-padding grid gap-10 md:grid-cols-4">
        <div className="md:col-span-2">
          <h3 className="font-display text-xl text-white">SKY AVENUE</h3>
          <p className="mt-3 text-sm text-muted">
            A premium rooftop restaurant overlooking the city skyline. Crafted
            cocktails, seasonal cuisine, and an unforgettable ambience.
          </p>
          <p className="mt-3 text-sm text-slate-300">
            123 Skyline Avenue,
            <br />
            Your City, Your State 123456
          </p>
          <p className="mt-2 text-sm text-slate-300">
            Phone:{" "}
            <a href="tel:+1234567890" className="hover:text-gold">
              +1 (234) 567-890
            </a>
            <br />
            Email:{" "}
            <a href="mailto:reservations@skyavenuerestaurant.com" className="hover:text-gold">
              reservations@skyavenuerestaurant.com
            </a>
          </p>
        </div>

        <div>
          <h4 className="heading-3 text-lg">Hours</h4>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>Mon – Thu: 5:00 PM – 11:00 PM</li>
            <li>Fri – Sat: 5:00 PM – 1:00 AM</li>
            <li>Sun: 5:00 PM – 10:00 PM</li>
          </ul>
        </div>

        <div>
          <h4 className="heading-3 text-lg">Explore</h4>
          <ul className="mt-3 space-y-1 text-sm text-slate-300">
            <li>
              <Link href="/menu" className="hover:text-gold">
                View Menu
              </Link>
            </li>
            <li>
              <Link href="/offers" className="hover:text-gold">
                Latest Offers
              </Link>
            </li>
            <li>
              <Link href="/gallery" className="hover:text-gold">
                Rooftop Gallery
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-gold">
                Contact & Location
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-800/60 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SKY AVENUE. All rights reserved.
      </div>
    </footer>
  );
}