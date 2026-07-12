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
  "id": "usda-fndds-2709848",
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
      "gramsPerUnit": 180.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lima beans, from frozen, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 19.3,
    "energy_kcal": 103.0,
    "fat_g": 0.34,
    "fibre_g": 5.3,
    "folate_ug": 21.0,
    "iron_mg": 1.82,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 303.0,
    "protein_g": 6.05,
    "salt_g": 0.4625,
    "sat_fat_g": 0.077,
    "sodium_mg": 185.0,
    "sugar_g": 1.34,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 12.8,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 5.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709848",
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
