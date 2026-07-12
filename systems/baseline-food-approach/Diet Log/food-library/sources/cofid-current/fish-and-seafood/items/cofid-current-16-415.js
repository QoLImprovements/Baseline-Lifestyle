/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "8 samples, 7 products, frozen and chilled",
  "id": "cofid-current-16-415",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Seafood sticks",
  "nutritionPerBasis": {
    "calcium_mg": 50.0,
    "carbs_g": 14.9,
    "energy_kcal": 102.0,
    "fat_g": 1.9,
    "fibre_g": 0.0,
    "folate_ug": 12.0,
    "iron_mg": 0.19,
    "magnesium_mg": 8.0,
    "omega3_g": 0.19,
    "phosphorus_mg": 61.0,
    "potassium_mg": 21.0,
    "protein_g": 7.3,
    "salt_g": 1.785,
    "sat_fat_g": 0.29,
    "sodium_mg": 714.0,
    "sugar_g": 4.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-415",
  "state": "Unspecified",
  "subcategory": "JR",
  "tags": [
    "fish-and-seafood",
    "jr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
