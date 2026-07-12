/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "g",
  "description": "Literature sources",
  "id": "cofid-current-13-882",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rosemary, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1280.0,
    "carbs_g": 46.4,
    "energy_kcal": 331.0,
    "fat_g": 15.2,
    "fibre_g": 42.6,
    "folate_ug": 307.0,
    "iron_mg": 29.3,
    "magnesium_mg": 220.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 950.0,
    "protein_g": 4.9,
    "salt_g": 0.125,
    "sat_fat_g": 7.37,
    "sodium_mg": 50.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 313.0,
    "vitamin_c_mg": 61.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "13-882",
  "state": "Dried",
  "subcategory": "H",
  "tags": [
    "dried",
    "h",
    "herbs-spices-and-seasonings"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
