/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Melons",
  "id": "usda-fndds-2709241",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-medium-wedge-slice",
      "kind": "unit",
      "label": "1 medium wedge/slice"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-ball",
      "kind": "unit",
      "label": "1 ball"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-large-wedge-slice",
      "kind": "unit",
      "label": "1 large wedge/slice"
    },
    {
      "gramsPerUnit": 1320.0,
      "key": "1-large-melon",
      "kind": "unit",
      "label": "1 large melon"
    },
    {
      "gramsPerUnit": 1000.0,
      "key": "1-medium-melon",
      "kind": "unit",
      "label": "1 medium melon"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-small-wedge-slice",
      "kind": "unit",
      "label": "1 small wedge/slice"
    },
    {
      "gramsPerUnit": 800.0,
      "key": "1-small-melon",
      "kind": "unit",
      "label": "1 small melon"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-cube",
      "kind": "unit",
      "label": "1 cube"
    }
  ],
  "name": "Honeydew melon, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 9.09,
    "energy_kcal": 36.0,
    "fat_g": 0.14,
    "fibre_g": 0.8,
    "folate_ug": 19.0,
    "iron_mg": 0.17,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 228.0,
    "protein_g": 0.54,
    "salt_g": 0.045,
    "sat_fat_g": 0.038,
    "sodium_mg": 18.0,
    "sugar_g": 8.12,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 18.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709241",
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
