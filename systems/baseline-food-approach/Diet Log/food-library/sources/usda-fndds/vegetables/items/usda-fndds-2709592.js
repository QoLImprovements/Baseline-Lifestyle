/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709592",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 321.0,
      "key": "1-head",
      "kind": "unit",
      "label": "1 head"
    },
    {
      "gramsPerUnit": 68.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Escarole, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 2.98,
    "energy_kcal": 37.0,
    "fat_g": 2.72,
    "fibre_g": 2.7,
    "folate_ug": 76.0,
    "iron_mg": 0.7,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 238.0,
    "protein_g": 1.12,
    "salt_g": 0.3475,
    "sat_fat_g": 0.707,
    "sodium_mg": 139.0,
    "sugar_g": 0.23,
    "vitamin_a_ug": 102.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.77,
    "vitamin_k_ug": 207.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709592",
  "state": "Cooked",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "cooked",
    "other-dark-green-vegetables",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
