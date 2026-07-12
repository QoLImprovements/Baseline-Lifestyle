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
  "id": "usda-fndds-2709915",
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
      "gramsPerUnit": 108.0,
      "key": "1-regular-ear",
      "kind": "unit",
      "label": "1 regular ear"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-mini-ear",
      "kind": "unit",
      "label": "1 mini ear"
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
    }
  ],
  "name": "Corn, frozen, cooked, fat added, NS as to fat type",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 18.7,
    "energy_kcal": 101.0,
    "fat_g": 3.2,
    "fibre_g": 2.3,
    "folate_ug": 34.0,
    "iron_mg": 0.46,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 226.0,
    "protein_g": 2.48,
    "salt_g": 0.305,
    "sat_fat_g": 0.766,
    "sodium_mg": 122.0,
    "sugar_g": 2.98,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 3.4,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709915",
  "state": "Frozen",
  "subcategory": "Corn",
  "tags": [
    "corn",
    "frozen",
    "other-foods"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
