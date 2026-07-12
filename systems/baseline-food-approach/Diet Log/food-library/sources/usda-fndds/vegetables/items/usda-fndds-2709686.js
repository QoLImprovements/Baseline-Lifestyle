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
  "id": "usda-fndds-2709686",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Peas and carrots, canned, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 8.45,
    "energy_kcal": 46.0,
    "fat_g": 0.5,
    "fibre_g": 3.2,
    "folate_ug": 19.0,
    "iron_mg": 0.91,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 46.0,
    "potassium_mg": 142.0,
    "protein_g": 2.56,
    "salt_g": 0.645,
    "sat_fat_g": 0.09,
    "sodium_mg": 258.0,
    "sugar_g": 2.74,
    "vitamin_a_ug": 300.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 23.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709686",
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
