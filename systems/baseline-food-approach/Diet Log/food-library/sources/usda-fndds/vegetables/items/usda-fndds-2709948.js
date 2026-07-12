/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-piece",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709948",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "1-piece",
      "kind": "unit",
      "label": "1 piece"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 190.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Okra, frozen, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 6.21,
    "energy_kcal": 51.0,
    "fat_g": 2.78,
    "fibre_g": 2.0,
    "folate_ug": 97.0,
    "iron_mg": 0.51,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 36.0,
    "potassium_mg": 178.0,
    "protein_g": 1.59,
    "salt_g": 0.31,
    "sat_fat_g": 0.727,
    "sodium_mg": 124.0,
    "sugar_g": 2.78,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 9.3,
    "vitamin_e_mg": 0.69,
    "vitamin_k_ug": 48.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709948",
  "state": "Frozen",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "frozen",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
