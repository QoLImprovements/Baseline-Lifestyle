/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Flesh only",
  "id": "cofid-current-50-629",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Trout, brown, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 0.0,
    "energy_kcal": 135.0,
    "fat_g": 4.5,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.0,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 270.0,
    "potassium_mg": 370.0,
    "protein_g": 23.5,
    "salt_g": 0.22,
    "sat_fat_g": 1.0,
    "sodium_mg": 88.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 39.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "50-629",
  "state": "Steamed",
  "subcategory": "JC",
  "tags": [
    "fish-and-seafood",
    "jc",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
