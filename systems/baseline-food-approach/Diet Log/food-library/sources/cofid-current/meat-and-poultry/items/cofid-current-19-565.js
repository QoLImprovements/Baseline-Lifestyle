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
  "id": "cofid-current-19-565",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chicken korma, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 4.6,
    "energy_kcal": 127.0,
    "fat_g": 5.1,
    "fibre_g": 0.7,
    "folate_ug": 10.0,
    "iron_mg": 0.89,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 142.0,
    "potassium_mg": 337.0,
    "protein_g": 14.6,
    "salt_g": 0.17,
    "sat_fat_g": 1.15,
    "sodium_mg": 68.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.88,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-565",
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
