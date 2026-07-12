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
  "id": "cofid-current-16-455",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, haddock, Bengali, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 4.2,
    "energy_kcal": 263.0,
    "fat_g": 22.0,
    "fibre_g": 1.1,
    "folate_ug": 11.0,
    "iron_mg": 0.44,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 323.0,
    "protein_g": 11.4,
    "salt_g": 0.6,
    "sat_fat_g": 13.78,
    "sodium_mg": 240.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 306.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 1.03,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-455",
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
