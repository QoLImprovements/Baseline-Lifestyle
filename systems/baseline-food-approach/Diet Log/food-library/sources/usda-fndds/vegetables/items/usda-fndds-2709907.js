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
  "id": "usda-fndds-2709907",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 218.0,
      "key": "1-fennel-bulb",
      "kind": "unit",
      "label": "1 fennel bulb"
    }
  ],
  "name": "Fennel bulb, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 56.0,
    "carbs_g": 8.32,
    "energy_kcal": 62.0,
    "fat_g": 3.22,
    "fibre_g": 3.5,
    "folate_ug": 26.0,
    "iron_mg": 0.84,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 57.0,
    "potassium_mg": 472.0,
    "protein_g": 1.42,
    "salt_g": 0.505,
    "sat_fat_g": 0.886,
    "sodium_mg": 202.0,
    "sugar_g": 4.48,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 11.6,
    "vitamin_e_mg": 1.11,
    "vitamin_k_ug": 74.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709907",
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
