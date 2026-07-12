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
  "id": "usda-fndds-2709504",
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
  "name": "Potato, mashed, from dry mix, made with milk",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 12.6,
    "energy_kcal": 117.0,
    "fat_g": 6.7,
    "fibre_g": 0.9,
    "folate_ug": 7.0,
    "iron_mg": 0.19,
    "magnesium_mg": 13.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 48.0,
    "potassium_mg": 192.0,
    "protein_g": 2.05,
    "salt_g": 0.63,
    "sat_fat_g": 3.44,
    "sodium_mg": 252.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 11.7,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 3.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709504",
  "state": "Mashed",
  "subcategory": "Mashed potatoes and white potato mixtures",
  "tags": [
    "mashed",
    "mashed-potatoes-and-white-potato-mixtures",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
