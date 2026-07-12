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
  "id": "usda-fndds-2709985",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "1-snow-pea",
      "kind": "unit",
      "label": "1 snow pea"
    },
    {
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Snowpeas, NS as to form, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 7.62,
    "energy_kcal": 66.0,
    "fat_g": 2.85,
    "fibre_g": 2.6,
    "folate_ug": 36.0,
    "iron_mg": 2.1,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 54.0,
    "potassium_mg": 202.0,
    "protein_g": 2.83,
    "salt_g": 0.325,
    "sat_fat_g": 0.733,
    "sodium_mg": 130.0,
    "sugar_g": 4.04,
    "vitamin_a_ug": 64.0,
    "vitamin_c_mg": 51.4,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 27.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709985",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "other-vegetables-and-combinations",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
