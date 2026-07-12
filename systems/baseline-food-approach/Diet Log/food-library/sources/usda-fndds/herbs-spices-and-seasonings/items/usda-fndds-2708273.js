/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "1-pretzel-ns-as-to-size",
  "description": "Pretzels/snack mix",
  "id": "usda-fndds-2708273",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "1-pretzel-ns-as-to-size",
      "kind": "unit",
      "label": "1 pretzel, NS as to size"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-pretzel-stick",
      "kind": "unit",
      "label": "1 pretzel stick"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "1-medium-regular",
      "kind": "unit",
      "label": "1 medium/regular"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-bite-size-nugget",
      "kind": "unit",
      "label": "1 bite size/nugget"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "1-cup-nuggets",
      "kind": "unit",
      "label": "1 cup, nuggets"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    }
  ],
  "name": "Pretzels, soft, ready-to-eat, cinnamon sugar coated",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 74.0,
    "energy_kcal": 374.0,
    "fat_g": 6.14,
    "fibre_g": 2.1,
    "folate_ug": 18.0,
    "iron_mg": 3.08,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 73.0,
    "protein_g": 6.22,
    "salt_g": 0.62,
    "sat_fat_g": 2.85,
    "sodium_mg": 248.0,
    "sugar_g": 19.7,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708273",
  "state": "Ready-to-eat",
  "subcategory": "Pretzels/snack mix",
  "tags": [
    "herbs-spices-and-seasonings",
    "pretzels-snack-mix",
    "ready-to-eat"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
