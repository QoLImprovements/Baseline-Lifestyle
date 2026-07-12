/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Pears",
  "id": "usda-fndds-2709257",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-half",
      "kind": "unit",
      "label": "1 half"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-slice-chunk",
      "kind": "unit",
      "label": "1 slice/chunk"
    },
    {
      "gramsPerUnit": 113.0,
      "key": "1-snack-size-container",
      "kind": "unit",
      "label": "1 snack size container"
    }
  ],
  "name": "Pear, canned, in syrup",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 15.2,
    "energy_kcal": 59.0,
    "fat_g": 0.05,
    "fibre_g": 1.5,
    "folate_ug": 1.0,
    "iron_mg": 0.2,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6.0,
    "potassium_mg": 49.0,
    "protein_g": 0.18,
    "salt_g": 0.005,
    "sat_fat_g": 0.002,
    "sodium_mg": 2.0,
    "sugar_g": 13.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709257",
  "state": "Canned",
  "subcategory": "Pears",
  "tags": [
    "canned",
    "fruit",
    "pears"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
