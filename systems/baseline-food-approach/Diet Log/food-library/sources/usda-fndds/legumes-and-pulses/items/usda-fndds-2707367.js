/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-oz-dry-yield-after-cooking",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707367",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 72.0,
      "key": "1-oz-dry-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz dry, yield after cooking"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fava beans, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 18.3,
    "energy_kcal": 161.0,
    "fat_g": 6.88,
    "fibre_g": 5.0,
    "folate_ug": 92.0,
    "iron_mg": 1.4,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 116.0,
    "potassium_mg": 249.0,
    "protein_g": 7.06,
    "salt_g": 0.55,
    "sat_fat_g": 0.931,
    "sodium_mg": 220.0,
    "sugar_g": 1.69,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 1.25,
    "vitamin_k_ug": 9.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707367",
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
