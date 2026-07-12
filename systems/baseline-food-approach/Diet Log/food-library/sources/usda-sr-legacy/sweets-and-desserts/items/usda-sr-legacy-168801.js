/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "15-pieces",
  "description": "Sweets",
  "id": "usda-sr-legacy-168801",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "15-pieces",
      "kind": "unit",
      "label": "15 pieces"
    }
  ],
  "name": "Candies, HEATH BITES",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 63.4,
    "energy_kcal": 530.0,
    "fat_g": 30.4,
    "fibre_g": 2.0,
    "folate_ug": 1.0,
    "iron_mg": 0.78,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 71.0,
    "potassium_mg": 210.0,
    "protein_g": 3.94,
    "salt_g": 0.6125,
    "sat_fat_g": 15.6,
    "sodium_mg": 245.0,
    "sugar_g": 60.0,
    "vitamin_a_ug": 232.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168801",
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
