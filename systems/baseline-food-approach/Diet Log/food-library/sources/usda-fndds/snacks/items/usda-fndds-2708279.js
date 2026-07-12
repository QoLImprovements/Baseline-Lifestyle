/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-cup-nuggets",
  "description": "Pretzels/snack mix",
  "id": "usda-fndds-2708279",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "1-cup-nuggets",
      "kind": "unit",
      "label": "1 cup, nuggets"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-pretzel-stick",
      "kind": "unit",
      "label": "1 pretzel stick"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-bite-size-nugget",
      "kind": "unit",
      "label": "1 bite size/nugget"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "1-medium-regular",
      "kind": "unit",
      "label": "1 medium/regular"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "1-pretzel-ns-as-to-size",
      "kind": "unit",
      "label": "1 pretzel, NS as to size"
    }
  ],
  "name": "Pretzels, soft, from frozen, unsalted",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 71.0,
    "energy_kcal": 345.0,
    "fat_g": 3.1,
    "fibre_g": 1.7,
    "folate_ug": 24.0,
    "iron_mg": 3.92,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 79.0,
    "potassium_mg": 88.0,
    "protein_g": 8.2,
    "salt_g": 0.63,
    "sat_fat_g": 0.695,
    "sodium_mg": 252.0,
    "sugar_g": 0.25,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708279",
  "state": "Frozen",
  "subcategory": "Pretzels/snack mix",
  "tags": [
    "frozen",
    "pretzels-snack-mix",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
