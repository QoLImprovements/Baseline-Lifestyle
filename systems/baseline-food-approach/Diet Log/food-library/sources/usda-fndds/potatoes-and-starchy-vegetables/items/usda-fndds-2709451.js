/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Mashed potatoes and white potato mixtures",
  "id": "usda-fndds-2709451",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Potato, scalloped, from fresh, with meat",
  "nutritionPerBasis": {
    "calcium_mg": 182.0,
    "carbs_g": 12.9,
    "energy_kcal": 173.0,
    "fat_g": 10.4,
    "fibre_g": 0.7,
    "folate_ug": 10.0,
    "iron_mg": 0.31,
    "magnesium_mg": 21.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 156.0,
    "potassium_mg": 250.0,
    "protein_g": 7.44,
    "salt_g": 0.895,
    "sat_fat_g": 5.46,
    "sodium_mg": 358.0,
    "sugar_g": 2.08,
    "vitamin_a_ug": 106.0,
    "vitamin_c_mg": 6.0,
    "vitamin_e_mg": 0.43,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709451",
  "state": "Unspecified",
  "subcategory": "Mashed potatoes and white potato mixtures",
  "tags": [
    "mashed-potatoes-and-white-potato-mixtures",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
