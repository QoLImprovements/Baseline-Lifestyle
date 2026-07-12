/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "1-cake-8-square",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2708079",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 501.0,
      "key": "1-cake-8-square",
      "kind": "unit",
      "label": "1 cake (8\" square)"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "1-tastycake-koffee-kake-junior",
      "kind": "unit",
      "label": "1 Tastycake Koffee Kake Junior"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "1-100-calorie-package-3-cakes",
      "kind": "unit",
      "label": "1 100-calorie package (3 cakes)"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-drake-s-coffee-cake",
      "kind": "unit",
      "label": "1 Drake's coffee cake"
    },
    {
      "gramsPerUnit": 362.0,
      "key": "1-cake-8-dia",
      "kind": "unit",
      "label": "1 cake (8\" dia)"
    },
    {
      "gramsPerUnit": 692.0,
      "key": "1-cake-9-square",
      "kind": "unit",
      "label": "1 cake (9\" square)"
    },
    {
      "gramsPerUnit": 4.5,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-individual-cake",
      "kind": "unit",
      "label": "1 individual cake"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-twin-pack-drake-s-coffee-cake-2-3-oz",
      "kind": "unit",
      "label": "1 twin-pack Drake's coffee cake (2.3 oz)"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    }
  ],
  "name": "Coffee cake, crumb or quick-bread type",
  "nutritionPerBasis": {
    "calcium_mg": 134.0,
    "carbs_g": 51.3,
    "energy_kcal": 396.0,
    "fat_g": 18.4,
    "fibre_g": 1.4,
    "folate_ug": 48.0,
    "iron_mg": 2.23,
    "magnesium_mg": 26.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 138.0,
    "potassium_mg": 132.0,
    "protein_g": 6.49,
    "salt_g": 0.7975,
    "sat_fat_g": 6.88,
    "sodium_mg": 319.0,
    "sugar_g": 26.6,
    "vitamin_a_ug": 123.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708079",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
