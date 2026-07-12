/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-spaghettio-s-snack-size-microwavable-tray",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708869",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-spaghettio-s-snack-size-microwavable-tray",
      "kind": "unit",
      "label": "1 Spaghettio's snack size microwavable tray"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 213.0,
      "key": "1-microwavable-cup",
      "kind": "unit",
      "label": "1 microwavable cup"
    },
    {
      "gramsPerUnit": 425.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 411.0,
      "key": "1-large-microwavable-bowl",
      "kind": "unit",
      "label": "1 large microwavable bowl"
    }
  ],
  "name": "Pasta with cream sauce and poultry, ready-to-heat",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 16.3,
    "energy_kcal": 170.0,
    "fat_g": 8.69,
    "fibre_g": 0.9,
    "folate_ug": 38.0,
    "iron_mg": 0.75,
    "magnesium_mg": 13.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 71.0,
    "potassium_mg": 63.0,
    "protein_g": 6.18,
    "salt_g": 0.9625,
    "sat_fat_g": 3.76,
    "sodium_mg": 385.0,
    "sugar_g": 0.63,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 2.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708869",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "meat-and-poultry",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
