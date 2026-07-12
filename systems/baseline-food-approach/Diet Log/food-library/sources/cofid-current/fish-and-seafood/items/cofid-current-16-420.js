/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "9 samples, 7 products, large bones removed. Includes skin and some bones",
  "id": "cofid-current-16-420",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Salmon, pink, canned in brine, drained",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 0.0,
    "energy_kcal": 138.0,
    "fat_g": 4.8,
    "fibre_g": 0.0,
    "folate_ug": 19.0,
    "iron_mg": 0.83,
    "magnesium_mg": 25.0,
    "omega3_g": 1.34,
    "phosphorus_mg": 234.0,
    "potassium_mg": 326.0,
    "protein_g": 23.6,
    "salt_g": 0.88,
    "sat_fat_g": 0.92,
    "sodium_mg": 352.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-420",
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
