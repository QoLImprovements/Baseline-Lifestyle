/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-miniature",
  "description": "Burritos and tacos",
  "id": "usda-fndds-2708545",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-small-regular",
      "kind": "unit",
      "label": "1 small/regular"
    },
    {
      "gramsPerUnit": 330.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Burrito, chicken, with beans, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 23.9,
    "energy_kcal": 203.0,
    "fat_g": 6.71,
    "fibre_g": 2.5,
    "folate_ug": 47.0,
    "iron_mg": 2.04,
    "magnesium_mg": 26.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 178.0,
    "potassium_mg": 210.0,
    "protein_g": 11.4,
    "salt_g": 1.2175,
    "sat_fat_g": 2.62,
    "sodium_mg": 487.0,
    "sugar_g": 1.68,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708545",
  "state": "Unspecified",
  "subcategory": "Burritos and tacos",
  "tags": [
    "burritos-and-tacos",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
