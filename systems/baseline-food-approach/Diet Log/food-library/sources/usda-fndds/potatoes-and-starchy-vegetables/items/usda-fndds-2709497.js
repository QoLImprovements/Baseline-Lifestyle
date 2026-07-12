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
  "id": "usda-fndds-2709497",
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
    },
    {
      "gramsPerUnit": 147.0,
      "key": "1-potato-any-size",
      "kind": "unit",
      "label": "1 potato, any size"
    }
  ],
  "name": "Potato, mashed, from fresh, made with milk, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 16.0,
    "energy_kcal": 145.0,
    "fat_g": 7.28,
    "fibre_g": 1.0,
    "folate_ug": 9.0,
    "iron_mg": 0.27,
    "magnesium_mg": 22.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 101.0,
    "potassium_mg": 303.0,
    "protein_g": 4.41,
    "salt_g": 0.645,
    "sat_fat_g": 3.97,
    "sodium_mg": 258.0,
    "sugar_g": 1.94,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709497",
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
