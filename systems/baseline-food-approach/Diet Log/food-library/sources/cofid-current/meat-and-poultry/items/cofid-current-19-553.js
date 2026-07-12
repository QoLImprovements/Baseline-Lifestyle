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
  "id": "cofid-current-19-553",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Burger, beef, fried in rapeseed oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 1.1,
    "energy_kcal": 297.0,
    "fat_g": 21.9,
    "fibre_g": 0.3,
    "folate_ug": 17.0,
    "iron_mg": 1.83,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 205.0,
    "potassium_mg": 331.0,
    "protein_g": 23.9,
    "salt_g": 0.2725,
    "sat_fat_g": 8.32,
    "sodium_mg": 109.0,
    "sugar_g": 0.8,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.89,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-553",
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
