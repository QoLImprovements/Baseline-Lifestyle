/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-large-microwavable-bowl",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708863",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 411.0,
      "key": "1-large-microwavable-bowl",
      "kind": "unit",
      "label": "1 large microwavable bowl"
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
      "gramsPerUnit": 213.0,
      "key": "1-microwavable-cup",
      "kind": "unit",
      "label": "1 microwavable cup"
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
    }
  ],
  "name": "Pasta with cream sauce and meat, ready-to-heat",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 16.3,
    "energy_kcal": 177.0,
    "fat_g": 9.51,
    "fibre_g": 0.9,
    "folate_ug": 39.0,
    "iron_mg": 0.88,
    "magnesium_mg": 13.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 65.0,
    "potassium_mg": 64.0,
    "protein_g": 6.01,
    "salt_g": 0.965,
    "sat_fat_g": 4.16,
    "sodium_mg": 386.0,
    "sugar_g": 0.63,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708863",
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
