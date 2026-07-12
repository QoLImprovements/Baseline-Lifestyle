/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-slice-chunk",
  "description": "Peaches and nectarines",
  "id": "usda-fndds-2709253",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-slice-chunk",
      "kind": "unit",
      "label": "1 slice/chunk"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-half",
      "kind": "unit",
      "label": "1 half"
    }
  ],
  "name": "Peach, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 10.1,
    "energy_kcal": 46.0,
    "fat_g": 0.27,
    "fibre_g": 1.5,
    "folate_ug": 6.0,
    "iron_mg": 0.34,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 122.0,
    "protein_g": 0.91,
    "salt_g": 0.0325,
    "sat_fat_g": 0.019,
    "sodium_mg": 13.0,
    "sugar_g": 8.39,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 4.1,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709253",
  "state": "Frozen",
  "subcategory": "Peaches and nectarines",
  "tags": [
    "frozen",
    "fruit",
    "peaches-and-nectarines"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
