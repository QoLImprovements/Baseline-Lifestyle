/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "20 samples, average of 10 Bhuna and 10 Madras",
  "id": "cofid-current-16-333",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, prawn, takeaway",
  "nutritionPerBasis": {
    "calcium_mg": 97.0,
    "carbs_g": 2.3,
    "energy_kcal": 118.0,
    "fat_g": 8.5,
    "fibre_g": 2.5,
    "folate_ug": 4.0,
    "iron_mg": 4.23,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 95.0,
    "potassium_mg": 198.0,
    "protein_g": 8.2,
    "salt_g": 0.7775,
    "sat_fat_g": 1.4,
    "sodium_mg": 311.0,
    "sugar_g": 1.4,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 3.16,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-333",
  "state": "Raw",
  "subcategory": "JR",
  "tags": [
    "fish-and-seafood",
    "jr",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
