/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-bean",
  "description": "Other starchy vegetables",
  "id": "usda-fndds-2709849",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-bean",
      "kind": "unit",
      "label": "1 bean"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Lima beans, from frozen, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 18.7,
    "energy_kcal": 123.0,
    "fat_g": 2.88,
    "fibre_g": 5.1,
    "folate_ug": 20.0,
    "iron_mg": 1.76,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 295.0,
    "protein_g": 5.88,
    "salt_g": 0.47,
    "sat_fat_g": 0.741,
    "sodium_mg": 188.0,
    "sugar_g": 1.3,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 12.4,
    "vitamin_e_mg": 0.66,
    "vitamin_k_ug": 7.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709849",
  "state": "Frozen",
  "subcategory": "Other starchy vegetables",
  "tags": [
    "frozen",
    "legumes-and-pulses",
    "other-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
