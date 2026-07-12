/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "quantity-not-specified",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707388",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 72.0,
      "key": "1-oz-dry-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz dry, yield after cooking"
    }
  ],
  "name": "Soybeans, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 7.77,
    "energy_kcal": 218.0,
    "fat_g": 14.8,
    "fibre_g": 5.6,
    "folate_ug": 48.0,
    "iron_mg": 4.79,
    "magnesium_mg": 80.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 228.0,
    "potassium_mg": 479.0,
    "protein_g": 16.9,
    "salt_g": 0.5425,
    "sat_fat_g": 2.08,
    "sodium_mg": 217.0,
    "sugar_g": 2.79,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 1.56,
    "vitamin_k_ug": 24.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707388",
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
