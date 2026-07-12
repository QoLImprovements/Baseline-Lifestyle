/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "30 samples, sardine, crab, lobster and salmon",
  "id": "cofid-current-16-450",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fish paste",
  "nutritionPerBasis": {
    "calcium_mg": 280.0,
    "carbs_g": 3.7,
    "energy_kcal": 170.0,
    "fat_g": 10.5,
    "fibre_g": 2.6,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 310.0,
    "potassium_mg": 300.0,
    "protein_g": 15.3,
    "salt_g": 1.075,
    "sat_fat_g": 0.0,
    "sodium_mg": 430.0,
    "sugar_g": 0.5,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-450",
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
