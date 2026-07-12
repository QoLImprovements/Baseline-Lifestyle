/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Citrus fruits",
  "id": "usda-fndds-2709166",
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
      "gramsPerUnit": 25.0,
      "key": "1-section-slice",
      "kind": "unit",
      "label": "1 section/slice"
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
    }
  ],
  "name": "Grapefruit, canned",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 9.15,
    "energy_kcal": 36.0,
    "fat_g": 0.1,
    "fibre_g": 0.4,
    "folate_ug": 9.0,
    "iron_mg": 0.41,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 132.0,
    "protein_g": 0.58,
    "salt_g": 0.005,
    "sat_fat_g": 0.014,
    "sodium_mg": 2.0,
    "sugar_g": 8.75,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 21.8,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709166",
  "state": "Canned",
  "subcategory": "Citrus fruits",
  "tags": [
    "canned",
    "citrus-fruits",
    "fruit"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
