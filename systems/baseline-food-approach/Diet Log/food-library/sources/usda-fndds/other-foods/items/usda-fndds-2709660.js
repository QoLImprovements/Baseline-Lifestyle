/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-single-serving-bag",
  "description": "Carrots",
  "id": "usda-fndds-2709660",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-single-serving-bag",
      "kind": "unit",
      "label": "1 single serving bag"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-regular-carrot",
      "kind": "unit",
      "label": "1 regular carrot"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece-slice",
      "kind": "unit",
      "label": "1 piece/slice"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-baby-carrot",
      "kind": "unit",
      "label": "1 baby carrot"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-strip-stick",
      "kind": "unit",
      "label": "1 strip/stick"
    }
  ],
  "name": "Carrots, raw",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 9.68,
    "energy_kcal": 44.0,
    "fat_g": 0.24,
    "fibre_g": 2.9,
    "folate_ug": 40.0,
    "iron_mg": 0.12,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 258.0,
    "protein_g": 0.87,
    "salt_g": 0.1875,
    "sat_fat_g": 0.028,
    "sodium_mg": 75.0,
    "sugar_g": 4.75,
    "vitamin_a_ug": 762.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 11.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709660",
  "state": "Raw",
  "subcategory": "Carrots",
  "tags": [
    "carrots",
    "other-foods",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
