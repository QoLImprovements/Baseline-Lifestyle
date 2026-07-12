/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-potato-any-size",
  "description": "Mashed potatoes and white potato mixtures",
  "id": "usda-fndds-2709499",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Potato, mashed, from fresh, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 17.6,
    "energy_kcal": 114.0,
    "fat_g": 4.07,
    "fibre_g": 1.2,
    "folate_ug": 8.0,
    "iron_mg": 0.28,
    "magnesium_mg": 21.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 58.0,
    "potassium_mg": 330.0,
    "protein_g": 2.15,
    "salt_g": 0.525,
    "sat_fat_g": 2.15,
    "sodium_mg": 210.0,
    "sugar_g": 2.13,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 10.1,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709499",
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
