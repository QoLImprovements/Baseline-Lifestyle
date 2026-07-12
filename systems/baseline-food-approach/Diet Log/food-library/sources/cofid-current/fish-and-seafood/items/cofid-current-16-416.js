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
  "id": "cofid-current-16-416",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Tuna, canned in brine, drained",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 0.0,
    "energy_kcal": 109.0,
    "fat_g": 1.0,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 1.51,
    "magnesium_mg": 27.0,
    "omega3_g": 0.32,
    "phosphorus_mg": 171.0,
    "potassium_mg": 230.0,
    "protein_g": 24.9,
    "salt_g": 0.7325,
    "sat_fat_g": 0.3,
    "sodium_mg": 293.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 0.25
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-416",
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
