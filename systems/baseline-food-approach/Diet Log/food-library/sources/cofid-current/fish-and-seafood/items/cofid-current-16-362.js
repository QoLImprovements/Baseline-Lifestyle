/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "10 samples, 5 products",
  "id": "cofid-current-16-362",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sushi, tuna nigiri",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 30.3,
    "energy_kcal": 170.0,
    "fat_g": 2.5,
    "fibre_g": 1.2,
    "folate_ug": 3.0,
    "iron_mg": 0.28,
    "magnesium_mg": 15.0,
    "omega3_g": 0.31,
    "phosphorus_mg": 88.0,
    "potassium_mg": 137.0,
    "protein_g": 8.4,
    "salt_g": 0.8275,
    "sat_fat_g": 0.68,
    "sodium_mg": 331.0,
    "sugar_g": 4.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "16-362",
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
