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
  "id": "cofid-current-16-377",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Haddock, flesh only, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 93.0,
    "fat_g": 0.6,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.16,
    "magnesium_mg": 28.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 199.0,
    "potassium_mg": 376.0,
    "protein_g": 21.8,
    "salt_g": 0.21,
    "sat_fat_g": 0.12,
    "sodium_mg": 84.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-377",
  "state": "Steamed",
  "subcategory": "JA",
  "tags": [
    "fish-and-seafood",
    "ja",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
