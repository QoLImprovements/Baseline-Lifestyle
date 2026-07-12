/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection",
  "id": "cofid-current-15-279",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Rissoles, lentil, fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 22.0,
    "energy_kcal": 211.0,
    "fat_g": 10.5,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 3.6,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 140.0,
    "potassium_mg": 330.0,
    "protein_g": 8.9,
    "salt_g": 0.575,
    "sat_fat_g": 1.4,
    "sodium_mg": 230.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 149.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 4.51,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-279",
  "state": "Fried",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fried",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
