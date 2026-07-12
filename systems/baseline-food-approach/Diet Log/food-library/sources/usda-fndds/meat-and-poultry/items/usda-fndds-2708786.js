/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708786",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 233.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 233.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 425.0,
      "key": "1-can-15-oz",
      "kind": "unit",
      "label": "1 can (15 oz)"
    }
  ],
  "name": "Tortellini, meat-filled, with tomato sauce, canned",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 15.8,
    "energy_kcal": 89.0,
    "fat_g": 1.63,
    "fibre_g": 1.4,
    "folate_ug": 44.0,
    "iron_mg": 0.93,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 175.0,
    "protein_g": 3.24,
    "salt_g": 0.745,
    "sat_fat_g": 0.414,
    "sodium_mg": 298.0,
    "sugar_g": 2.36,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 7.8,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 4.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708786",
  "state": "Canned",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "canned",
    "meat-and-poultry",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
