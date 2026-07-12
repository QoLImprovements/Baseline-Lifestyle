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
  "id": "usda-fndds-2709495",
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
  "name": "Potato, mashed, ready-to-heat",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 13.3,
    "energy_kcal": 106.0,
    "fat_g": 5.01,
    "fibre_g": 1.9,
    "folate_ug": 6.0,
    "iron_mg": 0.27,
    "magnesium_mg": 14.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 61.0,
    "potassium_mg": 274.0,
    "protein_g": 1.97,
    "salt_g": 0.745,
    "sat_fat_g": 2.63,
    "sodium_mg": 298.0,
    "sugar_g": 1.76,
    "vitamin_a_ug": 53.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709495",
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
