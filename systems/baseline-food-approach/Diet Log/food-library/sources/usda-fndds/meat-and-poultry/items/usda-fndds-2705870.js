/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-thick",
  "description": "Pork",
  "id": "usda-fndds-2705870",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-thick",
      "kind": "unit",
      "label": "1 thick"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-slice-any-size",
      "kind": "unit",
      "label": "1 slice, any size"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-regular",
      "kind": "unit",
      "label": "1 regular"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-thin",
      "kind": "unit",
      "label": "1 thin"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    }
  ],
  "name": "Pork, chop, coated, lean and fat eaten",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 7.16,
    "energy_kcal": 229.0,
    "fat_g": 10.6,
    "fibre_g": 0.4,
    "folate_ug": 11.0,
    "iron_mg": 1.02,
    "magnesium_mg": 28.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 237.0,
    "potassium_mg": 390.0,
    "protein_g": 25.1,
    "salt_g": 1.0225,
    "sat_fat_g": 3.18,
    "sodium_mg": 409.0,
    "sugar_g": 0.62,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705870",
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
