/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup",
  "description": "Carrots",
  "id": "usda-fndds-2709663",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
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
      "gramsPerUnit": 62.0,
      "key": "1-regular-carrot",
      "kind": "unit",
      "label": "1 regular carrot"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-baby-carrot",
      "kind": "unit",
      "label": "1 baby carrot"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Carrots, cooked, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 10.2,
    "energy_kcal": 86.0,
    "fat_g": 4.67,
    "fibre_g": 3.1,
    "folate_ug": 31.0,
    "iron_mg": 0.15,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 40.0,
    "potassium_mg": 277.0,
    "protein_g": 0.94,
    "salt_g": 0.73,
    "sat_fat_g": 1.16,
    "sodium_mg": 292.0,
    "sugar_g": 4.69,
    "vitamin_a_ug": 803.0,
    "vitamin_c_mg": 5.0,
    "vitamin_e_mg": 1.3,
    "vitamin_k_ug": 16.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709663",
  "state": "Cooked",
  "subcategory": "Carrots",
  "tags": [
    "carrots",
    "cooked",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
