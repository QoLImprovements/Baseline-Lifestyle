/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-595",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, lamb rogan josh, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 3.9,
    "energy_kcal": 149.0,
    "fat_g": 9.1,
    "fibre_g": 1.8,
    "folate_ug": 6.0,
    "iron_mg": 1.93,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 353.0,
    "protein_g": 14.4,
    "salt_g": 0.11,
    "sat_fat_g": 3.58,
    "sodium_mg": 44.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 102.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 1.05,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-595",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
