/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "1-piece-slice",
  "description": "Carrots",
  "id": "usda-fndds-2709681",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece-slice",
      "kind": "unit",
      "label": "1 piece/slice"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    }
  ],
  "name": "Carrots, canned, reduced sodium, cooked with butter or margarine",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 5.21,
    "energy_kcal": 42.0,
    "fat_g": 2.33,
    "fibre_g": 1.7,
    "folate_ug": 7.0,
    "iron_mg": 0.51,
    "magnesium_mg": 9.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 20.0,
    "potassium_mg": 154.0,
    "protein_g": 0.59,
    "salt_g": 0.125,
    "sat_fat_g": 0.97,
    "sodium_mg": 50.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 565.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 10.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709681",
  "state": "Canned",
  "subcategory": "Carrots",
  "tags": [
    "canned",
    "carrots",
    "oils-and-fats"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
