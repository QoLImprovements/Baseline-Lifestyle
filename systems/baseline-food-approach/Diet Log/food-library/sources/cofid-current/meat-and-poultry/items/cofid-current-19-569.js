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
  "id": "cofid-current-19-569",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Chicken, stir-fried with mushrooms and cashew nuts, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 4.8,
    "energy_kcal": 160.0,
    "fat_g": 7.0,
    "fibre_g": 0.9,
    "folate_ug": 14.0,
    "iron_mg": 1.24,
    "magnesium_mg": 43.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 171.0,
    "potassium_mg": 426.0,
    "protein_g": 18.4,
    "salt_g": 0.805,
    "sat_fat_g": 1.31,
    "sodium_mg": 322.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 20.0,
    "vitamin_e_mg": 0.78,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-569",
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
