/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709290",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-pouch",
      "kind": "unit",
      "label": "1 pouch"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-snack-size-container",
      "kind": "unit",
      "label": "1 snack size container"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Fruit cocktail, canned, in syrup",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 15.8,
    "energy_kcal": 62.0,
    "fat_g": 0.07,
    "fibre_g": 0.9,
    "folate_ug": 3.0,
    "iron_mg": 0.23,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 87.0,
    "protein_g": 0.39,
    "salt_g": 0.01,
    "sat_fat_g": 0.006,
    "sodium_mg": 4.0,
    "sugar_g": 14.9,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 1.9,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709290",
  "state": "Canned",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "canned",
    "fruit",
    "other-fruits-and-fruit-salads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
