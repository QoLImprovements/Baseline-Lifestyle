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
  "id": "usda-fndds-2710087",
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
      "gramsPerUnit": 11.0,
      "key": "1-pod",
      "kind": "unit",
      "label": "1 pod"
    }
  ],
  "name": "Okra, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 11.0,
    "energy_kcal": 48.0,
    "fat_g": 0.17,
    "fibre_g": 2.7,
    "folate_ug": 42.0,
    "iron_mg": 0.52,
    "magnesium_mg": 47.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 51.0,
    "potassium_mg": 248.0,
    "protein_g": 1.6,
    "salt_g": 2.375,
    "sat_fat_g": 0.022,
    "sodium_mg": 950.0,
    "sugar_g": 6.1,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 16.2,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 26.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710087",
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
