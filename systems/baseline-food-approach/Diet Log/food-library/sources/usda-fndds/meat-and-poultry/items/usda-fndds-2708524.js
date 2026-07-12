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
  "id": "usda-fndds-2708524",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 105.0,
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
      "gramsPerUnit": 105.0,
      "key": "1-small-regular",
      "kind": "unit",
      "label": "1 small/regular"
    }
  ],
  "name": "Taco, flour tortilla, pork, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 18.9,
    "energy_kcal": 260.0,
    "fat_g": 12.8,
    "fibre_g": 1.3,
    "folate_ug": 36.0,
    "iron_mg": 2.21,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 198.0,
    "potassium_mg": 197.0,
    "protein_g": 16.1,
    "salt_g": 1.095,
    "sat_fat_g": 5.05,
    "sodium_mg": 438.0,
    "sugar_g": 1.45,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708524",
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
