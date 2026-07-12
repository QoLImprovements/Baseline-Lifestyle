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
  "id": "usda-fndds-2709498",
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
      "gramsPerUnit": 147.0,
      "key": "1-potato-any-size",
      "kind": "unit",
      "label": "1 potato, any size"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, mashed, from fresh, made with milk, with gravy",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 15.1,
    "energy_kcal": 100.0,
    "fat_g": 3.78,
    "fibre_g": 1.0,
    "folate_ug": 7.0,
    "iron_mg": 0.24,
    "magnesium_mg": 18.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 50.0,
    "potassium_mg": 273.0,
    "protein_g": 1.86,
    "salt_g": 0.615,
    "sat_fat_g": 1.84,
    "sodium_mg": 246.0,
    "sugar_g": 1.77,
    "vitamin_a_ug": 30.0,
    "vitamin_c_mg": 8.1,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709498",
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
