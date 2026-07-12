/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar-1-94-oz",
  "description": "Sweets",
  "id": "usda-sr-legacy-169629",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 55.0,
      "key": "bar-1-94-oz",
      "kind": "unit",
      "label": "bar 1.94 oz"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "bar-king-size-2-8-oz",
      "kind": "unit",
      "label": "bar king size 2.8 oz"
    }
  ],
  "name": "Candies, HERSHEY, KIT KAT BIG KAT Bar",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 63.6,
    "energy_kcal": 520.0,
    "fat_g": 27.8,
    "fibre_g": 1.9,
    "folate_ug": 3.0,
    "iron_mg": 0.84,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 112.0,
    "potassium_mg": 294.0,
    "protein_g": 6.24,
    "salt_g": 0.16,
    "sat_fat_g": 18.0,
    "sodium_mg": 64.0,
    "sugar_g": 54.0,
    "vitamin_a_ug": 92.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169629",
  "state": "Unspecified",
  "subcategory": "Sweets",
  "tags": [
    "sweets",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
