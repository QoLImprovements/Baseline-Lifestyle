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
  "id": "cofid-current-19-547",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, beef and spinach, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 3.6,
    "energy_kcal": 94.0,
    "fat_g": 4.4,
    "fibre_g": 0.0,
    "folate_ug": 15.0,
    "iron_mg": 3.02,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 355.0,
    "protein_g": 11.4,
    "salt_g": 0.09,
    "sat_fat_g": 1.28,
    "sodium_mg": 36.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 193.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 1.11,
    "vitamin_k_ug": 134.35
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-547",
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
