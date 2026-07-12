/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-oz-dry-yield-after-cooking",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707381",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-oz-dry-yield-after-cooking",
      "kind": "unit",
      "label": "1 oz dry, yield after cooking"
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
  "name": "Kidney beans, from dried, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 22.7,
    "energy_kcal": 126.0,
    "fat_g": 0.5,
    "fibre_g": 7.4,
    "folate_ug": 123.0,
    "iron_mg": 2.92,
    "magnesium_mg": 45.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 141.0,
    "potassium_mg": 401.0,
    "protein_g": 8.62,
    "salt_g": 0.5825,
    "sat_fat_g": 0.072,
    "sodium_mg": 233.0,
    "sugar_g": 0.32,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.1,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 8.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707381",
  "state": "Dried",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "dried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
