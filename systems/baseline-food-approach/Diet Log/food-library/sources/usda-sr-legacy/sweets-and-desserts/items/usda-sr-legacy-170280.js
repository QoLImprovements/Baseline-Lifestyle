/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "tablespoon",
  "description": "Sweets",
  "id": "usda-sr-legacy-170280",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "tablespoon",
      "kind": "unit",
      "label": "tablespoon"
    }
  ],
  "name": "Jams, preserves, marmalades, sweetened with fruit juice",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 52.9,
    "energy_kcal": 212.0,
    "fat_g": 0.0,
    "fibre_g": 0.9,
    "folate_ug": 7.0,
    "iron_mg": 0.34,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 65.0,
    "protein_g": 0.0,
    "salt_g": 0.0,
    "sat_fat_g": 0.0,
    "sodium_mg": 0.0,
    "sugar_g": 42.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 18.1,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170280",
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
