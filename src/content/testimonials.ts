export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  role: string;
  image: string;
}

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    quote:
      "Vinimay provides detailed financial reports and analytics for sales and profits, along with exceptional customer service for troubleshooting. I highly recommend Vinimay.",
    name: "Viraaj Badhwar",
    role: "Co-founder @ Burgerama",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&h=120&fit=crop&crop=faces",
  },
  {
    id: 2,
    quote:
      "Vinimay simplifies restaurant management by handling online orders, inventory, and menu updates. The user-friendly POS frees up time for brand growth. Invest in automated solutions like Vinimay for seamless operations.",
    name: "Aditi Madan",
    role: "Founder @ Yangkiez Momos",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&h=120&fit=crop&crop=faces",
  },
  {
    id: 3,
    quote:
      "To run multiple outlets, you need a technology solution that perfectly syncs with all other apps and is all well-integrated into one for smooth operations. I think here Vinimay does a phenomenal job in helping.",
    name: "Kabir Advani",
    role: "Managing Partner @ Berco's",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=120&h=120&fit=crop&crop=faces",
  },
  {
    id: 4,
    quote:
      "Connecting our gym's physical turnstiles straight to Vinimay membership renewals eliminated unpaid walk-ins overnight. Trainer commissions, walk-in leads, and member UPI autopay calculate in 1 click.",
    name: "Himanshu Dhammeriya",
    role: "Managing Director @ IronPulse Fitness Club",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&h=120&fit=crop&crop=faces",
  },
  {
    id: 5,
    quote:
      "In transport and logistics, Vinimay's Google Maps route calculation and trip billing eliminated all freight disputes. Fastag tolls, fuel allowances, and driver trip sheets settle in seconds.",
    name: "Rajesh Verma",
    role: "Head of Logistics @ SwiftWay Carriers",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&crop=faces",
  },
];
