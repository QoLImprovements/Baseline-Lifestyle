/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Olives, pickles, pickled vegetables",
  "id": "usda-fndds-2710081",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Eggplant, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 9.74,
    "energy_kcal": 41.0,
    "fat_g": 0.16,
    "fibre_g": 2.5,
    "folate_ug": 16.0,
    "iron_mg": 0.2,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 190.0,
    "protein_g": 0.81,
    "salt_g": 2.365,
    "sat_fat_g": 0.028,
    "sodium_mg": 946.0,
    "sugar_g": 7.8,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710081",
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
