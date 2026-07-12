/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Pineapple",
  "id": "usda-fndds-2709261",
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
      "gramsPerUnit": 56.0,
      "key": "1-slice-ring",
      "kind": "unit",
      "label": "1 slice/ring"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-chunk",
      "kind": "unit",
      "label": "1 chunk"
    }
  ],
  "name": "Pineapple, canned, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 13.9,
    "energy_kcal": 55.0,
    "fat_g": 0.12,
    "fibre_g": 0.7,
    "folate_ug": 5.0,
    "iron_mg": 0.42,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 5.0,
    "potassium_mg": 141.0,
    "protein_g": 0.42,
    "salt_g": 0.005,
    "sat_fat_g": 0.009,
    "sodium_mg": 2.0,
    "sugar_g": 13.1,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 7.1,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709261",
  "state": "Canned",
  "subcategory": "Pineapple",
  "tags": [
    "canned",
    "fruit",
    "pineapple"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
