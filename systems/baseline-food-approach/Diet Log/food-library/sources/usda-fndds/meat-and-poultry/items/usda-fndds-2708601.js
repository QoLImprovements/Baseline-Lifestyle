/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other Mexican mixed dishes",
  "id": "usda-fndds-2708601",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 105.0,
      "key": "1-large-taquito",
      "kind": "unit",
      "label": "1 large taquito"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Taquito, chicken",
  "nutritionPerBasis": {
    "calcium_mg": 127.0,
    "carbs_g": 31.6,
    "energy_kcal": 269.0,
    "fat_g": 10.4,
    "fibre_g": 3.3,
    "folate_ug": 35.0,
    "iron_mg": 1.81,
    "magnesium_mg": 40.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 258.0,
    "potassium_mg": 178.0,
    "protein_g": 12.5,
    "salt_g": 1.2275,
    "sat_fat_g": 3.26,
    "sodium_mg": 491.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708601",
  "state": "Unspecified",
  "subcategory": "Other Mexican mixed dishes",
  "tags": [
    "meat-and-poultry",
    "other-mexican-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
