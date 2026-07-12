/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-mini-ear",
  "description": "Corn",
  "id": "usda-fndds-2709909",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-mini-ear",
      "kind": "unit",
      "label": "1 mini ear"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-baby-corn",
      "kind": "unit",
      "label": "1 baby corn"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "1-regular-ear",
      "kind": "unit",
      "label": "1 regular ear"
    }
  ],
  "name": "Corn, cooked, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 17.7,
    "energy_kcal": 119.0,
    "fat_g": 5.43,
    "fibre_g": 1.9,
    "folate_ug": 34.0,
    "iron_mg": 0.5,
    "magnesium_mg": 35.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 85.0,
    "potassium_mg": 257.0,
    "protein_g": 3.11,
    "salt_g": 0.53,
    "sat_fat_g": 1.4,
    "sodium_mg": 212.0,
    "sugar_g": 5.94,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 3.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709909",
  "state": "Cooked",
  "subcategory": "Corn",
  "tags": [
    "cooked",
    "corn",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
