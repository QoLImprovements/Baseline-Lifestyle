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
  "id": "usda-fndds-2710007",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Lima beans and corn, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 19.2,
    "energy_kcal": 92.0,
    "fat_g": 0.5,
    "fibre_g": 3.8,
    "folate_ug": 28.0,
    "iron_mg": 1.14,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 88.0,
    "potassium_mg": 268.0,
    "protein_g": 4.3,
    "salt_g": 0.3775,
    "sat_fat_g": 0.09,
    "sodium_mg": 151.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 2.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710007",
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
