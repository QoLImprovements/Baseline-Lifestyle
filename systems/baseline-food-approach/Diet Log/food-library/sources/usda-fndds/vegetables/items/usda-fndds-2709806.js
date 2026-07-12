/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709806",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-snow-pea",
      "kind": "unit",
      "label": "1 snow pea"
    }
  ],
  "name": "Snowpeas, raw",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 7.55,
    "energy_kcal": 42.0,
    "fat_g": 0.2,
    "fibre_g": 2.6,
    "folate_ug": 42.0,
    "iron_mg": 2.08,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 200.0,
    "protein_g": 2.8,
    "salt_g": 0.01,
    "sat_fat_g": 0.039,
    "sodium_mg": 4.0,
    "sugar_g": 4.0,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 60.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 25.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709806",
  "state": "Raw",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "other-vegetables-and-combinations",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
