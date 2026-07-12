/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-large-melon",
  "description": "Melons",
  "id": "usda-fndds-2709270",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 6000.0,
      "key": "1-large-melon",
      "kind": "unit",
      "label": "1 large melon"
    },
    {
      "gramsPerUnit": 325.0,
      "key": "1-medium-wedge-slice",
      "kind": "unit",
      "label": "1 medium wedge/slice"
    },
    {
      "gramsPerUnit": 5200.0,
      "key": "1-medium-melon",
      "kind": "unit",
      "label": "1 medium melon"
    },
    {
      "gramsPerUnit": 432.0,
      "key": "1-large-wedge-slice",
      "kind": "unit",
      "label": "1 large wedge/slice"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cube",
      "kind": "unit",
      "label": "1 cube"
    },
    {
      "gramsPerUnit": 3200.0,
      "key": "1-small-melon",
      "kind": "unit",
      "label": "1 small melon"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-ball",
      "kind": "unit",
      "label": "1 ball"
    },
    {
      "gramsPerUnit": 218.0,
      "key": "1-small-wedge-slice",
      "kind": "unit",
      "label": "1 small wedge/slice"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 1300.0,
      "key": "1-miniature-melon",
      "kind": "unit",
      "label": "1 miniature melon"
    }
  ],
  "name": "Watermelon, raw",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 7.55,
    "energy_kcal": 30.0,
    "fat_g": 0.15,
    "fibre_g": 0.4,
    "folate_ug": 3.0,
    "iron_mg": 0.24,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 112.0,
    "protein_g": 0.61,
    "salt_g": 0.0025,
    "sat_fat_g": 0.016,
    "sodium_mg": 1.0,
    "sugar_g": 6.2,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709270",
  "state": "Raw",
  "subcategory": "Melons",
  "tags": [
    "fruit",
    "melons",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
