/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "1-can",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708899",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 411.0,
      "key": "1-large-microwavable-bowl",
      "kind": "unit",
      "label": "1 large microwavable bowl"
    },
    {
      "gramsPerUnit": 213.0,
      "key": "1-microwavable-cup",
      "kind": "unit",
      "label": "1 microwavable cup"
    }
  ],
  "name": "Pasta, whole grain, with tomato-based sauce and seafood, ready-to-heat",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 18.6,
    "energy_kcal": 122.0,
    "fat_g": 3.38,
    "fibre_g": 2.7,
    "folate_ug": 16.0,
    "iron_mg": 1.39,
    "magnesium_mg": 37.0,
    "omega3_g": 0.035,
    "phosphorus_mg": 100.0,
    "potassium_mg": 202.0,
    "protein_g": 5.55,
    "salt_g": 0.865,
    "sat_fat_g": 0.453,
    "sodium_mg": 346.0,
    "sugar_g": 2.48,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 1.48,
    "vitamin_k_ug": 7.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708899",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "fish-and-seafood",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
