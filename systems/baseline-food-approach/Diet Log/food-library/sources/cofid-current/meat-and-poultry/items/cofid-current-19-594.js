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
  "id": "cofid-current-19-594",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Kofta, lamb, coated with breadcrumbs, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 52.0,
    "carbs_g": 9.7,
    "energy_kcal": 277.0,
    "fat_g": 16.0,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 2.94,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 253.0,
    "potassium_mg": 422.0,
    "protein_g": 23.8,
    "salt_g": 0.3475,
    "sat_fat_g": 7.08,
    "sodium_mg": 139.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-594",
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
