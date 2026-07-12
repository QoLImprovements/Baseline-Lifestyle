/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Peaches and nectarines",
  "id": "usda-fndds-2709250",
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
      "gramsPerUnit": 20.0,
      "key": "1-slice-chunk",
      "kind": "unit",
      "label": "1 slice/chunk"
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
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-half",
      "kind": "unit",
      "label": "1 half"
    }
  ],
  "name": "Peach, canned, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 11.9,
    "energy_kcal": 48.0,
    "fat_g": 0.09,
    "fibre_g": 1.2,
    "folate_ug": 3.0,
    "iron_mg": 0.34,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 116.0,
    "protein_g": 0.43,
    "salt_g": 0.01,
    "sat_fat_g": 0.009,
    "sodium_mg": 4.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 2.7,
    "vitamin_e_mg": 0.44,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709250",
  "state": "Canned",
  "subcategory": "Peaches and nectarines",
  "tags": [
    "canned",
    "fruit",
    "peaches-and-nectarines"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
