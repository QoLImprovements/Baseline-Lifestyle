/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-stalk",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709778",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-stalk",
      "kind": "unit",
      "label": "1 stalk"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-stick",
      "kind": "unit",
      "label": "1 stick"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Celery, raw",
  "nutritionPerBasis": {
    "calcium_mg": 46.0,
    "carbs_g": 3.32,
    "energy_kcal": 17.0,
    "fat_g": 0.16,
    "fibre_g": 1.6,
    "folate_ug": 36.0,
    "iron_mg": 0.0,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 265.0,
    "protein_g": 0.49,
    "salt_g": 0.2425,
    "sat_fat_g": 0.042,
    "sodium_mg": 97.0,
    "sugar_g": 1.34,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 29.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709778",
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
