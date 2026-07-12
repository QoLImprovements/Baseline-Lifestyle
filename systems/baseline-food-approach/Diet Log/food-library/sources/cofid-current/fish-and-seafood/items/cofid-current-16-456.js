/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-16-456",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, herring, Bengali, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 57.0,
    "carbs_g": 4.2,
    "energy_kcal": 327.0,
    "fat_g": 29.6,
    "fibre_g": 1.1,
    "folate_ug": 11.0,
    "iron_mg": 1.08,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 160.0,
    "potassium_mg": 326.0,
    "protein_g": 11.4,
    "salt_g": 0.6775,
    "sat_fat_g": 15.89,
    "sodium_mg": 271.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 306.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.19,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-456",
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
