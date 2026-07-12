/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2710020",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 93.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Classic mixed vegetables, canned, cooked with oil",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 8.58,
    "energy_kcal": 71.0,
    "fat_g": 3.54,
    "fibre_g": 2.5,
    "folate_ug": 24.0,
    "iron_mg": 0.7,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 39.0,
    "potassium_mg": 125.0,
    "protein_g": 2.05,
    "salt_g": 0.6075,
    "sat_fat_g": 0.515,
    "sodium_mg": 243.0,
    "sugar_g": 2.72,
    "vitamin_a_ug": 151.0,
    "vitamin_c_mg": 2.5,
    "vitamin_e_mg": 0.85,
    "vitamin_k_ug": 23.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710020",
  "state": "Canned",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "canned",
    "oils-and-fats",
    "other-vegetables-and-combinations"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
