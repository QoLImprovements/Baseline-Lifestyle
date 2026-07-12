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
  "id": "usda-fndds-2709531",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 275.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato salad with egg, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 15.4,
    "energy_kcal": 175.0,
    "fat_g": 11.4,
    "fibre_g": 1.1,
    "folate_ug": 13.0,
    "iron_mg": 0.44,
    "magnesium_mg": 19.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 59.0,
    "potassium_mg": 286.0,
    "protein_g": 3.04,
    "salt_g": 0.8325,
    "sat_fat_g": 1.97,
    "sodium_mg": 333.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 8.8,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 23.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709531",
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
