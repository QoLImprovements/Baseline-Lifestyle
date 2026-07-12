/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-cup",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707436",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-pod-yields",
      "kind": "unit",
      "label": "1 pod, yields"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Edamame, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 8.63,
    "energy_kcal": 140.0,
    "fat_g": 7.58,
    "fibre_g": 5.0,
    "folate_ug": 286.0,
    "iron_mg": 2.2,
    "magnesium_mg": 62.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 164.0,
    "potassium_mg": 422.0,
    "protein_g": 11.5,
    "salt_g": 0.3175,
    "sat_fat_g": 1.27,
    "sodium_mg": 127.0,
    "sugar_g": 2.12,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 1.04,
    "vitamin_k_ug": 27.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707436",
  "state": "Cooked",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "cooked",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
