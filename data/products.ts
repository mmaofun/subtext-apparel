export interface ProductVariant {
  size: 'S' | 'M' | 'L' | 'XL' | 'XXL';
  stock: number;
}

export interface ProductColor {
  name: string;
  hex: string;
  code: string;
}

export interface StoryChapter {
  title: string;
  subtitle: string;
  description: string;
  focusPoint: 'front' | 'back' | 'embroidery' | 'fabric' | 'cuff' | 'hood';
  detailNote: string;
}

export interface Review {
  id: string;
  author: string;
  location: string;
  rating: number;
  date: string;
  title: string;
  comment: string;
  verified: boolean;
  sizePurchased: string;
}

export type ProductCategory = 'hoodies' | 'pants' | 'tees' | 'outerwear' | 'accessories';

export interface Product {
  id: string;
  slug: string;
  code: string;
  category: ProductCategory;
  themeNumber: string;
  themeName: string;
  title: string;
  subtitle: string;
  price: number;
  compareAtPrice?: number;
  badge?: 'LIMITED RELEASE' | 'CORE ARCHIVE' | 'DROPPING SOON' | 'RESTOCK';
  isFeatured?: boolean;
  isNew?: boolean;
  shortDesc: string;
  longDesc: string;
  psychologyThesis: string;
  quote: string;
  specs: {
    gsm: number;
    fabric: string;
    weave: string;
    fit: string;
    weight: string;
    origin: string;
    treatment: string;
  };
  colors: ProductColor[];
  sizes: ProductVariant[];
  storytelling: StoryChapter[];
  reviews: Review[];
  rating: number;
  reviewCount: number;
  details: string[];
  care: string[];
}

export const PRODUCTS: Product[] = [
  {
    id: 'prod-01',
    category: 'hoodies',
    slug: 'the-ego-hoodie',
    code: 'ST-01-EGO',
    themeNumber: '01',
    themeName: 'EGO',
    title: 'THE EGO HOODIE',
    subtitle: '650 GSM Heavyweight French Terry',
    price: 240,
    compareAtPrice: 280,
    badge: 'CORE ARCHIVE',
    isFeatured: true,
    isNew: false,
    shortDesc: 'Constructed to shield the identity you curated. Engineered with reinforced double-faced hood and blind tonal embroidery.',
    longDesc: 'The Ego Hoodie explores the subconscious armor constructed to protect perceived self-worth. Featuring a formidable 650 GSM custom-milled organic French terry cotton with an unyielding architectural drape that never sags. Finished with high-density blind embroidery on the thoracic axis.',
    psychologyThesis: 'Everyone passionately protects the version of themselves they created. The Ego garment exists at the intersection between defense mechanism and deliberate silhouette.',
    quote: 'EGO ALWAYS LEAVES A TRACE.',
    specs: {
      gsm: 650,
      fabric: '100% Organic Ring-Spun Cotton',
      weave: 'Interlocking Double Loop Terry',
      fit: 'Oversized Boxy',
      weight: '1.42 kg',
      origin: 'Milled in Milan, Assembled in Portugal',
      treatment: 'Cold-pigment washed for dimensional obsidian tone'
    },
    colors: [
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-01' },
      { name: 'Washed Obsidian', hex: '#1c1c1f', code: 'WO-02' },
      { name: 'Slate Bone', hex: '#deded7', code: 'SB-03' }
    ],
    sizes: [
      { size: 'S', stock: 8 },
      { size: 'M', stock: 14 },
      { size: 'L', stock: 4 },
      { size: 'XL', stock: 11 },
      { size: 'XXL', stock: 2 }
    ],
    storytelling: [
      {
        title: '01 // ARCHITECTURAL DRAPE',
        subtitle: '650 GSM High-Density Fleece',
        description: 'Milled without synthetic blends. The heavyweight loopback cotton creates a structured silhouette that maintains its clean boxy posture across all body types.',
        focusPoint: 'front',
        detailNote: 'Zero-drape sag index'
      },
      {
        title: '02 // BLIND TONAL RUNES',
        subtitle: 'High-Density Micro-Stitch',
        description: 'Inscribed with tone-on-tone coordinates along the spine. Visible only at intimate proximity or shifting angles of light.',
        focusPoint: 'back',
        detailNote: 'Micro-density stitch depth: 1.2mm'
      },
      {
        title: '03 // DOUBLE-WALLED SANCTUARY',
        subtitle: 'Crossover Acoustic Hood',
        description: 'Engineered with double self-fabric layers to eliminate drawstrings. Offers peripheral isolation and structural poise.',
        focusPoint: 'hood',
        detailNote: 'Seamless neckline construction'
      },
      {
        title: '04 // ERGONOMIC ARMOR CUFFS',
        subtitle: '1x1 Spun Rib Compression',
        description: 'Dense 450 GSM ribbing engineered with subtle thumb anchors. Holds securely above wrists during movement.',
        focusPoint: 'cuff',
        detailNote: 'Pre-shrunk Japanese thread'
      }
    ],
    reviews: [
      {
        id: 'rev-1',
        author: 'Example reviewer',
        location: 'Preview',
        rating: 5,
        date: '2026-07-14',
        title: 'Unprecedented fabric weight and presence',
        comment: 'The 650 GSM is no exaggeration. It stands with the weight of an overcoat yet feels seamless against skin. The absence of logos makes it intensely personal.',
        verified: true,
        sizePurchased: 'Size L'
      },
      {
        id: 'rev-2',
        author: 'Example reviewer',
        location: 'Preview',
        rating: 5,
        date: '2026-08-02',
        title: 'The hood construction is perfection',
        comment: 'Zero floppiness. The collar stands upright and blocks the world out. Best luxury hoodie in my collection.',
        verified: true,
        sizePurchased: 'Size M'
      }
    ],
    rating: 4.95,
    reviewCount: 48,
    details: [
      '650 GSM Organic combed cotton loopback fleece',
      'Double-lined seamless cross-over hood (no drawstrings)',
      'Dropped shoulder with ergonomic reverse flatlock stitching',
      'Hidden internal monologue quote woven on inner pocket liner',
      'Pre-shrunk 0% shrinkage guarantee'
    ],
    care: [
      'Machine wash cold inside out (30°C / 85°F)',
      'Do not tumble dry — dry flat in shade',
      'Iron low if needed (avoid direct print contact)',
      'Do not bleach or dry clean'
    ]
  },
  {
    id: 'prod-02',
    category: 'hoodies',
    slug: 'the-perception-hoodie',
    code: 'ST-02-PERC',
    themeNumber: '02',
    themeName: 'PERCEPTION',
    title: 'THE PERCEPTION HOODIE',
    subtitle: '700 GSM Structural Interlock Terry',
    price: 260,
    compareAtPrice: 295,
    badge: 'LIMITED RELEASE',
    isFeatured: true,
    isNew: true,
    shortDesc: 'What people see is rarely what they understand. Optical tonal shifts woven directly into matte garment-dyed cotton.',
    longDesc: 'The Perception Hoodie plays with optical depth and tactile illusion. Crafted from a heavyweight 700 GSM interlock weave that captures shadow in low light and reveals micro-slub texturing in daylight. Finished with internal hem adjustments.',
    psychologyThesis: 'Perception is not reality; it is a calculated negotiation between the viewer’s prejudices and the wearer’s deliberate omissions.',
    quote: 'YOU NOTICE LESS THAN YOU THINK.',
    specs: {
      gsm: 700,
      fabric: '100% GOTS Certified Long-Staple Cotton',
      weave: 'Dense Interlock Double Knit',
      fit: 'Structured Relaxed',
      weight: '1.55 kg',
      origin: 'Kyoto Dye Atelier, Assembled in Portugal',
      treatment: 'Enzyme bio-wash with micro-abrasion edges'
    },
    colors: [
      { name: 'Washed Obsidian', hex: '#161618', code: 'WO-01' },
      { name: 'Carbon Ash', hex: '#232326', code: 'CA-02' }
    ],
    sizes: [
      { size: 'S', stock: 3 },
      { size: 'M', stock: 9 },
      { size: 'L', stock: 6 },
      { size: 'XL', stock: 2 },
      { size: 'XXL', stock: 1 }
    ],
    storytelling: [
      {
        title: '01 // OPTICAL DEPTH WEAVE',
        subtitle: '700 GSM Dense Interlock',
        description: 'Specially twisted dual-gauge yarn absorbs ambient reflections to create a deep matte void appearance.',
        focusPoint: 'fabric',
        detailNote: 'Yarn gauge: 30/2 Compact Ring Spun'
      },
      {
        title: '02 // THE OBSERVER EMBROIDERY',
        subtitle: 'Tonal Blind Stamp',
        description: 'Micro-embroidered message along the inner wrist cuff for the wearer alone: "WHAT YOU SEE IS AN ESTIMATE."',
        focusPoint: 'cuff',
        detailNote: 'Hidden inside left cuff hem'
      }
    ],
    reviews: [
      {
        id: 'rev-3',
        author: 'Example reviewer',
        location: 'Preview',
        rating: 5,
        date: '2026-08-11',
        title: 'Dark psychology translated into luxury cloth',
        comment: 'The weight is shocking in the best way. The neckline structure frames the jawline perfectly.',
        verified: true,
        sizePurchased: 'Size XL'
      }
    ],
    rating: 5.0,
    reviewCount: 32,
    details: [
      '700 GSM Dense interlock cotton knit',
      'Stealth kangaroo pocket with hidden magnetic coin pocket',
      'Articulated sleeves with elbow articulation darting',
      'Tonal micro-patch branding on nape'
    ],
    care: [
      'Machine wash gentle cold',
      'Reshape whilst damp',
      'Dry flat away from direct heat'
    ]
  },
  {
    id: 'prod-03',
    category: 'hoodies',
    slug: 'the-control-hoodie',
    code: 'ST-03-CTRL',
    themeNumber: '03',
    themeName: 'CONTROL',
    title: 'THE CONTROL HOODIE',
    subtitle: '620 GSM Compact Carbon Fleece',
    price: 235,
    badge: 'CORE ARCHIVE',
    isFeatured: true,
    isNew: false,
    shortDesc: 'The strongest influence is the one you never notice. Precision seam architecture and unyielding geometric symmetry.',
    longDesc: 'The Control Hoodie embodies tactical restraint. Every seam has been repositioned away from natural wear zones, giving the wearer an unbroken silhouette that projects absolute composure.',
    psychologyThesis: 'Control is rarely loud. Genuine authority operates through quiet predictability, structural consistency, and absolute self-command.',
    quote: 'INFLUENCE WITHOUT DECLARATION.',
    specs: {
      gsm: 620,
      fabric: '100% Combed Compact Cotton',
      weave: 'Tightly Knitted diagonal loopback',
      fit: 'Tailored Drop-Shoulder',
      weight: '1.38 kg',
      origin: 'Porto, Portugal',
      treatment: 'Silicone garment wash for buttery hand-feel'
    },
    colors: [
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-01' },
      { name: 'Slate Bone', hex: '#deded7', code: 'SB-02' }
    ],
    sizes: [
      { size: 'S', stock: 12 },
      { size: 'M', stock: 18 },
      { size: 'L', stock: 15 },
      { size: 'XL', stock: 7 },
      { size: 'XXL', stock: 4 }
    ],
    storytelling: [
      {
        title: '01 // DISPLACED TACTICAL SEAMS',
        subtitle: 'Geometric Balance',
        description: 'Side seams are rotated 15 degrees forward to contour naturally with arm swing and posture.',
        focusPoint: 'front',
        detailNote: 'Rotated side panel construction'
      }
    ],
    reviews: [
      {
        id: 'rev-4',
        author: 'Example reviewer',
        location: 'Preview',
        rating: 4.9,
        date: '2026-07-28',
        title: 'Minimalist mastery',
        comment: 'Cleanest lines I have ever seen on a luxury streetwear piece.',
        verified: true,
        sizePurchased: 'Size L'
      }
    ],
    rating: 4.9,
    reviewCount: 54,
    details: [
      '620 GSM Compact-spun yarn',
      'Forward-rotated ergonomic side seams',
      'High-gauge ribbed waistband with memory elasticity',
      'Internal serialized production number tag'
    ],
    care: [
      'Wash cold inside out',
      'Dry naturally',
      'Cool iron on reverse'
    ]
  },
  {
    id: 'prod-04',
    category: 'hoodies',
    slug: 'the-obsession-hoodie',
    code: 'ST-04-OBSS',
    themeNumber: '04',
    themeName: 'OBSESSION',
    title: 'THE OBSESSION HOODIE',
    subtitle: '680 GSM Heavy Brushed Fleece',
    price: 250,
    badge: 'LIMITED RELEASE',
    isFeatured: true,
    isNew: true,
    shortDesc: 'Hyper-focus distilled to physical form. Brushed interior for thermal isolation and deep textural exterior.',
    longDesc: 'Constructed for those whose dedication surpasses reasonable boundaries. The Obsession Hoodie features a brushed velvet-touch interior coupled with an abrasion-resistant outer face that endures intensive daily wear.',
    psychologyThesis: 'Obsession is simply focus that made everyone else uncomfortable. Wear your intensity as an immaculate, unshakeable layer.',
    quote: 'FOCUS CONSUMED TO THE POINT OF DISTORTION.',
    specs: {
      gsm: 680,
      fabric: '100% Suvin-Hybrid Cotton',
      weave: 'Heavy Brushed Back Terry',
      fit: 'Oversized Boxy',
      weight: '1.48 kg',
      origin: 'Assembled in Portugal',
      treatment: 'Double carbon peach finish'
    },
    colors: [
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-01' },
      { name: 'Washed Charcoal', hex: '#28282b', code: 'WC-02' }
    ],
    sizes: [
      { size: 'S', stock: 5 },
      { size: 'M', stock: 8 },
      { size: 'L', stock: 3 },
      { size: 'XL', stock: 5 },
      { size: 'XXL', stock: 0 }
    ],
    storytelling: [
      {
        title: '01 // VELVET-SHEAR INTERIOR',
        subtitle: 'Thermal Microclimate',
        description: 'Micro-brushed internal loops insulate body heat while remaining completely breathable.',
        focusPoint: 'fabric',
        detailNote: 'Carbon fleece shearing'
      }
    ],
    reviews: [],
    rating: 5.0,
    reviewCount: 19,
    details: [
      '680 GSM Double-brushed cotton fleece',
      'Reinforced shoulder tape',
      'Heavyweight 500 GSM neck rib'
    ],
    care: ['Gentle cold wash', 'Flat dry']
  },
  {
    id: 'prod-05',
    category: 'hoodies',
    slug: 'the-silence-hoodie',
    code: 'ST-05-SLNC',
    themeNumber: '05',
    themeName: 'SILENCE',
    title: 'THE SILENCE HOODIE',
    subtitle: '600 GSM Acoustic Dampening Terry',
    price: 225,
    badge: 'CORE ARCHIVE',
    isFeatured: false,
    isNew: false,
    shortDesc: 'The quietest person in the room holds the greatest bandwidth. Zero hardware, zero noise, pure spatial calm.',
    longDesc: 'Designed to eliminate external distraction. Built with an acoustically dense hood lining that gently dampens ambient high frequencies when pulled over.',
    psychologyThesis: 'Silence is not the absence of thought; it is the deliberate refusal to leak power through unnecessary speech.',
    quote: 'THE QUIETEST ENTITY HOLDS THE GREATEST BANDWIDTH.',
    specs: {
      gsm: 600,
      fabric: '100% Pima Cotton',
      weave: 'Closed Loop Terry',
      fit: 'Structured Relaxed',
      weight: '1.30 kg',
      origin: 'Portugal',
      treatment: 'Pre-washed with volcanic pumice'
    },
    colors: [
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-01' },
      { name: 'Chalk Bone', hex: '#e8e8e2', code: 'CB-02' }
    ],
    sizes: [
      { size: 'S', stock: 10 },
      { size: 'M', stock: 22 },
      { size: 'L', stock: 16 },
      { size: 'XL', stock: 9 },
      { size: 'XXL', stock: 3 }
    ],
    storytelling: [],
    reviews: [],
    rating: 4.88,
    reviewCount: 41,
    details: ['600 GSM Pima Cotton', 'Acoustic double hood', 'Seamless side ribbing'],
    care: ['Machine wash cold', 'Lay flat to dry']
  },
  {
    id: 'prod-06',
    category: 'hoodies',
    slug: 'the-influence-hoodie',
    code: 'ST-06-INFL',
    themeNumber: '06',
    themeName: 'INFLUENCE',
    title: 'THE INFLUENCE HOODIE',
    subtitle: '640 GSM Diagonal Weave Terry',
    price: 245,
    badge: 'CORE ARCHIVE',
    isFeatured: false,
    isNew: false,
    shortDesc: 'The subtle architecture of guided decision. Subtle contrasting micro-piping along inner seam allowances.',
    longDesc: 'The Influence Hoodie investigates how subtle structural cues reshape perception. Featuring an internal crimson seam tape that is only visible when the garment is handled or resting open.',
    psychologyThesis: 'True influence does not force compliance; it reshapes the environment until the intended outcome feels like their own discovery.',
    quote: 'SHAPE THE ENVIRONMENT, NOT THE ARGUMENT.',
    specs: {
      gsm: 640,
      fabric: '100% Organic Cotton',
      weave: 'Diagonal Twill Terry',
      fit: 'Tailored Drop-Shoulder',
      weight: '1.40 kg',
      origin: 'Portugal',
      treatment: 'Washed obsidian garment dye'
    },
    colors: [
      { name: 'Washed Obsidian', hex: '#161618', code: 'WO-01' }
    ],
    sizes: [
      { size: 'S', stock: 6 },
      { size: 'M', stock: 11 },
      { size: 'L', stock: 7 },
      { size: 'XL', stock: 4 },
      { size: 'XXL', stock: 2 }
    ],
    storytelling: [],
    reviews: [],
    rating: 4.92,
    reviewCount: 27,
    details: ['640 GSM Diagonal twill terry', 'Subtle internal crimson seam binding', 'Reinforced hem'],
    care: ['Machine wash cold', 'Dry flat']
  },
  {
    id: 'prod-07',
    category: 'hoodies',
    slug: 'the-temptation-hoodie',
    code: 'ST-07-TMPT',
    themeNumber: '07',
    themeName: 'TEMPTATION',
    title: 'THE TEMPTATION HOODIE',
    subtitle: '660 GSM Silk-Cotton Blend Fleece',
    price: 275,
    compareAtPrice: 320,
    badge: 'LIMITED RELEASE',
    isFeatured: true,
    isNew: true,
    shortDesc: 'Desire engineered at the cognitive threshold. 15% Mulberry silk blended with 85% long-staple cotton for unmatched drape.',
    longDesc: 'A study in tactile desire. The addition of raw Mulberry silk fibers gives this hoodie a liquid-heavy drape and a subtle low-luster sheen that absorbs and scatters light unlike any traditional cotton.',
    psychologyThesis: 'Temptation thrives on curiosity. Give them just enough detail to ignite their imagination, but never enough to satisfy it.',
    quote: 'DESIRE IS ENGINEERED IN WHAT REMAINS UNSEEN.',
    specs: {
      gsm: 660,
      fabric: '85% Long-Staple Cotton, 15% Mulberry Silk',
      weave: 'Silk-Infused French Terry',
      fit: 'Oversized Boxy',
      weight: '1.45 kg',
      origin: 'Como, Italy & Portugal',
      treatment: 'Silk enzyme polish'
    },
    colors: [
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-01' },
      { name: 'Midnight Charcoal', hex: '#1d1e24', code: 'MC-02' }
    ],
    sizes: [
      { size: 'S', stock: 4 },
      { size: 'M', stock: 7 },
      { size: 'L', stock: 2 },
      { size: 'XL', stock: 3 },
      { size: 'XXL', stock: 1 }
    ],
    storytelling: [],
    reviews: [],
    rating: 5.0,
    reviewCount: 15,
    details: ['15% Silk / 85% Cotton blend', 'Subtle low-luster finish', 'Hand-finished edge trims'],
    care: ['Hand wash or cold wool cycle only', 'Dry flat', 'Do not tumble dry']
  },
  {
    id: 'prod-08',
    category: 'hoodies',
    slug: 'the-power-hoodie',
    code: 'ST-08-POWR',
    themeNumber: '08',
    themeName: 'POWER',
    title: 'THE POWER HOODIE',
    subtitle: '720 GSM Armor-Grade Heavy Fleece',
    price: 285,
    badge: 'CORE ARCHIVE',
    isFeatured: false,
    isNew: false,
    shortDesc: 'Authority without declaration. The heaviest piece in our atelier archive.',
    longDesc: 'Weighing over 1.6 kilograms, The Power Hoodie represents our most uncompromising construction. An unyielding physical barrier that exudes absolute command.',
    psychologyThesis: 'Those who possess genuine power have no incentive to flaunt it. Understatement is the ultimate flex.',
    quote: 'THE HIGHEST FORM OF POWER IS SILENT ASSURANCE.',
    specs: {
      gsm: 720,
      fabric: '100% Ultra-Dense Ring-Spun Cotton',
      weave: 'Triple-Spun Armor Weave',
      fit: 'Structured Boxy',
      weight: '1.68 kg',
      origin: 'Portugal',
      treatment: 'Pre-shrunk cold washed'
    },
    colors: [
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-01' }
    ],
    sizes: [
      { size: 'S', stock: 5 },
      { size: 'M', stock: 12 },
      { size: 'L', stock: 8 },
      { size: 'XL', stock: 6 },
      { size: 'XXL', stock: 2 }
    ],
    storytelling: [],
    reviews: [],
    rating: 4.97,
    reviewCount: 38,
    details: ['720 GSM heaviest weight in production', 'Triple-needle flatlock seams', 'Armored hood'],
    care: ['Machine wash cold', 'Lay flat to dry']
  },
  {
    id: 'prod-09',
    category: 'hoodies',
    slug: 'the-deception-hoodie',
    code: 'ST-09-DCPT',
    themeNumber: '09',
    themeName: 'DECEPTION',
    title: 'THE DECEPTION HOODIE',
    subtitle: '630 GSM Reversible Double Knit',
    price: 255,
    badge: 'LIMITED RELEASE',
    isFeatured: false,
    isNew: true,
    shortDesc: 'Symmetry masking calculated intent. Reversible dual-tone face with hidden internal pockets.',
    longDesc: 'Two identities in a single silhouette. Reversible construction allows switching between a clean Void Black exterior and a textured Washed Obsidian reverse face.',
    psychologyThesis: 'Deception succeeds not by concealing reality, but by providing a perfectly believable alternative.',
    quote: 'SYMMETRY MASKING INTENT.',
    specs: {
      gsm: 630,
      fabric: '100% Combed Cotton',
      weave: 'Double-Sided Interlock',
      fit: 'Oversized Boxy',
      weight: '1.40 kg',
      origin: 'Portugal',
      treatment: 'Dual-dye process'
    },
    colors: [
      { name: 'Dual Black / Ash', hex: '#111113', code: 'DB-01' }
    ],
    sizes: [
      { size: 'S', stock: 4 },
      { size: 'M', stock: 9 },
      { size: 'L', stock: 5 },
      { size: 'XL', stock: 3 },
      { size: 'XXL', stock: 0 }
    ],
    storytelling: [],
    reviews: [],
    rating: 4.91,
    reviewCount: 22,
    details: ['100% Fully reversible construction', 'Dual-entry pocket structure', 'No exposed seams'],
    care: ['Gentle cold wash', 'Flat dry']
  },
  {
    id: 'prod-10',
    category: 'hoodies',
    slug: 'the-self-awareness-hoodie',
    code: 'ST-10-AWRN',
    themeNumber: '10',
    themeName: 'SELF-AWARENESS',
    title: 'THE SELF-AWARENESS HOODIE',
    subtitle: '650 GSM Raw Unbleached / Carbon Organic Terry',
    price: 240,
    badge: 'CORE ARCHIVE',
    isFeatured: true,
    isNew: false,
    shortDesc: 'Observing the observer without illusion. Minimalist purity with raw tonal cotton fibers.',
    longDesc: 'The concluding chapter of our psychological exploration. Unfiltered, unadulterated organic cotton that embraces raw texture, micro-fiber character, and ultimate self-clarity.',
    psychologyThesis: 'Self-awareness is the ultimate weapon against external manipulation. When you know your own subconscious drivers, no one else can steer you.',
    quote: 'OBSERVE THE OBSERVER WITHOUT ILLUSION.',
    specs: {
      gsm: 650,
      fabric: '100% Raw Organic Combed Cotton',
      weave: 'Loopback Terry',
      fit: 'Structured Relaxed',
      weight: '1.42 kg',
      origin: 'Portugal',
      treatment: 'Unbleached natural or pure carbon'
    },
    colors: [
      { name: 'Chalk Bone', hex: '#edece6', code: 'CB-01' },
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-02' }
    ],
    sizes: [
      { size: 'S', stock: 11 },
      { size: 'M', stock: 15 },
      { size: 'L', stock: 12 },
      { size: 'XL', stock: 8 },
      { size: 'XXL', stock: 5 }
    ],
    storytelling: [],
    reviews: [],
    rating: 4.96,
    reviewCount: 63,
    details: ['650 GSM Organic cotton', 'Raw unbleached fiber flecks on Bone colorway', 'Double-lined collar'],
    care: ['Machine wash cold', 'Lay flat to dry']
  }
,
  {
    id: 'prod-11',
    slug: 'the-control-cargo-pant',
    code: 'ST-03-PNT',
    category: 'pants',
    themeNumber: '03',
    themeName: 'CONTROL',
    title: 'THE CONTROL CARGO PANT',
    subtitle: '480 GSM Heavy Japanese Cotton-Gabardine',
    price: 260,
    compareAtPrice: 310,
    badge: 'LIMITED RELEASE',
    isFeatured: true,
    isNew: true,
    shortDesc: 'Engineered for absolute command over silhouette. Ergonomic knee articulation with flush magnetic storm pockets.',
    longDesc: 'The Control Cargo Pant translates tactical discipline into high-fashion structural tailoring. Built from high-density 480 GSM Japanese cotton-gabardine, featuring dual flush storm cargo pockets with silent magnetic closures, reinforced seat panels, and articulated knee darting for unrestricted posture.',
    psychologyThesis: 'Control is not force; it is the total elimination of excess motion. These trousers provide deliberate structure without compromising tactile freedom.',
    quote: 'THE MAN WHO CONTROLS HIS FRAME CONTROLS THE ROOM.',
    specs: {
      gsm: 480,
      fabric: '100% Japanese Cotton Gabardine',
      weave: 'High-Density Military Twill',
      fit: 'Tailored Articulated',
      weight: '0.98 kg',
      origin: 'Milled in Okayama, Assembled in Portugal',
      treatment: 'Enzyme carbon washed for soft matte finish'
    },
    colors: [
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-01' },
      { name: 'Basalt Grey', hex: '#1f1f22', code: 'BG-02' },
      { name: 'Slate Bone', hex: '#deded7', code: 'SB-03' }
    ],
    sizes: [
      { size: 'S', stock: 12 },
      { size: 'M', stock: 18 },
      { size: 'L', stock: 14 },
      { size: 'XL', stock: 9 },
      { size: 'XXL', stock: 4 }
    ],
    storytelling: [
      {
        title: 'TACTILE COMMAND',
        subtitle: 'Engineered Motion Without Audio Distraction',
        description: 'Silent magnetic cargo flaps eliminate Velcro noise entirely, maintaining covert composure in any environment.',
        focusPoint: 'front',
        detailNote: 'Dual flush Neodymium magnetic storm closures'
      }
    ],
    reviews: [
      {
        id: 'rev-p11-1',
        author: 'Example reviewer',
        location: 'Preview',
        rating: 5,
        date: 'OCT 2026',
        title: 'The best structural cargos in luxury fashion.',
        comment: 'The drape over combat boots or minimal sneakers is perfection. Gabardine has zero shine and incredible density.',
        verified: true,
        sizePurchased: 'M'
      }
    ],
    rating: 4.97,
    reviewCount: 42,
    details: [
      '480 GSM Japanese Cotton-Gabardine',
      'Dual flush storm pockets with silent magnetic closures',
      'Articulated knee darts with ergonomic leg taper',
      'Heavyweight Excella matte black zipper fly',
      'Reinforced double-stitch seat panel'
    ],
    care: ['Machine wash cold inside out', 'Hang dry in shade', 'Cool iron on reverse']
  },
  {
    id: 'prod-12',
    slug: 'the-silence-pleated-trouser',
    code: 'ST-05-PNT',
    category: 'pants',
    themeNumber: '05',
    themeName: 'SILENCE',
    title: 'THE SILENCE PLEATED TROUSER',
    subtitle: '420 GSM Double-Pleated Wool-Cotton Twill',
    price: 290,
    compareAtPrice: 340,
    badge: 'CORE ARCHIVE',
    isFeatured: false,
    isNew: true,
    shortDesc: 'Double-pleated architectural drape that absorbs noise. Relaxed wide-leg tailored for effortless authority.',
    longDesc: 'Engineered to glide silently through spaces of high scrutiny. The Silence Pleated Trouser blends 420 GSM virgin wool and combed organic cotton in a deep double-pleated cut that drapes cleanly over heavy footwear without breaking.',
    psychologyThesis: 'Silence is the ultimate weapon of the observant. The garment offers zero rustle, zero visual excess, and total presence.',
    quote: 'SILENCE SPEAKS IN FREQUENCIES WORDS CANNOT REACH.',
    specs: {
      gsm: 420,
      fabric: '60% Virgin Wool / 40% Organic Combed Cotton',
      weave: 'Custom Double-Pleat Suiting Twill',
      fit: 'Relaxed Wide-Leg',
      weight: '0.85 kg',
      origin: 'Biella Wool Milled in Northern Italy',
      treatment: 'Decatized steam finished for permanent pleat memory'
    },
    colors: [
      { name: 'Washed Charcoal', hex: '#1a1a1c', code: 'WC-01' },
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-02' },
      { name: 'Bone Ivory', hex: '#e8e8e2', code: 'BI-03' }
    ],
    sizes: [
      { size: 'S', stock: 8 },
      { size: 'M', stock: 15 },
      { size: 'L', stock: 11 },
      { size: 'XL', stock: 6 },
      { size: 'XXL', stock: 3 }
    ],
    storytelling: [],
    reviews: [],
    rating: 4.95,
    reviewCount: 28,
    details: [
      '420 GSM Italian Wool-Cotton blend',
      'Dual deep architectural forward pleats',
      'Extended waistband tab with concealed horn button',
      'Wide-leg profile with zero break over boots'
    ],
    care: ['Dry clean only', 'Steam refresh recommended']
  },
  {
    id: 'prod-13',
    slug: 'the-perception-sweatpant',
    code: 'ST-02-PNT',
    category: 'pants',
    themeNumber: '02',
    themeName: 'PERCEPTION',
    title: 'THE PERCEPTION SWEATPANT',
    subtitle: '580 GSM French Terry Anatomical Lounge Pant',
    price: 210,
    compareAtPrice: 240,
    badge: 'CORE ARCHIVE',
    isFeatured: false,
    isNew: true,
    shortDesc: 'Subverting casual expectations with 580 GSM armor-weight terry and clean raw-edge vertical seams.',
    longDesc: 'Most treat sweatpants as surrender; we treat them as subversive armor. 580 GSM heavy loop French terry cut with an anatomical drop-crotch and zero drawstring hardware on the exterior. Vertical raw-edge seams elongate the silhouette while retaining maximum thermal insulation.',
    psychologyThesis: 'Perception is easily deceived by casual silhouettes. When constructed with armor-level density, the relaxed becomes formidable.',
    quote: 'THE CASUAL LOOK IS THE BEST CONCEALMENT.',
    specs: {
      gsm: 580,
      fabric: '100% GOTS Organic French Terry',
      weave: 'Dense Ring-Spun Interlock',
      fit: 'Structured Relaxed',
      weight: '1.15 kg',
      origin: 'Milled in Milan, Assembled in Porto',
      treatment: 'Pre-shrunk vintage bio-wash'
    },
    colors: [
      { name: 'Washed Obsidian', hex: '#1c1c1f', code: 'WO-01' },
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-02' },
      { name: 'Chalk Bone', hex: '#edece6', code: 'CB-03' }
    ],
    sizes: [
      { size: 'S', stock: 14 },
      { size: 'M', stock: 22 },
      { size: 'L', stock: 19 },
      { size: 'XL', stock: 10 },
      { size: 'XXL', stock: 5 }
    ],
    storytelling: [],
    reviews: [],
    rating: 4.93,
    reviewCount: 35,
    details: [
      '580 GSM Custom-milled French terry',
      'Concealed internal braided drawcord',
      'Raw-edge vertical leg seams',
      'Hidden zipper pocket inside right slant pocket'
    ],
    care: ['Machine wash cold', 'Lay flat to dry']
  },
  {
    id: 'prod-14',
    slug: 'the-obsession-utility-pant',
    code: 'ST-04-PNT',
    category: 'pants',
    themeNumber: '04',
    themeName: 'OBSESSION',
    title: 'THE OBSESSION UTILITY PANT',
    subtitle: '520 GSM Waxed Canvas Modular Utility Pant',
    price: 310,
    compareAtPrice: 360,
    badge: 'LIMITED RELEASE',
    isFeatured: true,
    isNew: true,
    shortDesc: 'Hand-waxed canvas that develops a unique patina with every wear. Ergonomic multi-tier tool pockets.',
    longDesc: 'Obsession demands perfection in repetition. Built from 520 GSM Scottish waxed cotton canvas with reinforced double-knee panels, custom matte black D-ring hardware, and hidden phone/passport security pockets along the hip line.',
    psychologyThesis: 'Obsession marks the surface. Like a mind fixated on a singular goal, waxed cotton records every bend, crease, and point of impact.',
    quote: 'OBSESSION IS NOT A VICE; IT IS AN ARCHITECTURAL METHOD.',
    specs: {
      gsm: 520,
      fabric: '100% Scottish Waxed Cotton Canvas',
      weave: 'Heavyweight Duck Weave',
      fit: 'Straight-Leg Technical',
      weight: '1.20 kg',
      origin: 'Waxed in Dundee, Tailored in Portugal',
      treatment: 'Paraffin hand-waxed weatherproofing'
    },
    colors: [
      { name: 'Graphite Ash', hex: '#222225', code: 'GA-01' },
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-02' }
    ],
    sizes: [
      { size: 'S', stock: 7 },
      { size: 'M', stock: 12 },
      { size: 'L', stock: 9 },
      { size: 'XL', stock: 5 },
      { size: 'XXL', stock: 2 }
    ],
    storytelling: [],
    reviews: [],
    rating: 4.98,
    reviewCount: 19,
    details: [
      '520 GSM Scottish Waxed Cotton Duck',
      'Reinforced double-knee articulation',
      'Modular matte black tactical D-rings',
      'Weather-resistant paraffin coating'
    ],
    care: ['Spot clean with cold water only', 'Do not machine wash or dry clean', 'Re-wax annually']
  },
  {
    id: 'prod-15',
    slug: 'the-ego-heavyweight-tee',
    code: 'ST-01-TEE',
    category: 'tees',
    themeNumber: '01',
    themeName: 'EGO',
    title: 'THE EGO HEAVYWEIGHT TEE',
    subtitle: '340 GSM Ring-Spun Boxy Tee',
    price: 120,
    compareAtPrice: 145,
    badge: 'CORE ARCHIVE',
    isFeatured: true,
    isNew: true,
    shortDesc: 'An impenetrable 340 GSM cotton tee that holds its boxy geometry without clinging or folding.',
    longDesc: 'The foundation of the wardrobe. Crafted with twice the density of standard luxury tees, using 340 GSM single-jersey organic cotton. Featuring seamless drop shoulders, a high 1.25-inch double-ribbed neck collar that never stretches, and blind tonal hem stitching.',
    psychologyThesis: 'A base layer should never feel vulnerable. The Ego Tee establishes posture from the skin out.',
    quote: 'FOUNDATIONS CANNOT WOBBLE.',
    specs: {
      gsm: 340,
      fabric: '100% Organic Ring-Spun Combed Cotton',
      weave: 'High-Gauge Single Jersey',
      fit: 'Oversized Boxy',
      weight: '0.48 kg',
      origin: 'Milled & Sewn in Portugal',
      treatment: 'Enzyme combed & carbon finished'
    },
    colors: [
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-01' },
      { name: 'Chalk Bone', hex: '#edece6', code: 'CB-02' },
      { name: 'Washed Charcoal', hex: '#1a1a1c', code: 'WC-03' }
    ],
    sizes: [
      { size: 'S', stock: 25 },
      { size: 'M', stock: 35 },
      { size: 'L', stock: 30 },
      { size: 'XL', stock: 20 },
      { size: 'XXL', stock: 10 }
    ],
    storytelling: [],
    reviews: [],
    rating: 4.96,
    reviewCount: 54,
    details: [
      '340 GSM Combed Ring-Spun Cotton',
      '1.25-inch high-density ribbed collar',
      'Dropped seamless shoulders',
      'Blind-stitched sleeves and hem'
    ],
    care: ['Machine wash cold', 'Lay flat to dry']
  },
  {
    id: 'prod-16',
    slug: 'the-deception-graphic-tee',
    code: 'ST-09-TEE',
    category: 'tees',
    themeNumber: '09',
    themeName: 'DECEPTION',
    title: 'THE DECEPTION GRAPHIC TEE',
    subtitle: '320 GSM Vintage Enzyme Washed Boxy Tee',
    price: 135,
    badge: 'LIMITED RELEASE',
    isFeatured: false,
    isNew: true,
    shortDesc: 'Distressed neckline with inverted mirage typography exploring perceptual illusions.',
    longDesc: 'Features an inverted mirage graphic printed in distressed water-based discharge ink that blends directly into the cotton fiber. 320 GSM heavy combed jersey subjected to a 4-hour stone enzyme bath for an authentically aged patina.',
    psychologyThesis: 'What you see is rarely what is there. Deception functions by feeding the observer what they already expect.',
    quote: 'THE TRUTH IS RARELY PURE AND NEVER SIMPLE.',
    specs: {
      gsm: 320,
      fabric: '100% Ring-Spun Cotton',
      weave: 'Vintage Single Jersey',
      fit: 'Oversized Boxy',
      weight: '0.45 kg',
      origin: 'Portugal',
      treatment: '4-hour mineral wash & hand-distressed collar'
    },
    colors: [
      { name: 'Washed Basalt', hex: '#1e1e21', code: 'WB-01' },
      { name: 'Bone Grey', hex: '#deded7', code: 'BG-02' }
    ],
    sizes: [
      { size: 'S', stock: 15 },
      { size: 'M', stock: 24 },
      { size: 'L', stock: 18 },
      { size: 'XL', stock: 12 },
      { size: 'XXL', stock: 6 }
    ],
    storytelling: [],
    reviews: [],
    rating: 4.91,
    reviewCount: 31,
    details: [
      '320 GSM Vintage jersey',
      'Hand-distressed collar and cuffs',
      'Discharge print soft-touch ink',
      'Boxy drop-shoulder silhouette'
    ],
    care: ['Machine wash cold inside out', 'Hang dry']
  },
  {
    id: 'prod-17',
    slug: 'the-power-bomber-jacket',
    code: 'ST-08-JKT',
    category: 'outerwear',
    themeNumber: '08',
    themeName: 'POWER',
    title: 'THE POWER BOMBER JACKET',
    subtitle: '850 GSM Quilted Wool-Nylon Heavy Flight Bomber',
    price: 480,
    compareAtPrice: 550,
    badge: 'LIMITED RELEASE',
    isFeatured: true,
    isNew: true,
    shortDesc: 'Substantial 850 GSM Melton wool exterior with Thinsulate diamond quilting and heavy two-way Excella zippers.',
    longDesc: 'An imposing architectural flight jacket designed to command space. Built from 850 GSM Italian Melton wool blended with ballistic nylon, insulated with recycled Thinsulate, and finished with custom Japanese matte black Excella zippers.',
    psychologyThesis: 'Power is not shouted; it is an undeniable physical density that alters the atmosphere of a room.',
    quote: 'FORCE REQUIRES EFFORT; POWER REQUIRES ONLY PRESENCE.',
    specs: {
      gsm: 850,
      fabric: '80% Melton Wool / 20% Ballistic Nylon',
      weave: 'Compact Double-Faced Melton',
      fit: 'Structured Boxy Armor',
      weight: '2.10 kg',
      origin: 'Milled in Prato, Italy / Assembled in Porto',
      treatment: 'Water-repellent Teflon fabric shield'
    },
    colors: [
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-01' },
      { name: 'Dark Basalt', hex: '#19191c', code: 'DB-02' }
    ],
    sizes: [
      { size: 'S', stock: 5 },
      { size: 'M', stock: 9 },
      { size: 'L', stock: 8 },
      { size: 'XL', stock: 4 },
      { size: 'XXL', stock: 2 }
    ],
    storytelling: [],
    reviews: [],
    rating: 4.99,
    reviewCount: 24,
    details: [
      '850 GSM Italian Melton Wool',
      'Two-way matte black YKK Excella zippers',
      'Diamond-quilted thermal lining with Thinsulate padding',
      'Dual snap-closure chest storm pockets',
      'Ribbed virgin wool cuffs and waistband'
    ],
    care: ['Specialist dry clean only']
  },
  {
    id: 'prod-18',
    slug: 'the-influence-noragi-jacket',
    code: 'ST-06-JKT',
    category: 'outerwear',
    themeNumber: '06',
    themeName: 'INFLUENCE',
    title: 'THE INFLUENCE NORAGI JACKET',
    subtitle: '600 GSM Structural Raw Cotton Canvas Overcoat',
    price: 380,
    badge: 'CORE ARCHIVE',
    isFeatured: false,
    isNew: true,
    shortDesc: 'Traditional Japanese workwear silhouette modernized with clean magnetic chest closures and raw selvedge drape.',
    longDesc: 'An open-front architectural overcoat constructed from 600 GSM unwashed Japanese kurashiki cotton canvas. Features wide drop-cut kimono sleeves, concealed Neodymium magnetic closures, and deep ergonomic side slant pockets.',
    psychologyThesis: 'Influence redirects the momentum of others rather than resisting it directly.',
    quote: 'THE HIGHEST ART OF INFLUENCE IS TO BE INVISIBLE.',
    specs: {
      gsm: 600,
      fabric: '100% Kurashiki Cotton Canvas',
      weave: 'Heavy Selvedge Duck Canvas',
      fit: 'Structured Relaxed',
      weight: '1.35 kg',
      origin: 'Okayama, Japan',
      treatment: 'Sanforized raw finish'
    },
    colors: [
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-01' },
      { name: 'Slate Bone', hex: '#deded7', code: 'SB-02' },
      { name: 'Charcoal Indigo', hex: '#14171c', code: 'CI-03' }
    ],
    sizes: [
      { size: 'S', stock: 8 },
      { size: 'M', stock: 14 },
      { size: 'L', stock: 12 },
      { size: 'XL', stock: 7 },
      { size: 'XXL', stock: 3 }
    ],
    storytelling: [],
    reviews: [],
    rating: 4.94,
    reviewCount: 18,
    details: [
      '600 GSM Raw Kurashiki Duck Canvas',
      'Concealed Neodymium magnetic chest closures',
      'Wide architectural kimono sleeve construction',
      'Deep interior document pockets'
    ],
    care: ['Spot clean or dry clean', 'Air dry']
  },
  {
    id: 'prod-19',
    slug: 'the-temptation-leather-tote',
    code: 'ST-07-ACC',
    category: 'accessories',
    themeNumber: '07',
    themeName: 'TEMPTATION',
    title: 'THE TEMPTATION LEATHER TOTE',
    subtitle: 'Full-Grain Italian Vegetable-Tanned Architectural Tote',
    price: 340,
    badge: 'LIMITED RELEASE',
    isFeatured: false,
    isNew: true,
    shortDesc: 'Seamless folded 2.8mm Tuscan bridle leather with custom matte PVD hardware and interior laptop vault.',
    longDesc: 'Cut from a single uninterrupted hide of 2.8mm full-grain Tuscan vegetable-tanned leather. The Temptation Tote eliminates all visible external seams, folding like an origami sculpture into a self-standing rectangular volume.',
    psychologyThesis: 'Temptation operates on the senses before reason can intervene. Tactile leather with unadorned geometry.',
    quote: 'WHAT IS IRRESISTIBLE NEEDS NO EXPLANATION.',
    specs: {
      gsm: 0,
      fabric: '100% Tuscan Full-Grain Vegetable-Tanned Cowhide',
      weave: '2.8mm Bridle Leather',
      fit: 'One Size (16" Laptop Capacity)',
      weight: '1.10 kg',
      origin: 'Ponte a Egola, Tuscany, Italy',
      treatment: 'Hand-waxed with organic beeswax edge-finishing'
    },
    colors: [
      { name: 'Obsidian Black', hex: '#080808', code: 'OB-01' },
      { name: 'Dark Espresso', hex: '#17120e', code: 'DE-02' }
    ],
    sizes: [
      { size: 'M', stock: 12 }
    ],
    storytelling: [],
    reviews: [],
    rating: 4.98,
    reviewCount: 22,
    details: [
      '2.8mm Tuscan Full-Grain Vegetable-Tanned Leather',
      'Seamless origami folded construction',
      'Padded internal 16" laptop sleeve',
      'Matte black PVD hardware hooks'
    ],
    care: ['Condition with natural leather wax annually', 'Store in dust bag']
  },
  {
    id: 'prod-20',
    slug: 'the-cortex-merino-balaclava',
    code: 'ST-10-ACC',
    category: 'accessories',
    themeNumber: '10',
    themeName: 'AWARENESS',
    title: 'THE CORTEX MERINO BALACLAVA',
    subtitle: '100% Extra-Fine 3-Ply Merino Acoustic Ribbed Knit',
    price: 110,
    badge: 'CORE ARCHIVE',
    isFeatured: false,
    isNew: true,
    shortDesc: 'Acoustic dampening knit that protects identity and blocks wind chill. Form-fitting ergonomic eye aperture.',
    longDesc: 'Spun from ultra-fine 19.5-micron Australian merino wool knitted in Biella, Italy into a dense 3-ply rib. Engineered with an articulated facial aperture that can be worn full-face, pulled under the chin as a gaiter, or folded as a watch cap.',
    psychologyThesis: 'Complete awareness requires shutting out peripheral sensory pollution. A personal acoustic sanctuary.',
    quote: 'TO OBSERVE WITHOUT BEING OBSERVED.',
    specs: {
      gsm: 380,
      fabric: '100% Extra-Fine Australian Merino Wool',
      weave: '3-Ply 7-Gauge English Rib',
      fit: 'One Size Adaptive',
      weight: '0.22 kg',
      origin: 'Yarn spun in Biella, Italy / Knit in Scotland',
      treatment: 'Pure mountain water washed'
    },
    colors: [
      { name: 'Void Black', hex: '#0a0a0a', code: 'VB-01' },
      { name: 'Heather Charcoal', hex: '#252528', code: 'HC-02' },
      { name: 'Chalk Bone', hex: '#edece6', code: 'CB-03' }
    ],
    sizes: [
      { size: 'M', stock: 35 }
    ],
    storytelling: [],
    reviews: [],
    rating: 4.95,
    reviewCount: 46,
    details: [
      '100% Extra-Fine 19.5-micron Australian Merino Wool',
      'Multi-configuration (full mask, neck gaiter, watch cap)',
      'Acoustic-dampening 3-ply English rib knit',
      'Seamless 3D circular knitted crown'
    ],
    care: ['Hand wash cold with wool detergent', 'Dry flat on towel']
  }

];

export const COLLECTIONS = [
  {
    slug: 'volume-01-the-illusion-of-choice',
    title: 'VOLUME 01: THE ILLUSION OF CHOICE',
    subtitle: 'The Archetype of Perception and Ego',
    description: 'A study in curated armor and cognitive distortion. Featuring our flagship 650-700 GSM custom-milled hoodies, heavy gabardine cargos, and foundational tees.',
    itemCount: 6,
    heroImageColor: '#0c0c0e',
    year: '2026',
    items: ['the-ego-hoodie', 'the-perception-hoodie', 'the-control-cargo-pant', 'the-ego-heavyweight-tee', 'the-control-hoodie', 'the-obsession-utility-pant']
  },
  {
    slug: 'volume-02-silent-authority',
    title: 'VOLUME 02: SILENT AUTHORITY',
    subtitle: 'Restraint, Influence and Covert Power',
    description: 'Architectural streetwear engineered for those who influence outcomes without raising their voice. Heavy wool bombers, raw canvas noragis, and pleated trousers.',
    itemCount: 6,
    heroImageColor: '#121215',
    year: '2026',
    items: ['the-silence-hoodie', 'the-silence-pleated-trouser', 'the-power-bomber-jacket', 'the-influence-noragi-jacket', 'the-power-hoodie', 'the-cortex-merino-balaclava']
  },
  {
    slug: 'core-archive',
    title: 'CORE ARCHIVE // PERMANENT COLLECTION',
    subtitle: 'Seasonless High-Density Essentials',
    description: 'The foundational silhouettes that define the Subtext design philosophy. Always in rotation across hoodies, articulated pants, and heavy base layers.',
    itemCount: 8,
    heroImageColor: '#09090b',
    year: 'PERMANENT',
    items: ['the-ego-hoodie', 'the-control-cargo-pant', 'the-ego-heavyweight-tee', 'the-perception-sweatpant', 'the-silence-pleated-trouser', 'the-power-bomber-jacket', 'the-temptation-leather-tote', 'the-self-awareness-hoodie']
  }
];
