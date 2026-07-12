/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Dried fruits",
  "id": "usda-fndds-2709212",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-small-box-1-5-oz",
      "kind": "unit",
      "label": "1 small box (1.5 oz)"
    },
    {
      "gramsPerUnit": 0.5,
      "key": "1-raisin",
      "kind": "unit",
      "label": "1 raisin"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-miniature-box-5-oz",
      "kind": "unit",
      "label": "1 miniature box (.5 oz)"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Raisins",
  "nutritionPerBasis": {
    "calcium_mg": 62.0,
    "carbs_g": 79.3,
    "energy_kcal": 299.0,
    "fat_g": 0.25,
    "fibre_g": 4.5,
    "folate_ug": 5.0,
    "iron_mg": 1.79,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 98.0,
    "potassium_mg": 744.0,
    "protein_g": 3.3,
    "salt_g": 0.065,
    "sat_fat_g": 0.094,
    "sodium_mg": 26.0,
    "sugar_g": 65.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709212",
  "state": "Unspecified",
  "subcategory": "Dried fruits",
  "tags": [
    "dried-fruits",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
