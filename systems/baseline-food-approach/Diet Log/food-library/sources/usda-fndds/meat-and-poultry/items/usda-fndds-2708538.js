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
  "id": "usda-fndds-2708538",
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
      "gramsPerUnit": 220.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Burrito, beef, with beans and rice, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 102.0,
    "carbs_g": 26.0,
    "energy_kcal": 225.0,
    "fat_g": 8.29,
    "fibre_g": 2.0,
    "folate_ug": 52.0,
    "iron_mg": 2.34,
    "magnesium_mg": 21.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 165.0,
    "potassium_mg": 169.0,
    "protein_g": 10.8,
    "salt_g": 1.1625,
    "sat_fat_g": 3.4,
    "sodium_mg": 465.0,
    "sugar_g": 1.61,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708538",
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
