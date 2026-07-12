/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "27-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-167983",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "27-pieces",
      "kind": "unit",
      "label": "27 pieces"
    }
  ],
  "name": "Candies, TWIZZLERS NIBS CHERRY BITS",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 79.4,
    "energy_kcal": 1450.0,
    "fat_g": 2.64,
    "fibre_g": 0.6,
    "folate_ug": 0.0,
    "iron_mg": 0.28,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 37.0,
    "protein_g": 2.3,
    "salt_g": 0.4875,
    "sat_fat_g": 0.54,
    "sodium_mg": 195.0,
    "sugar_g": 51.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167983",
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
