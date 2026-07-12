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
  "id": "cofid-current-19-563",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken in white sauce, made with semi-skimmed milk",
  "nutritionPerBasis": {
    "calcium_mg": 68.0,
    "carbs_g": 5.0,
    "energy_kcal": 156.0,
    "fat_g": 7.7,
    "fibre_g": 0.1,
    "folate_ug": 8.0,
    "iron_mg": 0.46,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 171.0,
    "potassium_mg": 264.0,
    "protein_g": 17.0,
    "salt_g": 0.2225,
    "sat_fat_g": 3.42,
    "sodium_mg": 89.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-563",
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
