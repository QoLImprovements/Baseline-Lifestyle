/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708845",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 425.0,
      "key": "1-can",
      "kind": "unit",
      "label": "1 can"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-spaghettio-s-snack-size-microwavable-tray",
      "kind": "unit",
      "label": "1 Spaghettio's snack size microwavable tray"
    },
    {
      "gramsPerUnit": 411.0,
      "key": "1-large-microwavable-bowl",
      "kind": "unit",
      "label": "1 large microwavable bowl"
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
    }
  ],
  "name": "Pasta with tomato-based sauce and poultry, ready-to-heat",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 18.7,
    "energy_kcal": 132.0,
    "fat_g": 3.52,
    "fibre_g": 1.6,
    "folate_ug": 43.0,
    "iron_mg": 1.04,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 65.0,
    "potassium_mg": 170.0,
    "protein_g": 5.91,
    "salt_g": 0.835,
    "sat_fat_g": 0.565,
    "sodium_mg": 334.0,
    "sugar_g": 2.39,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 1.32,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708845",
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
