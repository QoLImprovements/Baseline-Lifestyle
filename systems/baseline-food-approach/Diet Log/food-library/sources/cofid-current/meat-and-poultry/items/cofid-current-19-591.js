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
  "id": "cofid-current-19-591",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, lamb biryani, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 20.9,
    "energy_kcal": 195.0,
    "fat_g": 9.2,
    "fibre_g": 0.0,
    "folate_ug": 6.0,
    "iron_mg": 1.12,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 169.0,
    "protein_g": 7.1,
    "salt_g": 0.0525,
    "sat_fat_g": 1.79,
    "sodium_mg": 21.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.55,
    "vitamin_k_ug": 8.98
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-591",
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
