/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-item",
  "description": "Mashed potatoes and white potato mixtures",
  "id": "usda-fndds-2709553",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-item",
      "kind": "unit",
      "label": "1 item"
    },
    {
      "gramsPerUnit": 1.2,
      "key": "1-surface-inch",
      "kind": "unit",
      "label": "1 surface inch"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Lefse",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 36.4,
    "energy_kcal": 218.0,
    "fat_g": 6.34,
    "fibre_g": 2.0,
    "folate_ug": 37.0,
    "iron_mg": 1.75,
    "magnesium_mg": 22.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 64.0,
    "potassium_mg": 271.0,
    "protein_g": 4.37,
    "salt_g": 0.43,
    "sat_fat_g": 2.72,
    "sodium_mg": 172.0,
    "sugar_g": 2.31,
    "vitamin_a_ug": 56.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709553",
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
