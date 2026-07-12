/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "g",
  "description": "Samples as fried in retail blend oil, fatty acids calculated.",
  "id": "cofid-current-16-500",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Plaice, in batter, fried in sunflower oil",
  "nutritionPerBasis": {
    "calcium_mg": 73.0,
    "carbs_g": 12.0,
    "energy_kcal": 257.0,
    "fat_g": 16.8,
    "fibre_g": 0.5,
    "folate_ug": 27.0,
    "iron_mg": 0.5,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 170.0,
    "potassium_mg": 210.0,
    "protein_g": 15.2,
    "salt_g": 0.525,
    "sat_fat_g": 8.66,
    "sodium_mg": 210.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-500",
  "state": "Fried",
  "subcategory": "JA",
  "tags": [
    "fried",
    "ja",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
