/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709836",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-spear",
      "kind": "unit",
      "label": "1 spear"
    }
  ],
  "name": "Asparagus, canned, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 2.46,
    "energy_kcal": 19.0,
    "fat_g": 0.65,
    "fibre_g": 1.6,
    "folate_ug": 91.0,
    "iron_mg": 1.83,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 43.0,
    "potassium_mg": 172.0,
    "protein_g": 2.14,
    "salt_g": 0.7175,
    "sat_fat_g": 0.147,
    "sodium_mg": 287.0,
    "sugar_g": 1.06,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 16.6,
    "vitamin_e_mg": 1.22,
    "vitamin_k_ug": 41.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709836",
  "state": "Canned",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "canned",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
