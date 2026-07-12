/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Chicken, whole pieces",
  "id": "usda-fndds-2706086",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 205.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-can-5-oz-yields",
      "kind": "unit",
      "label": "1 can (5 oz) yields"
    }
  ],
  "name": "Chicken, canned, meat only",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.9,
    "energy_kcal": 185.0,
    "fat_g": 8.1,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.3,
    "magnesium_mg": 19.0,
    "omega3_g": 0.233,
    "phosphorus_mg": 153.0,
    "potassium_mg": 153.0,
    "protein_g": 25.3,
    "salt_g": 1.205,
    "sat_fat_g": 2.25,
    "sodium_mg": 482.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706086",
  "state": "Canned",
  "subcategory": "Chicken, whole pieces",
  "tags": [
    "canned",
    "chicken-whole-pieces",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
