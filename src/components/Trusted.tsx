'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';

const companies = [
  { name: 'Slack', logo: '/brands/slack.png' },
  { name: 'Paystack', logo: '/brands/paystack.png' },
  { name: 'Brandfetch', logo: '/brands/brandfetch.svg' },
  { name: 'Shop Inverse', logo: '/brands/shopinverse.png' },
  { name: 'Rilla Host', logo: '/brands/rila.png' },
  { name: 'Geegpay', logo: '/brands/geeg.png' },
];

export default function TrustedCompanies() {
  return (
    <section className="py-16 px-4 md:px-20">
      <div className="hero-container max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-xl capitalize font-semibold text-white mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Trusted by garage founders and top executives
        </motion.h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
          {companies.map((company, idx) => (
            <motion.div
              key={company.name}
              className="flex justify-center grayscale hover:grayscale-0 transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              viewport={{ once: true }}
            >
              <Image
                src={company.logo}
                alt={company.name}
                width={120}
                height={60}
                className="h-10 w-26 object-contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
