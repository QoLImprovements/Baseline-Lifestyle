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
  "id": "usda-fndds-2709505",
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
  "name": "Potato, mashed, from dry mix, made with milk, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 11.5,
    "energy_kcal": 148.0,
    "fat_g": 9.62,
    "fibre_g": 0.8,
    "folate_ug": 9.0,
    "iron_mg": 0.18,
    "magnesium_mg": 14.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 92.0,
    "potassium_mg": 179.0,
    "protein_g": 4.32,
    "salt_g": 0.7375,
    "sat_fat_g": 5.13,
    "sodium_mg": 295.0,
    "sugar_g": 1.46,
    "vitamin_a_ug": 90.0,
    "vitamin_c_mg": 10.4,
    "vitamin_e_mg": 0.45,
    "vitamin_k_ug": 3.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709505",
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
