/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Snacks",
  "defaultMeasure": "1-medium-single-serving-bag",
  "description": "Pretzels/snack mix",
  "id": "usda-fndds-2708213",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-100-calorie-package",
      "kind": "unit",
      "label": "1 100 calorie package"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    }
  ],
  "name": "Snack mix",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 63.1,
    "energy_kcal": 504.0,
    "fat_g": 25.8,
    "fibre_g": 3.1,
    "folate_ug": 65.0,
    "iron_mg": 2.08,
    "magnesium_mg": 48.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 165.0,
    "potassium_mg": 180.0,
    "protein_g": 6.87,
    "salt_g": 1.8225,
    "sat_fat_g": 3.03,
    "sodium_mg": 729.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 4.04,
    "vitamin_k_ug": 7.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708213",
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
