/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-slice",
  "description": "Olives, pickles, pickled vegetables",
  "id": "usda-fndds-2710080",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-pickle-any-size",
      "kind": "unit",
      "label": "1 pickle, any size"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-stacker",
      "kind": "unit",
      "label": "1 stacker"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pickles, sweet",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 21.2,
    "energy_kcal": 91.0,
    "fat_g": 0.41,
    "fibre_g": 1.0,
    "folate_ug": 1.0,
    "iron_mg": 0.25,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 100.0,
    "protein_g": 0.58,
    "salt_g": 1.1425,
    "sat_fat_g": 0.067,
    "sodium_mg": 457.0,
    "sugar_g": 18.3,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 47.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710080",
  "state": "Unspecified",
  "subcategory": "Olives, pickles, pickled vegetables",
  "tags": [
    "olives-pickles-pickled-vegetables",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
