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
  "id": "cofid-current-16-375",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Haddock, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 75.0,
    "fat_g": 0.4,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.12,
    "magnesium_mg": 25.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 163.0,
    "potassium_mg": 315.0,
    "protein_g": 17.8,
    "salt_g": 0.17,
    "sat_fat_g": 0.09,
    "sodium_mg": 68.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.49,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-375",
  "state": "Raw",
  "subcategory": "JA",
  "tags": [
    "fish-and-seafood",
    "ja",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
