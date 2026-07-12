/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pasta mixed dishes, excludes macaroni and cheese",
  "id": "usda-fndds-2708911",
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
      "gramsPerUnit": 411.0,
      "key": "1-large-microwavable-bowl",
      "kind": "unit",
      "label": "1 large microwavable bowl"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-spaghettio-s-snack-size-microwavable-tray",
      "kind": "unit",
      "label": "1 Spaghettio's snack size microwavable tray"
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
    }
  ],
  "name": "Pasta, whole grain, with cream sauce and meat, ready-to-heat",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 15.9,
    "energy_kcal": 172.0,
    "fat_g": 9.9,
    "fibre_g": 2.0,
    "folate_ug": 12.0,
    "iron_mg": 1.1,
    "magnesium_mg": 31.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 100.0,
    "potassium_mg": 90.0,
    "protein_g": 6.11,
    "salt_g": 0.9675,
    "sat_fat_g": 4.2,
    "sodium_mg": 387.0,
    "sugar_g": 0.73,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708911",
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
