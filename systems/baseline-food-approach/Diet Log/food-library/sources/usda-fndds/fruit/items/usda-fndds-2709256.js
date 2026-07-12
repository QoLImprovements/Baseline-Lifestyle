/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Pears",
  "id": "usda-fndds-2709256",
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
      "gramsPerUnit": 113.0,
      "key": "1-snack-size-container",
      "kind": "unit",
      "label": "1 snack size container"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "1-half",
      "kind": "unit",
      "label": "1 half"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-slice-chunk",
      "kind": "unit",
      "label": "1 slice/chunk"
    }
  ],
  "name": "Pear, canned, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 13.5,
    "energy_kcal": 52.0,
    "fat_g": 0.06,
    "fibre_g": 1.5,
    "folate_ug": 1.0,
    "iron_mg": 0.25,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 75.0,
    "protein_g": 0.2,
    "salt_g": 0.0075,
    "sat_fat_g": 0.006,
    "sodium_mg": 3.0,
    "sugar_g": 11.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709256",
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
