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
  "id": "usda-sr-legacy-172732",
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
      "gramsPerUnit": 7.0,
      "key": "cookie-medium-1-5-8-dia",
      "kind": "unit",
      "label": "cookie, medium (1-5/8\" dia)"
    }
  ],
  "name": "Cookies, chocolate chip, commercially prepared, special dietary",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 73.4,
    "energy_kcal": 1880.0,
    "fat_g": 16.8,
    "fibre_g": 1.6,
    "folate_ug": 54.0,
    "iron_mg": 3.5,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 109.0,
    "potassium_mg": 199.0,
    "protein_g": 3.9,
    "salt_g": 0.61,
    "sat_fat_g": 4.18,
    "sodium_mg": 244.0,
    "sugar_g": 39.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.06,
    "vitamin_k_ug": 4.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172732",
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
