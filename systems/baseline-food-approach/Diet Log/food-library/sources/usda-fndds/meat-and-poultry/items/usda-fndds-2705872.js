/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-oz-yields",
  "description": "Meat mixed dishes",
  "id": "usda-fndds-2705872",
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
      "gramsPerUnit": 180.0,
      "key": "1-chop-any-size",
      "kind": "unit",
      "label": "1 chop, any size"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
  "name": "Pork, chop, stuffed",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 7.82,
    "energy_kcal": 190.0,
    "fat_g": 9.04,
    "fibre_g": 1.0,
    "folate_ug": 35.0,
    "iron_mg": 0.73,
    "magnesium_mg": 22.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 174.0,
    "potassium_mg": 293.0,
    "protein_g": 18.4,
    "salt_g": 1.035,
    "sat_fat_g": 2.67,
    "sodium_mg": 414.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 3.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705872",
  "state": "Unspecified",
  "subcategory": "Meat mixed dishes",
  "tags": [
    "meat-and-poultry",
    "meat-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
