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
  "id": "cofid-current-19-567",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chicken vindaloo, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 2.6,
    "energy_kcal": 192.0,
    "fat_g": 12.5,
    "fibre_g": 0.7,
    "folate_ug": 9.0,
    "iron_mg": 2.24,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 151.0,
    "potassium_mg": 405.0,
    "protein_g": 18.5,
    "salt_g": 0.1625,
    "sat_fat_g": 1.19,
    "sodium_mg": 65.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 2.46,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-567",
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
