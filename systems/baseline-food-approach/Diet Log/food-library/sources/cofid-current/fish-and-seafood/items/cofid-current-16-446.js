/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Recipe, containing boal, rohu, spices, water and onion",
  "id": "cofid-current-16-446",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, fish, Bangladeshi, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 1.5,
    "energy_kcal": 125.0,
    "fat_g": 8.0,
    "fibre_g": 0.8,
    "folate_ug": 0.0,
    "iron_mg": 1.14,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 261.0,
    "potassium_mg": 257.0,
    "protein_g": 12.4,
    "salt_g": 0.0,
    "sat_fat_g": 0.78,
    "sodium_mg": 0.0,
    "sugar_g": 1.2,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-446",
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
