/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-sandwich-any-size",
  "description": "Frankfurter sandwiches",
  "id": "usda-fndds-2707053",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-sandwich-any-size",
      "kind": "unit",
      "label": "1 sandwich, any size"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Italian sausage sandwich on white",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 23.5,
    "energy_kcal": 300.0,
    "fat_g": 16.3,
    "fibre_g": 0.8,
    "folate_ug": 42.0,
    "iron_mg": 2.24,
    "magnesium_mg": 21.0,
    "omega3_g": 0.018,
    "phosphorus_mg": 125.0,
    "potassium_mg": 226.0,
    "protein_g": 14.4,
    "salt_g": 1.6125,
    "sat_fat_g": 5.46,
    "sodium_mg": 645.0,
    "sugar_g": 4.05,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707053",
  "state": "Unspecified",
  "subcategory": "Frankfurter sandwiches",
  "tags": [
    "frankfurter-sandwiches",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
