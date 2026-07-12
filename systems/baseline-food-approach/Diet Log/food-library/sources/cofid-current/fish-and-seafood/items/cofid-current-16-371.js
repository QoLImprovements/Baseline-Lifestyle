/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 samples, 6 products",
  "id": "cofid-current-16-371",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish fingers, pollock, grilled",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 20.0,
    "energy_kcal": 213.0,
    "fat_g": 9.2,
    "fibre_g": 2.0,
    "folate_ug": 32.0,
    "iron_mg": 0.54,
    "magnesium_mg": 26.0,
    "omega3_g": 0.5,
    "phosphorus_mg": 143.0,
    "potassium_mg": 263.0,
    "protein_g": 13.9,
    "salt_g": 1.0025,
    "sat_fat_g": 1.23,
    "sodium_mg": 401.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.7,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-371",
  "state": "Grilled",
  "subcategory": "JR",
  "tags": [
    "fish-and-seafood",
    "grilled",
    "jr"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
