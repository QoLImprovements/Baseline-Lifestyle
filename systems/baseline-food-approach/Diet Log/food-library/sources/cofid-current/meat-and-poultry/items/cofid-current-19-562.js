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
  "id": "cofid-current-19-562",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken fricassee, reduced fat, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 3.2,
    "energy_kcal": 101.0,
    "fat_g": 4.2,
    "fibre_g": 0.0,
    "folate_ug": 9.0,
    "iron_mg": 0.7,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 107.0,
    "potassium_mg": 271.0,
    "protein_g": 10.2,
    "salt_g": 0.6575,
    "sat_fat_g": 1.19,
    "sodium_mg": 263.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 1.36
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-562",
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
