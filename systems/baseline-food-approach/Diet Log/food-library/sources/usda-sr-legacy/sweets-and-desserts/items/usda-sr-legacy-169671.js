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
  "id": "usda-sr-legacy-169671",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    }
  ],
  "name": "Candies, toffee, prepared-from-recipe",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 64.7,
    "energy_kcal": 560.0,
    "fat_g": 32.8,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 0.03,
    "magnesium_mg": 4.0,
    "omega3_g": 0.065,
    "phosphorus_mg": 32.0,
    "potassium_mg": 51.0,
    "protein_g": 1.07,
    "salt_g": 0.3375,
    "sat_fat_g": 20.6,
    "sodium_mg": 135.0,
    "sugar_g": 63.5,
    "vitamin_a_ug": 319.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.94,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169671",
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
