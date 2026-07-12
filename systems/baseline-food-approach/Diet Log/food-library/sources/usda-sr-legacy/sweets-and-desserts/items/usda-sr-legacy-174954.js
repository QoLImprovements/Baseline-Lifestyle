/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174954",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "cookie-medium-2-1-4-dia",
      "kind": "unit",
      "label": "cookie, medium (2-1/4\" dia)"
    }
  ],
  "name": "Cookies, chocolate chip, refrigerated dough, baked",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 68.2,
    "energy_kcal": 2060.0,
    "fat_g": 22.6,
    "fibre_g": 1.7,
    "folate_ug": 44.0,
    "iron_mg": 2.5,
    "magnesium_mg": 27.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 76.0,
    "potassium_mg": 200.0,
    "protein_g": 4.9,
    "salt_g": 0.58,
    "sat_fat_g": 7.76,
    "sodium_mg": 232.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174954",
  "state": "Baked",
  "subcategory": "Baked Products",
  "tags": [
    "baked",
    "baked-products",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
