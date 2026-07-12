/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "11 samples, 11 products, frozen and chilled",
  "id": "cofid-current-16-376",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Haddock, flesh only, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.0,
    "energy_kcal": 98.0,
    "fat_g": 0.3,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 0.17,
    "magnesium_mg": 33.0,
    "omega3_g": 0.1,
    "phosphorus_mg": 232.0,
    "potassium_mg": 433.0,
    "protein_g": 23.9,
    "salt_g": 0.23,
    "sat_fat_g": 0.06,
    "sodium_mg": 92.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.52,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-376",
  "state": "Grilled",
  "subcategory": "JA",
  "tags": [
    "fish-and-seafood",
    "grilled",
    "ja"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
