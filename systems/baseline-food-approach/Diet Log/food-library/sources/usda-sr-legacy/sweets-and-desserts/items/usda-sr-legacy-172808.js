/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "cookie-medium-2-1-4-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172808",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "cookie-medium-2-1-4-dia",
      "kind": "unit",
      "label": "cookie, medium (2-1/4\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, chocolate chip, prepared from recipe, made with butter",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 58.2,
    "energy_kcal": 2040.0,
    "fat_g": 28.4,
    "fibre_g": 0.0,
    "folate_ug": 33.0,
    "iron_mg": 2.48,
    "magnesium_mg": 55.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 100.0,
    "potassium_mg": 221.0,
    "protein_g": 5.7,
    "salt_g": 0.8525,
    "sat_fat_g": 14.1,
    "sodium_mg": 341.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 139.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172808",
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
