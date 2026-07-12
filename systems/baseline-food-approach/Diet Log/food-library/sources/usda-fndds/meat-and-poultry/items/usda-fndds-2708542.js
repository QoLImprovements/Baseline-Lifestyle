/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cup",
  "description": "Burritos and tacos",
  "id": "usda-fndds-2708542",
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
      "gramsPerUnit": 220.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 330.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 220.0,
      "key": "1-small-regular",
      "kind": "unit",
      "label": "1 small/regular"
    }
  ],
  "name": "Burrito, pork, with beans and rice, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 103.0,
    "carbs_g": 26.0,
    "energy_kcal": 226.0,
    "fat_g": 8.52,
    "fibre_g": 2.0,
    "folate_ug": 51.0,
    "iron_mg": 2.19,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 166.0,
    "potassium_mg": 168.0,
    "protein_g": 10.5,
    "salt_g": 1.1575,
    "sat_fat_g": 3.43,
    "sodium_mg": 463.0,
    "sugar_g": 1.61,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708542",
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
