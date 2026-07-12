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
  "id": "usda-fndds-2709726",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    }
  ],
  "name": "Tomato, green, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 9.09,
    "energy_kcal": 40.0,
    "fat_g": 0.18,
    "fibre_g": 0.9,
    "folate_ug": 5.0,
    "iron_mg": 0.43,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 169.0,
    "protein_g": 1.0,
    "salt_g": 2.3875,
    "sat_fat_g": 0.023,
    "sodium_mg": 955.0,
    "sugar_g": 8.19,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 18.4,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 8.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709726",
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
