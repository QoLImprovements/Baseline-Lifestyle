/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Broccoli",
  "id": "usda-fndds-2709572",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Broccoli raab, raw",
  "nutritionPerBasis": {
    "calcium_mg": 108.0,
    "carbs_g": 2.85,
    "energy_kcal": 22.0,
    "fat_g": 0.49,
    "fibre_g": 2.7,
    "folate_ug": 83.0,
    "iron_mg": 2.14,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 73.0,
    "potassium_mg": 196.0,
    "protein_g": 3.17,
    "salt_g": 0.0825,
    "sat_fat_g": 0.083,
    "sodium_mg": 33.0,
    "sugar_g": 0.38,
    "vitamin_a_ug": 131.0,
    "vitamin_c_mg": 20.2,
    "vitamin_e_mg": 1.62,
    "vitamin_k_ug": 224.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709572",
  "state": "Raw",
  "subcategory": "Broccoli",
  "tags": [
    "broccoli",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
