/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "quantity-not-specified",
  "description": "Mango and papaya",
  "id": "usda-fndds-2709247",
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
      "gramsPerUnit": 40.0,
      "key": "1-slice-chunk",
      "kind": "unit",
      "label": "1 slice/chunk"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Papaya, canned",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 13.1,
    "energy_kcal": 52.0,
    "fat_g": 0.21,
    "fibre_g": 1.3,
    "folate_ug": 17.0,
    "iron_mg": 0.19,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 123.0,
    "protein_g": 0.35,
    "salt_g": 0.0175,
    "sat_fat_g": 0.061,
    "sodium_mg": 7.0,
    "sugar_g": 10.9,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 36.5,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709247",
  "state": "Canned",
  "subcategory": "Mango and papaya",
  "tags": [
    "canned",
    "fruit",
    "mango-and-papaya"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
