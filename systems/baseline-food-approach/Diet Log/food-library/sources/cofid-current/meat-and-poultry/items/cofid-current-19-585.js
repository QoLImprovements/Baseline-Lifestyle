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
  "id": "cofid-current-19-585",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Stew, Irish, made with lean lamb, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 8.6,
    "energy_kcal": 107.0,
    "fat_g": 4.9,
    "fibre_g": 1.5,
    "folate_ug": 8.0,
    "iron_mg": 0.67,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 310.0,
    "protein_g": 7.6,
    "salt_g": 0.065,
    "sat_fat_g": 2.23,
    "sodium_mg": 26.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 274.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-585",
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
