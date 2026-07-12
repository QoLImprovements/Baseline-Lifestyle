/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "11 samples, 10 products",
  "id": "cofid-current-16-417",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tuna, canned in sunflower oil, drained",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 0.0,
    "energy_kcal": 159.0,
    "fat_g": 6.4,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.19,
    "magnesium_mg": 35.0,
    "omega3_g": 0.18,
    "phosphorus_mg": 204.0,
    "potassium_mg": 267.0,
    "protein_g": 25.4,
    "salt_g": 0.92,
    "sat_fat_g": 0.78,
    "sodium_mg": 368.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.84,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-417",
  "state": "Canned",
  "subcategory": "JC",
  "tags": [
    "canned",
    "fish-and-seafood",
    "jc"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
