/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-kernel",
  "description": "Popcorn",
  "id": "usda-fndds-2708229",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 0.2,
      "key": "1-kernel",
      "kind": "unit",
      "label": "1 kernel"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "1-cup-popped",
      "kind": "unit",
      "label": "1 cup, popped"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-regular-microwave-bag",
      "kind": "unit",
      "label": "1 regular microwave bag"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "1-snack-mini-microwave-bag",
      "kind": "unit",
      "label": "1 snack/mini microwave bag"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    }
  ],
  "name": "Popcorn, microwave, cheese flavored",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 54.8,
    "energy_kcal": 516.0,
    "fat_g": 30.4,
    "fibre_g": 10.2,
    "folate_ug": 22.0,
    "iron_mg": 2.25,
    "magnesium_mg": 101.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 252.0,
    "potassium_mg": 231.0,
    "protein_g": 9.1,
    "salt_g": 2.29,
    "sat_fat_g": 14.2,
    "sodium_mg": 916.0,
    "sugar_g": 0.61,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.06,
    "vitamin_k_ug": 28.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708229",
  "state": "Unspecified",
  "subcategory": "Popcorn",
  "tags": [
    "milk-dairy-and-eggs",
    "popcorn",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
