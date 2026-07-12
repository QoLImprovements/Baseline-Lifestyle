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
  "id": "usda-fndds-2710104",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
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
  "name": "Zucchini, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 7.44,
    "energy_kcal": 35.0,
    "fat_g": 0.28,
    "fibre_g": 0.8,
    "folate_ug": 17.0,
    "iron_mg": 0.31,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 217.0,
    "protein_g": 1.0,
    "salt_g": 2.3775,
    "sat_fat_g": 0.07,
    "sodium_mg": 951.0,
    "sugar_g": 6.94,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 12.6,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710104",
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
