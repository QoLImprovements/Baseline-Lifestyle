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
  "id": "usda-fndds-2708289",
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
      "gramsPerUnit": 14.0,
      "key": "1-bite-size-nugget",
      "kind": "unit",
      "label": "1 bite size/nugget"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "1-cup-nuggets",
      "kind": "unit",
      "label": "1 cup, nuggets"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-pretzel-ns-as-to-size",
      "kind": "unit",
      "label": "1 pretzel, NS as to size"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-medium-regular",
      "kind": "unit",
      "label": "1 medium/regular"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pretzels, soft, gluten free, coated or flavored",
  "nutritionPerBasis": {
    "calcium_mg": 93.0,
    "carbs_g": 54.2,
    "energy_kcal": 326.0,
    "fat_g": 10.4,
    "fibre_g": 3.7,
    "folate_ug": 23.0,
    "iron_mg": 1.77,
    "magnesium_mg": 10.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 44.0,
    "potassium_mg": 71.0,
    "protein_g": 4.1,
    "salt_g": 2.02,
    "sat_fat_g": 4.76,
    "sodium_mg": 808.0,
    "sugar_g": 3.56,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.86,
    "vitamin_k_ug": 0.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708289",
  "state": "Unspecified",
  "subcategory": "Pretzels/snack mix",
  "tags": [
    "pretzels-snack-mix",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
