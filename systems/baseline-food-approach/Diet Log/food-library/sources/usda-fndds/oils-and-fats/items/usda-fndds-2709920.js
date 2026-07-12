/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-regular-ear",
  "description": "Corn",
  "id": "usda-fndds-2709920",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "1-regular-ear",
      "kind": "unit",
      "label": "1 regular ear"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-mini-ear",
      "kind": "unit",
      "label": "1 mini ear"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-baby-corn",
      "kind": "unit",
      "label": "1 baby corn"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Corn, frozen, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 18.7,
    "energy_kcal": 98.0,
    "fat_g": 2.84,
    "fibre_g": 2.3,
    "folate_ug": 34.0,
    "iron_mg": 0.46,
    "magnesium_mg": 27.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 77.0,
    "potassium_mg": 226.0,
    "protein_g": 2.48,
    "salt_g": 0.3275,
    "sat_fat_g": 1.04,
    "sodium_mg": 131.0,
    "sugar_g": 2.98,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 3.4,
    "vitamin_e_mg": 0.28,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709920",
  "state": "Frozen",
  "subcategory": "Corn",
  "tags": [
    "corn",
    "frozen",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
