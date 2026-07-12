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
  "id": "cofid-current-19-640",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Turkey, stir-fried with vegetables, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 3.6,
    "energy_kcal": 82.0,
    "fat_g": 2.3,
    "fibre_g": 0.0,
    "folate_ug": 16.0,
    "iron_mg": 0.89,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 123.0,
    "potassium_mg": 286.0,
    "protein_g": 11.1,
    "salt_g": 0.475,
    "sat_fat_g": 0.34,
    "sodium_mg": 190.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 40.0,
    "vitamin_c_mg": 22.0,
    "vitamin_e_mg": 0.71,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-640",
  "state": "Fried",
  "subcategory": "MR",
  "tags": [
    "fried",
    "meat-and-poultry",
    "mr"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
