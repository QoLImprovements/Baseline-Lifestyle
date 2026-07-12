/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cookie-large-include-keebler-rich-n-chips-pecan-chips-delux",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172716",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "cookie-large-include-keebler-rich-n-chips-pecan-chips-delux",
      "kind": "unit",
      "label": "cookie, large (include Keebler Rich 'n Chips, Pecan Chips Delux)"
    },
    {
      "gramsPerUnit": 12.2,
      "key": "cookie-average-weight-of-1-cookie-variety-of-brands",
      "kind": "unit",
      "label": "cookie (average weight of 1 cookie, variety of brands)"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "cookie-big-3-1-2-4-dia-include-grandma-brand",
      "kind": "unit",
      "label": "cookie, big (3-1/2\" - 4\" dia) (include Grandma brand)"
    },
    {
      "gramsPerUnit": 2.2,
      "key": "cookie-bite-size-include-mini-chips-ahoy",
      "kind": "unit",
      "label": "cookie, bite size (include Mini Chips Ahoy!)"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "cookie-medium-2-1-4-dia",
      "kind": "unit",
      "label": "cookie, medium (2-1/4\" dia)"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "cookie-pepperidge-farm-chocolate-chunk-pecan",
      "kind": "unit",
      "label": "cookie Pepperidge Farm Chocolate Chunk Pecan"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 12.9,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    }
  ],
  "name": "Cookies, chocolate chip, commercially prepared, regular, higher fat, enriched",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 65.4,
    "energy_kcal": 2060.0,
    "fat_g": 24.7,
    "fibre_g": 2.0,
    "folate_ug": 72.0,
    "iron_mg": 5.58,
    "magnesium_mg": 41.0,
    "omega3_g": 0.842,
    "phosphorus_mg": 109.0,
    "potassium_mg": 171.0,
    "protein_g": 5.1,
    "salt_g": 0.7775,
    "sat_fat_g": 8.09,
    "sodium_mg": 311.0,
    "sugar_g": 32.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.01,
    "vitamin_k_ug": 33.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172716",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
