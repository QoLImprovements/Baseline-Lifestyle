/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Mashed potatoes and white potato mixtures",
  "id": "usda-fndds-2709453",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, scalloped, from dry mix, with meat",
  "nutritionPerBasis": {
    "calcium_mg": 178.0,
    "carbs_g": 13.1,
    "energy_kcal": 167.0,
    "fat_g": 9.6,
    "fibre_g": 0.7,
    "folate_ug": 10.0,
    "iron_mg": 0.34,
    "magnesium_mg": 21.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 153.0,
    "potassium_mg": 245.0,
    "protein_g": 7.3,
    "salt_g": 1.105,
    "sat_fat_g": 5.1,
    "sodium_mg": 442.0,
    "sugar_g": 2.19,
    "vitamin_a_ug": 100.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709453",
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
