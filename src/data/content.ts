export interface MenuItem {
  id: string;
  name: string;
  category: "oats" | "sandwiches" | "nutriboxes" | "detox";
  description: string;
  calories: number;
  protein: string;
  carbs: string;
  fats: string;
  price: number;
  tags: string[];
  image: string;
  badge?: string;
}

export interface TransformationItem {
  id: string;
  name: string;
  city: string;
  duration: string;
  weightLoss: string;
  quote: string;
  dietFocus: string;
  image: string;
  likes: number;
}

export const CITIES = [
  "Vizianagaram Town",
  "Cantonment",
  "Mayuri Junction",
  "Ring Road",
  "Collectorate Road",
  "Balaji Nagar",
  "Kothavalasa",
];

export const MENU_ITEMS: MenuItem[] = [
  // 🥣 Overnight Oats
  {
    id: "oats-1",
    name: "Dark Chocolate Peanut Butter Oats",
    category: "oats",
    description: "Rolled oats steeped in almond milk, pure Belgian cacao, organic peanut butter, and chia seeds topped with dark choc drops.",
    calories: 380,
    protein: "24g",
    carbs: "42g",
    fats: "12g",
    price: 249,
    tags: ["Best Seller", "High Protein", "Pre-Workout"],
    image: "https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=800&q=80",
    badge: "🔥 Best Seller",
  },
  {
    id: "oats-2",
    name: "Wild Berry & Greek Yogurt Jar",
    category: "oats",
    description: "Cold soaked steel-cut oats layered with Greek yogurt, blueberry compote, raspberries, flax seeds & clover honey.",
    calories: 320,
    protein: "21g",
    carbs: "39g",
    fats: "7g",
    price: 269,
    tags: ["Antioxidant Rich", "Gut Friendly"],
    image: "https://images.unsplash.com/photo-1541658016709-82535e94bc69?auto=format&fit=crop&w=800&q=80",
    badge: "Popular",
  },
  {
    id: "oats-3",
    name: "Alfonso Mango Chia Protein Pudding",
    category: "oats",
    description: "Seasonal Alphonso mango pulp infused with whey isolate, creamy overnight oats, crushed walnuts & roasted pumpkin seeds.",
    calories: 340,
    protein: "26g",
    carbs: "44g",
    fats: "9g",
    price: 289,
    tags: ["Chef Special", "Seasonal Delight"],
    image: "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=800&q=80",
    badge: "Seasonal",
  },

  // 🥪 Sandwiches
  {
    id: "sand-1",
    name: "Tandoori Paneer Multigrain Panini",
    category: "sandwiches",
    description: "Low-fat marinated grilled paneer, mint yogurt spread, bell peppers, baby spinach in freshly toasted wholewheat sourdough.",
    calories: 410,
    protein: "28g",
    carbs: "38g",
    fats: "14g",
    price: 299,
    tags: ["Vegetarian", "High Protein"],
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?auto=format&fit=crop&w=800&q=80",
    badge: "Most Loved",
  },
  {
    id: "sand-2",
    name: "Herbed Chicken Breast Club",
    category: "sandwiches",
    description: "Sous-vide herb roasted chicken breast slices, English mustard, crisp iceberg lettuce, Roma tomatoes & boiled egg whites.",
    calories: 440,
    protein: "42g",
    carbs: "32g",
    fats: "11g",
    price: 349,
    tags: ["Lean Protein", "Post-Workout"],
    image: "https://images.unsplash.com/photo-1553909489-cd47e0907980?auto=format&fit=crop&w=800&q=80",
    badge: "Muscle Fuel",
  },
  {
    id: "sand-3",
    name: "Avocado & Smoked Tofu Sourdough",
    category: "sandwiches",
    description: "Smashed Hass avocado, cold-pressed olive oil, smoked artisanal tofu, microgreens and pink Himalayan salt on artisan sourdough.",
    calories: 360,
    protein: "22g",
    carbs: "36g",
    fats: "15g",
    price: 369,
    tags: ["100% Vegan", "Healthy Fats"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
    badge: "Superfood",
  },

  // 🥜 Nutri Boxes
  {
    id: "nutri-1",
    name: "Mediterranean Grilled Chicken Quinoa Box",
    category: "nutriboxes",
    description: "Zesty lemon-herb chicken breast strips, organic tricolor quinoa, Kalamata olives, cucumbers, cherry tomatoes & tzatziki dressing.",
    calories: 480,
    protein: "46g",
    carbs: "35g",
    fats: "12g",
    price: 389,
    tags: ["Fat Loss", "Zero Sugar"],
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
    badge: "Chef Signature",
  },
  {
    id: "nutri-2",
    name: "High-Protein Paneer Tikka Crunch Bowl",
    category: "nutriboxes",
    description: "Tandoori grilled cottage cheese cubes, spiced chickpeas, edamame beans, roasted broccoli and lemon coriander drizzle.",
    calories: 450,
    protein: "32g",
    carbs: "40g",
    fats: "15g",
    price: 349,
    tags: ["Power Bowl", "Fiber Rich"],
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    badge: "Bestseller",
  },
  {
    id: "nutri-3",
    name: "Keto Teriyaki Tofu & Avocado Greens",
    category: "nutriboxes",
    description: "Crispy air-fried tofu tossed in sugar-free tamari glaze with zucchini noodles, steamed edamame, sesame seeds and avocado chunks.",
    calories: 390,
    protein: "25g",
    carbs: "14g",
    fats: "22g",
    price: 369,
    tags: ["Keto Friendly", "Low Carb"],
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&w=800&q=80",
  },

  // 🍋 Detox Drinks
  {
    id: "detox-1",
    name: "Green Goddess Alkalizing Elixir",
    category: "detox",
    description: "Cold-pressed celery, green apple, cucumber, kale, fresh ginger, mint & lemon splash. Boosts immunity & reduces bloating.",
    calories: 85,
    protein: "3g",
    carbs: "18g",
    fats: "0.5g",
    price: 189,
    tags: ["Cold Pressed", "No Added Sugar"],
    image: "https://images.unsplash.com/photo-1556881286-fc6915169721?auto=format&fit=crop&w=800&q=80",
    badge: "Daily Cleanse",
  },
  {
    id: "detox-2",
    name: "Activated Charcoal & Aloe Hydrator",
    category: "detox",
    description: "Pure coconut water infused with food-grade activated bamboo charcoal, aloe vera pulp, lime extract and chia seed hydration.",
    calories: 60,
    protein: "1g",
    carbs: "12g",
    fats: "0g",
    price: 199,
    tags: ["Deep Detox", "Hydration"],
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "detox-3",
    name: "Beetroot Vitality & Ginger Stamina Booster",
    category: "detox",
    description: "Organic beetroot, pomegranate pearls, carrot, ginger root, and Himalayan pink salt. Natural nitric oxide pump.",
    calories: 110,
    protein: "2.5g",
    carbs: "24g",
    fats: "0.2g",
    price: 189,
    tags: ["Pre-Workout", "Heart Health"],
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80",
  },
];

export const TRANSFORMATIONS: TransformationItem[] = [
  {
    id: "trans-1",
    name: "Suresh Varma",
    city: "Vizianagaram (Cantonment)",
    duration: "Day 1 to Day 40",
    weightLoss: "-8.5 Kgs",
    quote: "I used to feel exhausted after work, but Haii Protein's detox & nutri box meal plan helped me a lot. Now I feel energized and light throughout the day!",
    dietFocus: "Lean Protein & Detox Cleanse",
    image: "/images/transformations.jpg",
    likes: 842,
  },
  {
    id: "trans-2",
    name: "Lakshmi Priya",
    city: "Vizianagaram (Ring Road)",
    duration: "Week 1 to Week 16",
    weightLoss: "-12 Kgs",
    quote: "It's not your basic boiled tasteless food! It's delicious gourmet sandwiches, overnight oats, and nutri boxes that are healthy, portion-controlled and extremely tasty right here in Vizianagaram.",
    dietFocus: "Calorie Deficit + Overnight Oats",
    image: "/images/transformations.jpg",
    likes: 1290,
  },
  {
    id: "trans-3",
    name: "Kiran Kumar",
    city: "Vizianagaram (Balaji Nagar)",
    duration: "3 Months",
    weightLoss: "Lost 4kg fat, gained muscle",
    quote: "Having healthy, fresh high-protein food delivered every morning in Vizianagaram has put my diet and workout routine completely on autopilot.",
    dietFocus: "High Protein Muscle Building",
    image: "/images/transformations.jpg",
    likes: 915,
  },
];

export const COMPARISON_POINTS = [
  {
    feature: "Meal Freshness",
    haii: "Prepared fresh every morning in small batches in Vizianagaram",
    others: "Frozen / stored in bulk cold storage for days",
    cooking: "Time consuming grocery, prep and daily cooking",
  },
  {
    feature: "Macro & Calorie Precision",
    haii: "Calculated to the exact gram by certified nutritionists",
    others: "Vague generic calorie estimates",
    cooking: "Hard to calculate exact oil and macro splits",
  },
  {
    feature: "Variety & Craving Satisfaction",
    haii: "250+ recipes: Oats, Paninis, Nutri Bowls, Detox Shakes",
    others: "Repetitive, boring bland boiled food",
    cooking: "Limited by daily pantry and recipe exhaustion",
  },
  {
    feature: "No Compromise Taste",
    haii: "Chef crafted with fresh aromatic herbs and natural spices",
    others: "Dry chicken and soggy steamed broccoli",
    cooking: "Often heavy on hidden oils and salts",
  },
  {
    feature: "Dedicated Nutritionist Support",
    haii: "1-on-1 WhatsApp nutritionist assigned to track weekly progress",
    others: "Automated bots or no support",
    cooking: "Self guided trial and error",
  },
];
