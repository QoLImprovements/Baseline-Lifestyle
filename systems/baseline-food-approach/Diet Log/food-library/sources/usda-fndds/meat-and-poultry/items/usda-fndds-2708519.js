/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-small-regular",
  "description": "Burritos and tacos",
  "id": "usda-fndds-2708519",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "1-small-regular",
      "kind": "unit",
      "label": "1 small/regular"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    }
  ],
  "name": "Taco, corn tortilla, chicken, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 15.3,
    "energy_kcal": 211.0,
    "fat_g": 9.6,
    "fibre_g": 2.1,
    "folate_ug": 4.0,
    "iron_mg": 0.8,
    "magnesium_mg": 39.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 237.0,
    "potassium_mg": 210.0,
    "protein_g": 16.2,
    "salt_g": 0.945,
    "sat_fat_g": 2.46,
    "sodium_mg": 378.0,
    "sugar_g": 0.34,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 5.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708519",
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
