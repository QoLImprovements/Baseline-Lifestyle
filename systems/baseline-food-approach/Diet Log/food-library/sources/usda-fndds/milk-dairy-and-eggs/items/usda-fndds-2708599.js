/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708599",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-large-taquito",
      "kind": "unit",
      "label": "1 large taquito"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "1-miniature-taquito",
      "kind": "unit",
      "label": "1 miniature taquito"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-flauta-any-size",
      "kind": "unit",
      "label": "1 flauta, any size"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-small-regular-taquito",
      "kind": "unit",
      "label": "1 small/regular taquito"
    }
  ],
  "name": "Taquito, cheese only",
  "nutritionPerBasis": {
    "calcium_mg": 274.0,
    "carbs_g": 32.2,
    "energy_kcal": 309.0,
    "fat_g": 15.3,
    "fibre_g": 3.3,
    "folate_ug": 37.0,
    "iron_mg": 1.64,
    "magnesium_mg": 40.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 304.0,
    "potassium_mg": 132.0,
    "protein_g": 11.2,
    "salt_g": 1.58,
    "sat_fat_g": 6.59,
    "sodium_mg": 632.0,
    "sugar_g": 1.78,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 6.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708599",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "milk-dairy-and-eggs",
    "other-mexican-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
