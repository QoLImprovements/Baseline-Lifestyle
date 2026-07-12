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
  "id": "cofid-current-16-458",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fishcakes, cod, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 15.2,
    "energy_kcal": 235.0,
    "fat_g": 14.7,
    "fibre_g": 0.7,
    "folate_ug": 15.0,
    "iron_mg": 0.7,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 123.0,
    "potassium_mg": 300.0,
    "protein_g": 11.3,
    "salt_g": 0.23,
    "sat_fat_g": 1.31,
    "sodium_mg": 92.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-458",
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
