/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-oz-yields",
  "description": "Lamb, goat, game",
  "id": "usda-fndds-2705906",
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
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-chop-any-size",
      "kind": "unit",
      "label": "1 chop, any size"
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
  "name": "Lamb, chop",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 0.0,
    "energy_kcal": 264.0,
    "fat_g": 16.3,
    "fibre_g": 0.0,
    "folate_ug": 21.0,
    "iron_mg": 1.89,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 209.0,
    "potassium_mg": 349.0,
    "protein_g": 27.4,
    "salt_g": 0.9675,
    "sat_fat_g": 6.6,
    "sodium_mg": 387.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 4.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705906",
  "state": "Unspecified",
  "subcategory": "Lamb, goat, game",
  "tags": [
    "lamb-goat-game",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
