/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-sandwich-any-size",
  "description": "Chicken fillet sandwiches",
  "id": "usda-fndds-2707016",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken fillet wrap sandwich, fried, from fast food",
  "nutritionPerBasis": {
    "calcium_mg": 181.0,
    "carbs_g": 24.4,
    "energy_kcal": 299.0,
    "fat_g": 16.7,
    "fibre_g": 2.0,
    "folate_ug": 47.0,
    "iron_mg": 1.68,
    "magnesium_mg": 26.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 242.0,
    "potassium_mg": 203.0,
    "protein_g": 12.7,
    "salt_g": 1.735,
    "sat_fat_g": 5.42,
    "sodium_mg": 694.0,
    "sugar_g": 1.86,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.59,
    "vitamin_k_ug": 17.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707016",
  "state": "Fried",
  "subcategory": "Chicken fillet sandwiches",
  "tags": [
    "chicken-fillet-sandwiches",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
