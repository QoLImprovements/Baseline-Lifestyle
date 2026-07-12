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
  "id": "usda-fndds-2709501",
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
  "name": "Potato, mashed, from restaurant, with gravy",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 14.5,
    "energy_kcal": 120.0,
    "fat_g": 6.3,
    "fibre_g": 0.9,
    "folate_ug": 6.0,
    "iron_mg": 0.24,
    "magnesium_mg": 17.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 49.0,
    "potassium_mg": 261.0,
    "protein_g": 1.8,
    "salt_g": 0.9325,
    "sat_fat_g": 2.92,
    "sodium_mg": 373.0,
    "sugar_g": 1.7,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709501",
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
