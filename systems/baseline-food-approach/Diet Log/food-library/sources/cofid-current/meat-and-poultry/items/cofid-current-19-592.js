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
  "id": "cofid-current-19-592",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, lamb biryani, reduced fat, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 21.9,
    "energy_kcal": 150.0,
    "fat_g": 3.7,
    "fibre_g": 0.0,
    "folate_ug": 7.0,
    "iron_mg": 1.17,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 174.0,
    "protein_g": 7.4,
    "salt_g": 0.05,
    "sat_fat_g": 1.28,
    "sodium_mg": 20.0,
    "sugar_g": 2.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-592",
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
