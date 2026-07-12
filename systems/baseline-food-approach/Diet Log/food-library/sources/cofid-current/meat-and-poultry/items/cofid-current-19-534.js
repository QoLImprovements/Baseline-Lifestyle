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
  "id": "cofid-current-19-534",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chicken, made with cook-in sauce",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 5.5,
    "energy_kcal": 144.0,
    "fat_g": 5.4,
    "fibre_g": 1.5,
    "folate_ug": 14.0,
    "iron_mg": 1.19,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 147.0,
    "potassium_mg": 448.0,
    "protein_g": 18.6,
    "salt_g": 0.615,
    "sat_fat_g": 1.0,
    "sodium_mg": 246.0,
    "sugar_g": 3.9,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 2.4,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-534",
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
