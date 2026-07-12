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
  "id": "usda-fndds-2709538",
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
  "name": "Potato salad with egg, made with Italian dressing",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 15.8,
    "energy_kcal": 114.0,
    "fat_g": 4.42,
    "fibre_g": 1.3,
    "folate_ug": 13.0,
    "iron_mg": 0.4,
    "magnesium_mg": 16.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 52.0,
    "potassium_mg": 263.0,
    "protein_g": 2.8,
    "salt_g": 0.53,
    "sat_fat_g": 0.846,
    "sodium_mg": 212.0,
    "sugar_g": 2.41,
    "vitamin_a_ug": 19.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 10.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709538",
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
