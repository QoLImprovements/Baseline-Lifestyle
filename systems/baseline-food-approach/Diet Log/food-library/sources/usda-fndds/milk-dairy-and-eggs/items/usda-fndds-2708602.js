/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-large-taquito",
  "description": "Egg/breakfast sandwiches",
  "id": "usda-fndds-2708602",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-large-taquito",
      "kind": "unit",
      "label": "1 large taquito"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-flauta-any-size",
      "kind": "unit",
      "label": "1 flauta, any size"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-miniature-taquito",
      "kind": "unit",
      "label": "1 miniature taquito"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-small-regular-taquito",
      "kind": "unit",
      "label": "1 small/regular taquito"
    }
  ],
  "name": "Taquito, egg",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 29.2,
    "energy_kcal": 281.0,
    "fat_g": 13.6,
    "fibre_g": 2.0,
    "folate_ug": 71.0,
    "iron_mg": 2.71,
    "magnesium_mg": 18.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 192.0,
    "potassium_mg": 137.0,
    "protein_g": 9.9,
    "salt_g": 1.3875,
    "sat_fat_g": 3.68,
    "sodium_mg": 555.0,
    "sugar_g": 2.29,
    "vitamin_a_ug": 55.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 9.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708602",
  "state": "Unspecified",
  "subcategory": "Egg/breakfast sandwiches",
  "tags": [
    "egg-breakfast-sandwiches",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
