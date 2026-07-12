/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "9 samples, 9 products, frozen and chilled",
  "id": "cofid-current-16-395",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Trout, rainbow, flesh only, raw",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 0.0,
    "energy_kcal": 127.0,
    "fat_g": 5.3,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.28,
    "magnesium_mg": 26.0,
    "omega3_g": 1.41,
    "phosphorus_mg": 228.0,
    "potassium_mg": 383.0,
    "protein_g": 19.9,
    "salt_g": 0.275,
    "sat_fat_g": 1.21,
    "sodium_mg": 110.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-395",
  "state": "Raw",
  "subcategory": "JC",
  "tags": [
    "fish-and-seafood",
    "jc",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
