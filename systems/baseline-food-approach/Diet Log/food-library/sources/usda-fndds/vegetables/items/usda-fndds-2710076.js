/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Olives, pickles, pickled vegetables",
  "id": "usda-fndds-2710076",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cabbage, red, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 10.5,
    "energy_kcal": 49.0,
    "fat_g": 0.19,
    "fibre_g": 1.7,
    "folate_ug": 13.0,
    "iron_mg": 0.0,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 30.0,
    "potassium_mg": 223.0,
    "protein_g": 1.03,
    "salt_g": 2.385,
    "sat_fat_g": 0.017,
    "sodium_mg": 954.0,
    "sugar_g": 8.05,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 38.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 26.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710076",
  "state": "Unspecified",
  "subcategory": "Olives, pickles, pickled vegetables",
  "tags": [
    "olives-pickles-pickled-vegetables",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
