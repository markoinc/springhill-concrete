export const business = {
  name: 'Spring Hill Concrete Co.',
  phone: '(727) 877-3099',
  phoneLink: 'tel:+17278773099',
  address: {
    street: '',
    city: 'Spring Hill',
    state: 'FL',
    zip: '34608',
    full: 'Spring Hill, FL 34608'
  },
  geo: {
    lat: 28.4789,
    lng: -82.5301
  },
  url: 'https://concretespringhill.com',
  hours: ['Mo-Fr 07:00-18:00', 'Sa 08:00-16:00'],
  hoursDisplay: 'Mon-Fri 7am-6pm, Sat 8am-4pm',
  priceRange: '$$',
  rating: 5.0,
  reviewCount: 47,
  foundedYear: 2010,
  yearsExperience: 15,
  projectsCompleted: 850,
  licenseNumber: 'CRC1331876'
};

export const services = [
  {
    name: 'Concrete Driveways',
    slug: 'concrete-driveways',
    shortDesc: 'Durable, beautiful driveways built to last 30+ years in Florida\'s climate.',
    description: 'Professional concrete driveway installation in Spring Hill. New driveways, replacements, extensions, and repairs.',
    features: ['4" thick residential standard', '4,000 PSI concrete', 'Wire mesh reinforcement', 'Control joints', 'Proper drainage slope', 'Brush, broom, or exposed aggregate finish'],
    priceRange: '$8-$15/sq ft'
  },
  {
    name: 'Concrete Patios',
    slug: 'concrete-patios',
    shortDesc: 'Transform your backyard into an outdoor living paradise.',
    description: 'Custom patio design and installation. Pool decks, outdoor living spaces, fire pit areas, and entertaining spaces.',
    features: ['Custom shapes and sizes', 'Multiple finish options', 'Stamped patterns available', 'Non-slip textures', 'Integrated drainage', 'Built to withstand Florida weather'],
    priceRange: '$10-$18/sq ft'
  },
  {
    name: 'Concrete Slabs',
    slug: 'concrete-slabs',
    shortDesc: 'Strong foundations for sheds, garages, workshops, and more.',
    description: 'Concrete slab installation for sheds, garages, workshops, equipment pads, and more.',
    features: ['Proper site preparation', 'Compacted base material', 'Rebar reinforcement', 'Level finished surface', 'Expansion joints', 'Various thickness options'],
    priceRange: '$6-$12/sq ft'
  },
  {
    name: 'Stamped Concrete',
    slug: 'stamped-concrete',
    shortDesc: 'The look of natural stone or brick at a fraction of the cost.',
    description: 'Decorative stamped concrete that mimics natural stone, brick, slate, and tile patterns.',
    features: ['50+ patterns available', 'Integral and accent colors', 'Sealed for protection', 'UV stable colors', 'Slip-resistant finish', 'Lower maintenance than pavers'],
    priceRange: '$12-$22/sq ft'
  }
];

export const serviceAreas = [
  // Primary - Hernando County
  { name: 'Spring Hill', slug: 'spring-hill', county: 'Hernando', primary: true, distance: 0 },
  { name: 'Brooksville', slug: 'brooksville', county: 'Hernando', primary: true, distance: 8 },
  { name: 'Weeki Wachee', slug: 'weeki-wachee', county: 'Hernando', primary: true, distance: 5 },
  { name: 'Hernando Beach', slug: 'hernando-beach', county: 'Hernando', primary: true, distance: 12 },
  
  // Primary - Pasco County
  { name: 'Hudson', slug: 'hudson', county: 'Pasco', primary: true, distance: 10 },
  { name: 'New Port Richey', slug: 'new-port-richey', county: 'Pasco', primary: true, distance: 15 },
  { name: 'Port Richey', slug: 'port-richey', county: 'Pasco', primary: false, distance: 16 },
  { name: 'Holiday', slug: 'holiday', county: 'Pasco', primary: false, distance: 18 },
  { name: 'Trinity', slug: 'trinity', county: 'Pasco', primary: false, distance: 22 },
  { name: 'Land O\' Lakes', slug: 'land-o-lakes', county: 'Pasco', primary: false, distance: 28 },
  { name: 'Wesley Chapel', slug: 'wesley-chapel', county: 'Pasco', primary: false, distance: 32 },
  { name: 'Zephyrhills', slug: 'zephyrhills', county: 'Pasco', primary: false, distance: 35 },
  { name: 'Dade City', slug: 'dade-city', county: 'Pasco', primary: false, distance: 30 },
  { name: 'San Antonio', slug: 'san-antonio', county: 'Pasco', primary: false, distance: 25 },
  { name: 'Shady Hills', slug: 'shady-hills', county: 'Pasco', primary: false, distance: 20 },
  { name: 'Masaryktown', slug: 'masaryktown', county: 'Hernando', primary: false, distance: 15 },
  { name: 'Ridge Manor', slug: 'ridge-manor', county: 'Hernando', primary: false, distance: 18 },
  
  // Citrus County
  { name: 'Crystal River', slug: 'crystal-river', county: 'Citrus', primary: false, distance: 25 },
  { name: 'Homosassa', slug: 'homosassa', county: 'Citrus', primary: false, distance: 18 },
  { name: 'Inverness', slug: 'inverness', county: 'Citrus', primary: false, distance: 28 },
  { name: 'Lecanto', slug: 'lecanto', county: 'Citrus', primary: false, distance: 22 },
  { name: 'Beverly Hills', slug: 'beverly-hills', county: 'Citrus', primary: false, distance: 25 },
  { name: 'Citrus Springs', slug: 'citrus-springs', county: 'Citrus', primary: false, distance: 20 },
  
  // Pinellas County (within 1 hour)
  { name: 'Tarpon Springs', slug: 'tarpon-springs', county: 'Pinellas', primary: false, distance: 30 },
  { name: 'Palm Harbor', slug: 'palm-harbor', county: 'Pinellas', primary: false, distance: 35 },
  { name: 'Clearwater', slug: 'clearwater', county: 'Pinellas', primary: false, distance: 42 },
  
  // Hillsborough County (within 1 hour)
  { name: 'Lutz', slug: 'lutz', county: 'Hillsborough', primary: false, distance: 30 },
  { name: 'Tampa', slug: 'tampa', county: 'Hillsborough', primary: false, distance: 45 },
  
  // Sumter County
  { name: 'Bushnell', slug: 'bushnell', county: 'Sumter', primary: false, distance: 38 },
  { name: 'Webster', slug: 'webster', county: 'Sumter', primary: false, distance: 35 },
  
  // Marion County
  { name: 'Ocala', slug: 'ocala', county: 'Marion', primary: false, distance: 55 },
  { name: 'Dunnellon', slug: 'dunnellon', county: 'Marion', primary: false, distance: 35 }
];

export const faqs = [
  {
    question: 'How much does a concrete driveway cost in Spring Hill, FL?',
    answer: 'Concrete driveway costs in Spring Hill typically range from $8-$15 per square foot, depending on size, thickness, and finish. A standard 400 sq ft driveway costs $3,200-$6,000. Stamped or decorative concrete adds 40-60% more. Call (727) 877-3099 for a free, detailed estimate specific to your project.'
  },
  {
    question: 'How long does concrete take to cure in Florida\'s climate?',
    answer: 'Concrete reaches about 70% strength in 7 days and full strength in 28 days. In Florida\'s warm, humid climate, initial setting happens faster—usually within 4-8 hours. You can walk on new concrete after 24-48 hours, but wait at least 7 days before driving on a new driveway. Heavy vehicles should wait the full 28 days.'
  },
  {
    question: 'Do I need a permit for concrete work in Hernando County?',
    answer: 'Most concrete work in Hernando County requires a permit from the Building Department. This includes driveways connecting to streets, slabs over 200 square feet, and all foundations. At Spring Hill Concrete Co., we handle all permitting paperwork and inspections for our customers at no extra charge.'
  },
  {
    question: 'What areas do you serve near Spring Hill?',
    answer: 'We serve all of Hernando County including Spring Hill, Brooksville, Weeki Wachee, and Hernando Beach. We also cover Pasco County (Hudson, New Port Richey, Trinity, Wesley Chapel), Citrus County (Crystal River, Homosassa, Inverness), and parts of Pinellas and Hillsborough Counties. Generally, anywhere within an hour of Spring Hill.'
  },
  {
    question: 'Do you offer free estimates for concrete work?',
    answer: 'Yes! We provide free, no-obligation estimates for all concrete projects. We\'ll come to your property, assess the work area, discuss your options, and provide a detailed written quote within 24-48 hours. Call (727) 877-3099 or fill out our online form to schedule.'
  },
  {
    question: 'How thick should a concrete driveway be in Florida?',
    answer: 'A residential concrete driveway should be 4 inches thick minimum for regular passenger vehicles. For heavier vehicles like RVs, boats on trailers, or work trucks, we recommend 5-6 inches with additional reinforcement. All our driveways use 4,000+ PSI concrete for maximum durability in Florida\'s climate.'
  },
  {
    question: 'Is concrete better than asphalt for driveways in Florida?',
    answer: 'Concrete is generally the better choice for Florida driveways. It lasts 30+ years (vs. 15-20 for asphalt), handles heat better without softening, requires less maintenance, and reflects more sunlight keeping it cooler. While the upfront cost is slightly higher, the long-term value is significantly better.'
  },
  {
    question: 'What\'s the difference between stamped concrete and pavers?',
    answer: 'Stamped concrete is poured as one continuous surface and textured to look like stone, brick, or tile. It\'s typically 30-40% less expensive than pavers, installs faster, and has no weeds growing between joints. Pavers can be individually replaced if damaged but may shift over time and require more maintenance.'
  }
];

export const reviews = [
  {
    name: 'Mike T.',
    neighborhood: 'Spring Hill (Timber Pines)',
    rating: 5,
    text: 'Excellent work on our new driveway! The crew was professional from start to finish—showed up exactly when they said they would and cleaned up everything after. Our neighbors have already asked for their number. The finished product looks amazing and has held up great through two Florida summers.',
    date: '2025-01-15',
    service: 'Concrete Driveway',
    color: 'bg-emerald-600'
  },
  {
    name: 'Sarah M.',
    neighborhood: 'Brooksville (Southern Hills)',
    rating: 5,
    text: 'We hired them for a stamped concrete patio by our pool and it turned out absolutely beautiful—looks like real flagstone! Great communication throughout the project and they worked around our pool schedule. Fair pricing compared to three other quotes we got. Highly recommend.',
    date: '2025-01-08',
    service: 'Stamped Concrete Patio',
    color: 'bg-slate-600'
  },
  {
    name: 'Robert J.',
    neighborhood: 'Hudson (Beacon Woods)',
    rating: 5,
    text: 'Very satisfied with our new garage slab. They handled everything including the Hernando County permit. The crew showed up on time every day and finished when they said they would. Already planning to have them back for a new driveway next year.',
    date: '2024-12-20',
    service: 'Concrete Slab',
    color: 'bg-teal-600'
  },
  {
    name: 'Jennifer L.',
    neighborhood: 'Spring Hill (Oak Hills)',
    rating: 5,
    text: 'These guys replaced our 25-year-old cracked driveway and the difference is incredible. They removed the old concrete, re-graded the area for proper drainage (we used to have puddles!), and installed a beautiful new driveway. It\'s been 8 months and still looks brand new.',
    date: '2024-11-15',
    service: 'Driveway Replacement',
    color: 'bg-green-700'
  },
  {
    name: 'David & Karen P.',
    neighborhood: 'Weeki Wachee (Pine Island)',
    rating: 5,
    text: 'We had a large concrete pad installed for our RV and boat. They recommended going with 6" thick concrete and extra rebar for the weight—advice that our last contractor never mentioned. Professional, knowledgeable, and reasonably priced. Would definitely use again.',
    date: '2024-10-28',
    service: 'Equipment Pad',
    color: 'bg-emerald-700'
  },
  {
    name: 'Tom S.',
    neighborhood: 'New Port Richey (River Ridge)',
    rating: 5,
    text: 'Third concrete company I\'ve used over the years and by far the best. They poured a new patio and extended our existing driveway. The seams between old and new concrete are barely visible. Great attention to detail and they actually listened to what we wanted.',
    date: '2024-09-12',
    service: 'Patio & Driveway Extension',
    color: 'bg-slate-700'
  }
];

export const trustBadges = [
  { title: 'Licensed', subtitle: 'FL State #CRC1331876', icon: 'shield' },
  { title: 'Fully Insured', subtitle: '$1M Liability', icon: 'certificate' },
  { title: '15+ Years', subtitle: 'Experience', icon: 'clock' },
  { title: '5.0 Rating', subtitle: '47+ Reviews', icon: 'star' },
  { title: '850+ Projects', subtitle: 'Completed', icon: 'check' },
  { title: 'Free Estimates', subtitle: 'No Obligation', icon: 'calculator' }
];

export const processSteps = [
  {
    number: 1,
    title: 'Free Consultation',
    description: 'Call us or fill out our form. We\'ll discuss your project, answer questions, and schedule a free on-site estimate at your convenience.'
  },
  {
    number: 2,
    title: 'Detailed Estimate',
    description: 'We visit your property, assess the work area, discuss finish options, and provide a written quote within 24-48 hours. No hidden fees or surprises.'
  },
  {
    number: 3,
    title: 'Professional Installation',
    description: 'Our experienced crew completes your project on schedule. We handle permits, prep work, pouring, finishing, and thorough cleanup.'
  },
  {
    number: 4,
    title: 'Quality Guarantee',
    description: 'We stand behind our work. All projects include proper curing instructions and we\'re available for any questions after completion.'
  }
];
