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
  "id": "usda-fndds-2709506",
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
  "name": "Potato, mashed, from dry mix, made with milk, with gravy",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 11.2,
    "energy_kcal": 103.0,
    "fat_g": 5.88,
    "fibre_g": 0.8,
    "folate_ug": 6.0,
    "iron_mg": 0.17,
    "magnesium_mg": 11.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 43.0,
    "potassium_mg": 162.0,
    "protein_g": 1.78,
    "salt_g": 0.7,
    "sat_fat_g": 2.88,
    "sodium_mg": 280.0,
    "sugar_g": 1.34,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 9.3,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 3.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709506",
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
