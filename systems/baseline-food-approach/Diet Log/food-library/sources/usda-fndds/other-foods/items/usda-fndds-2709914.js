/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "1-cup",
  "description": "Corn",
  "id": "usda-fndds-2709914",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 108.0,
      "key": "1-regular-ear",
      "kind": "unit",
      "label": "1 regular ear"
    }
  ],
  "name": "Corn, fresh, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 2.0,
    "carbs_g": 18.1,
    "energy_kcal": 106.0,
    "fat_g": 3.85,
    "fibre_g": 1.9,
    "folate_ug": 35.0,
    "iron_mg": 0.51,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 86.0,
    "potassium_mg": 262.0,
    "protein_g": 3.17,
    "salt_g": 0.34,
    "sat_fat_g": 0.981,
    "sodium_mg": 136.0,
    "sugar_g": 6.06,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 5.6,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709914",
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
