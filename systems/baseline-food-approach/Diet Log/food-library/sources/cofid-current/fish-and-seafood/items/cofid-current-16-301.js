/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "7 samples from fish and chip shops",
  "id": "cofid-current-16-301",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Roe, cod, hard, coated in batter, fried",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 8.9,
    "energy_kcal": 189.0,
    "fat_g": 11.8,
    "fibre_g": 0.0,
    "folate_ug": 22.0,
    "iron_mg": 1.4,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 210.0,
    "potassium_mg": 270.0,
    "protein_g": 12.4,
    "salt_g": 1.275,
    "sat_fat_g": 0.0,
    "sodium_mg": 510.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-301",
  "state": "Fried",
  "subcategory": "JR",
  "tags": [
    "fish-and-seafood",
    "fried",
    "jr"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
