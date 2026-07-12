/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-oz-yields",
  "description": "Pork",
  "id": "usda-fndds-2705875",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-steak-any-size",
      "kind": "unit",
      "label": "1 steak, any size"
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
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    }
  ],
  "name": "Pork, steak, lean only eaten",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 0.0,
    "energy_kcal": 230.0,
    "fat_g": 12.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 1.83,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 221.0,
    "potassium_mg": 337.0,
    "protein_g": 26.7,
    "salt_g": 0.795,
    "sat_fat_g": 4.87,
    "sodium_mg": 318.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705875",
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
