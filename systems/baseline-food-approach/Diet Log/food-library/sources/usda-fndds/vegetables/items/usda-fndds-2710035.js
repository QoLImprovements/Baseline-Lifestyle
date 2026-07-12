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
  "id": "usda-fndds-2710035",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Asian stir fry vegetables, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 9.93,
    "energy_kcal": 50.0,
    "fat_g": 0.3,
    "fibre_g": 2.9,
    "folate_ug": 35.0,
    "iron_mg": 1.04,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 251.0,
    "protein_g": 2.07,
    "salt_g": 0.3525,
    "sat_fat_g": 0.047,
    "sodium_mg": 141.0,
    "sugar_g": 3.63,
    "vitamin_a_ug": 226.0,
    "vitamin_c_mg": 36.3,
    "vitamin_e_mg": 0.48,
    "vitamin_k_ug": 38.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710035",
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
