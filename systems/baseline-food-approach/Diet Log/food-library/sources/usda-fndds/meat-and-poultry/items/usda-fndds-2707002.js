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
  "id": "usda-fndds-2707002",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken fillet biscuit, from fast food",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 26.4,
    "energy_kcal": 320.0,
    "fat_g": 19.1,
    "fibre_g": 2.0,
    "folate_ug": 51.0,
    "iron_mg": 1.64,
    "magnesium_mg": 22.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 311.0,
    "potassium_mg": 205.0,
    "protein_g": 10.8,
    "salt_g": 1.9375,
    "sat_fat_g": 7.62,
    "sodium_mg": 775.0,
    "sugar_g": 1.98,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.76,
    "vitamin_k_ug": 17.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707002",
  "state": "Unspecified",
  "subcategory": "Chicken fillet sandwiches",
  "tags": [
    "chicken-fillet-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
