/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-floweret",
  "description": "Olives, pickles, pickled vegetables",
  "id": "usda-fndds-2710074",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-floweret",
      "kind": "unit",
      "label": "1 floweret"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cauliflower, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 8.98,
    "energy_kcal": 41.0,
    "fat_g": 0.25,
    "fibre_g": 1.7,
    "folate_ug": 40.0,
    "iron_mg": 0.35,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 248.0,
    "protein_g": 1.59,
    "salt_g": 2.4225,
    "sat_fat_g": 0.108,
    "sodium_mg": 969.0,
    "sugar_g": 6.45,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 34.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 12.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710074",
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
