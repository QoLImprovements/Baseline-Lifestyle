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
  "id": "usda-fndds-2710014",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
  "name": "Classic mixed vegetables, canned, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 8.84,
    "energy_kcal": 46.0,
    "fat_g": 0.65,
    "fibre_g": 2.6,
    "folate_ug": 24.0,
    "iron_mg": 0.72,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 128.0,
    "protein_g": 2.11,
    "salt_g": 0.625,
    "sat_fat_g": 0.129,
    "sodium_mg": 250.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 155.0,
    "vitamin_c_mg": 2.6,
    "vitamin_e_mg": 0.31,
    "vitamin_k_ug": 21.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710014",
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
