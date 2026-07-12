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
  "id": "cofid-current-19-623",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Casserole, rabbit, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 2.2,
    "energy_kcal": 97.0,
    "fat_g": 4.8,
    "fibre_g": 0.6,
    "folate_ug": 3.0,
    "iron_mg": 0.6,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 218.0,
    "protein_g": 11.4,
    "salt_g": 0.975,
    "sat_fat_g": 1.37,
    "sodium_mg": 390.0,
    "sugar_g": 1.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-623",
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
