/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Calculated from 16-373 using edible conversion factor of 0.89",
  "id": "cofid-current-16-465",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Cod, flesh only, baked, weighed with bones and skin",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.0,
    "energy_kcal": 89.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 0.13,
    "magnesium_mg": 27.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 168.0,
    "potassium_mg": 327.0,
    "protein_g": 21.3,
    "salt_g": 0.2025,
    "sat_fat_g": 0.11,
    "sodium_mg": 81.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-465",
  "state": "Baked",
  "subcategory": "JA",
  "tags": [
    "baked",
    "fish-and-seafood",
    "ja"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
