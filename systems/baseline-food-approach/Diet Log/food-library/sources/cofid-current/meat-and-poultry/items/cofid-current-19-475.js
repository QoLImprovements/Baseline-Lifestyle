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
  "id": "cofid-current-19-475",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bolognese sauce (with meat), made with extra lean minced beef, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 2.8,
    "energy_kcal": 108.0,
    "fat_g": 4.9,
    "fibre_g": 0.6,
    "folate_ug": 8.0,
    "iron_mg": 1.19,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 305.0,
    "protein_g": 13.0,
    "salt_g": 0.465,
    "sat_fat_g": 1.49,
    "sodium_mg": 186.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 116.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 1.97,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-475",
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
