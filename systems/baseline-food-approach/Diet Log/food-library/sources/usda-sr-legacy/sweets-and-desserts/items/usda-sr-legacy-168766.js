/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece",
  "description": "Sweets",
  "id": "usda-sr-legacy-168766",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 8.4,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "serving-5-mints",
      "kind": "unit",
      "label": "serving 5 mints"
    }
  ],
  "name": "Candies, NESTLE, AFTER EIGHT Mints",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 79.5,
    "energy_kcal": 432.0,
    "fat_g": 11.9,
    "fibre_g": 2.4,
    "folate_ug": 0.0,
    "iron_mg": 0.57,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 1.67,
    "salt_g": 0.0025,
    "sat_fat_g": 8.33,
    "sodium_mg": 1.0,
    "sugar_g": 66.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168766",
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
