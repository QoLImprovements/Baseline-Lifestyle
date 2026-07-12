/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-pretzel-stick",
  "description": "Pretzels/snack mix",
  "id": "usda-fndds-2708271",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "1-pretzel-stick",
      "kind": "unit",
      "label": "1 pretzel stick"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "1-cup-nuggets",
      "kind": "unit",
      "label": "1 cup, nuggets"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-medium-regular",
      "kind": "unit",
      "label": "1 medium/regular"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-pretzel-ns-as-to-size",
      "kind": "unit",
      "label": "1 pretzel, NS as to size"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-bite-size-nugget",
      "kind": "unit",
      "label": "1 bite size/nugget"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    }
  ],
  "name": "Pretzels, soft, ready-to-eat, salted, no butter",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 70.1,
    "energy_kcal": 340.0,
    "fat_g": 3.06,
    "fibre_g": 1.7,
    "folate_ug": 24.0,
    "iron_mg": 3.87,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 87.0,
    "protein_g": 8.09,
    "salt_g": 1.9575,
    "sat_fat_g": 0.685,
    "sodium_mg": 783.0,
    "sugar_g": 0.25,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.53,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708271",
  "state": "Ready-to-eat",
  "subcategory": "Pretzels/snack mix",
  "tags": [
    "pretzels-snack-mix",
    "ready-to-eat",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
