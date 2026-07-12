/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2710008",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Lima beans and corn, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 18.7,
    "energy_kcal": 112.0,
    "fat_g": 3.04,
    "fibre_g": 3.7,
    "folate_ug": 27.0,
    "iron_mg": 1.11,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 260.0,
    "protein_g": 4.18,
    "salt_g": 0.3875,
    "sat_fat_g": 0.753,
    "sodium_mg": 155.0,
    "sugar_g": 2.14,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 7.9,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 4.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710008",
  "state": "Cooked",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "cooked",
    "legumes-and-pulses",
    "other-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
