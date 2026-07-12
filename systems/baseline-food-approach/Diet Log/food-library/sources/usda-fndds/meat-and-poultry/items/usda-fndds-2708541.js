/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-large",
  "description": "Burritos and tacos",
  "id": "usda-fndds-2708541",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 330.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
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
      "gramsPerUnit": 220.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    }
  ],
  "name": "Burrito, pork, with beans, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 23.9,
    "energy_kcal": 220.0,
    "fat_g": 8.78,
    "fibre_g": 2.5,
    "folate_ug": 46.0,
    "iron_mg": 2.23,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 173.0,
    "potassium_mg": 211.0,
    "protein_g": 10.8,
    "salt_g": 1.2075,
    "sat_fat_g": 3.52,
    "sodium_mg": 483.0,
    "sugar_g": 1.68,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708541",
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
