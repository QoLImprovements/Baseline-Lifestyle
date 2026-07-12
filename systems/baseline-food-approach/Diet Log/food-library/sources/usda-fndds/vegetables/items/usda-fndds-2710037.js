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
  "id": "usda-fndds-2710037",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 188.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Jai, Monk's Food",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 7.72,
    "energy_kcal": 60.0,
    "fat_g": 1.86,
    "fibre_g": 1.7,
    "folate_ug": 20.0,
    "iron_mg": 0.82,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 70.0,
    "potassium_mg": 193.0,
    "protein_g": 4.25,
    "salt_g": 0.07,
    "sat_fat_g": 0.283,
    "sodium_mg": 28.0,
    "sugar_g": 1.15,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 1.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710037",
  "state": "Unspecified",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "other-vegetables-and-combinations",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
