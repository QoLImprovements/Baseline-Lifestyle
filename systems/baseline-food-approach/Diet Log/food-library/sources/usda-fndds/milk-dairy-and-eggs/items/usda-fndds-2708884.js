/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708884",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    }
  ],
  "name": "Pasta, whole grain, with tomato-based sauce and added vegetables, ready-to-heat",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 18.8,
    "energy_kcal": 114.0,
    "fat_g": 3.25,
    "fibre_g": 2.8,
    "folate_ug": 19.0,
    "iron_mg": 1.2,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 198.0,
    "protein_g": 3.76,
    "salt_g": 0.735,
    "sat_fat_g": 0.434,
    "sodium_mg": 294.0,
    "sugar_g": 2.72,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 1.38,
    "vitamin_k_ug": 7.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708884",
  "state": "Unspecified",
  "subcategory": "Pasta mixed dishes, excludes macaroni and cheese",
  "tags": [
    "milk-dairy-and-eggs",
    "pasta-mixed-dishes-excludes-macaroni-and-cheese",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
