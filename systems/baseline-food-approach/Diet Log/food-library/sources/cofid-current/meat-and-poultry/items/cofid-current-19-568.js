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
  "id": "cofid-current-19-568",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chicken vindaloo, reduced fat, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 2.7,
    "energy_kcal": 121.0,
    "fat_g": 4.1,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.37,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 160.0,
    "potassium_mg": 429.0,
    "protein_g": 19.6,
    "salt_g": 0.17,
    "sat_fat_g": 0.42,
    "sodium_mg": 68.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-568",
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
