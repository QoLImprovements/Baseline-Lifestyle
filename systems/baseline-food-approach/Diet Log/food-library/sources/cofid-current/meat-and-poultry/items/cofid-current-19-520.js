/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "7 samples, 5 brands; korma and masala varieties, chilled and frozen",
  "id": "cofid-current-19-520",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, chicken, average, retail, reheated",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 5.4,
    "energy_kcal": 149.0,
    "fat_g": 8.9,
    "fibre_g": 1.5,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 300.0,
    "protein_g": 12.1,
    "salt_g": 0.6,
    "sat_fat_g": 4.0,
    "sodium_mg": 240.0,
    "sugar_g": 4.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-520",
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
