/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-steak-any-size",
  "description": "Pork",
  "id": "usda-fndds-2705873",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-steak-any-size",
      "kind": "unit",
      "label": "1 steak, any size"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Pork, steak, NS as to fat eaten",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 0.0,
    "energy_kcal": 247.0,
    "fat_g": 15.1,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.78,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 217.0,
    "potassium_mg": 330.0,
    "protein_g": 25.9,
    "salt_g": 0.7925,
    "sat_fat_g": 5.66,
    "sodium_mg": 317.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705873",
  "state": "Unspecified",
  "subcategory": "Pork",
  "tags": [
    "meat-and-poultry",
    "pork",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
