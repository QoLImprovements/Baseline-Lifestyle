/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-medium-melon",
  "description": "Melons",
  "id": "usda-fndds-2709226",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 550.0,
      "key": "1-medium-melon",
      "kind": "unit",
      "label": "1 medium melon"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cube",
      "kind": "unit",
      "label": "1 cube"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-ball",
      "kind": "unit",
      "label": "1 ball"
    },
    {
      "gramsPerUnit": 815.0,
      "key": "1-large-melon",
      "kind": "unit",
      "label": "1 large melon"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-medium-wedge-slice",
      "kind": "unit",
      "label": "1 medium wedge/slice"
    },
    {
      "gramsPerUnit": 105.0,
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
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-small-wedge-slice",
      "kind": "unit",
      "label": "1 small wedge/slice"
    },
    {
      "gramsPerUnit": 440.0,
      "key": "1-small-melon",
      "kind": "unit",
      "label": "1 small melon"
    }
  ],
  "name": "Cantaloupe, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 8.16,
    "energy_kcal": 38.0,
    "fat_g": 0.18,
    "fibre_g": 0.8,
    "folate_ug": 14.0,
    "iron_mg": 0.38,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 157.0,
    "protein_g": 0.82,
    "salt_g": 0.075,
    "sat_fat_g": 0.051,
    "sodium_mg": 30.0,
    "sugar_g": 7.88,
    "vitamin_a_ug": 232.0,
    "vitamin_c_mg": 10.9,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709226",
  "state": "Raw",
  "subcategory": "Melons",
  "tags": [
    "melons",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
