/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Burritos and tacos",
  "id": "usda-fndds-2708552",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 330.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-small-regular",
      "kind": "unit",
      "label": "1 small/regular"
    }
  ],
  "name": "Burrito, meat, with beans, no cheese",
  "nutritionPerBasis": {
    "calcium_mg": 75.0,
    "carbs_g": 25.0,
    "energy_kcal": 211.0,
    "fat_g": 7.45,
    "fibre_g": 2.6,
    "folate_ug": 49.0,
    "iron_mg": 2.5,
    "magnesium_mg": 25.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 159.0,
    "potassium_mg": 218.0,
    "protein_g": 10.6,
    "salt_g": 1.185,
    "sat_fat_g": 2.77,
    "sodium_mg": 474.0,
    "sugar_g": 1.73,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 4.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708552",
  "state": "Unspecified",
  "subcategory": "Burritos and tacos",
  "tags": [
    "burritos-and-tacos",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
