/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Soups",
  "defaultMeasure": "1-cup",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2710029",
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
      "gramsPerUnit": 83.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Vegetables, stew type, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 15.1,
    "energy_kcal": 97.0,
    "fat_g": 3.64,
    "fibre_g": 2.0,
    "folate_ug": 18.0,
    "iron_mg": 0.25,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 309.0,
    "protein_g": 1.44,
    "salt_g": 0.4525,
    "sat_fat_g": 0.937,
    "sodium_mg": 181.0,
    "sugar_g": 3.04,
    "vitamin_a_ug": 257.0,
    "vitamin_c_mg": 8.8,
    "vitamin_e_mg": 0.75,
    "vitamin_k_ug": 8.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710029",
  "state": "Cooked",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "cooked",
    "other-vegetables-and-combinations",
    "soups"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
