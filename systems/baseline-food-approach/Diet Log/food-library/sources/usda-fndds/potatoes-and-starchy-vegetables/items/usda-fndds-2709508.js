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
  "id": "usda-fndds-2709508",
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
  "name": "Potato, mashed, ready-to-heat, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 106.0,
    "carbs_g": 12.1,
    "energy_kcal": 138.0,
    "fat_g": 8.12,
    "fibre_g": 1.7,
    "folate_ug": 8.0,
    "iron_mg": 0.26,
    "magnesium_mg": 15.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 104.0,
    "potassium_mg": 253.0,
    "protein_g": 4.26,
    "salt_g": 0.84,
    "sat_fat_g": 4.41,
    "sodium_mg": 336.0,
    "sugar_g": 1.61,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 2.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709508",
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
