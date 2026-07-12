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
  "id": "usda-fndds-2710138",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-fritter-4-x-2-1-4-x-3-4",
      "kind": "unit",
      "label": "1 fritter (4\" x 2-1/4\" x 3/4\")"
    }
  ],
  "name": "Fried stuffed potatoes, Puerto Rican style",
  "nutritionPerBasis": {
    "calcium_mg": 17.0,
    "carbs_g": 16.2,
    "energy_kcal": 185.0,
    "fat_g": 11.3,
    "fibre_g": 1.9,
    "folate_ug": 14.0,
    "iron_mg": 1.12,
    "magnesium_mg": 22.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 79.0,
    "potassium_mg": 370.0,
    "protein_g": 4.9,
    "salt_g": 0.36,
    "sat_fat_g": 2.19,
    "sodium_mg": 144.0,
    "sugar_g": 0.9,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 12.1,
    "vitamin_e_mg": 1.75,
    "vitamin_k_ug": 10.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710138",
  "state": "Fried",
  "subcategory": "Mashed potatoes and white potato mixtures",
  "tags": [
    "fried",
    "mashed-potatoes-and-white-potato-mixtures",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
