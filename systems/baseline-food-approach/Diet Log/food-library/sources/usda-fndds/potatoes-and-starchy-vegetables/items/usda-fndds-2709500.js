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
  "id": "usda-fndds-2709500",
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
  "name": "Potato, mashed, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 16.8,
    "energy_kcal": 138.0,
    "fat_g": 7.22,
    "fibre_g": 1.1,
    "folate_ug": 7.0,
    "iron_mg": 0.27,
    "magnesium_mg": 20.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 56.0,
    "potassium_mg": 315.0,
    "protein_g": 2.07,
    "salt_g": 0.925,
    "sat_fat_g": 3.49,
    "sodium_mg": 370.0,
    "sugar_g": 2.05,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 9.6,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 3.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709500",
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
