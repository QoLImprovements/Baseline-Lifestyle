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
  "id": "usda-fndds-2708539",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 285.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 190.0,
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
      "gramsPerUnit": 190.0,
      "key": "1-small-regular",
      "kind": "unit",
      "label": "1 small/regular"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    }
  ],
  "name": "Burrito, pork, cheese",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 28.3,
    "energy_kcal": 268.0,
    "fat_g": 11.0,
    "fibre_g": 2.0,
    "folate_ug": 54.0,
    "iron_mg": 2.58,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 198.0,
    "potassium_mg": 163.0,
    "protein_g": 12.9,
    "salt_g": 1.1275,
    "sat_fat_g": 4.36,
    "sodium_mg": 451.0,
    "sugar_g": 2.16,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708539",
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
