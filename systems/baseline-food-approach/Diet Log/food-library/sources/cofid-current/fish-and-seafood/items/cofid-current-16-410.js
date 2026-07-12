/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "9 samples, 9 products; including pollock, haddock and cod; frozen and chilled",
  "id": "cofid-current-16-410",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, fish, white fish, retail, baked",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 14.4,
    "energy_kcal": 124.0,
    "fat_g": 4.8,
    "fibre_g": 2.1,
    "folate_ug": 9.0,
    "iron_mg": 0.35,
    "magnesium_mg": 21.0,
    "omega3_g": 0.12,
    "phosphorus_mg": 119.0,
    "potassium_mg": 300.0,
    "protein_g": 6.6,
    "salt_g": 0.635,
    "sat_fat_g": 2.55,
    "sodium_mg": 254.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-410",
  "state": "Baked",
  "subcategory": "JR",
  "tags": [
    "baked",
    "fish-and-seafood",
    "jr"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
