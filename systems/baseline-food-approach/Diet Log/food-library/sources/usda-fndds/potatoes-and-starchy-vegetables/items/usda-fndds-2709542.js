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
  "id": "usda-fndds-2709542",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 275.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Potato salad, from restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 17.3,
    "energy_kcal": 178.0,
    "fat_g": 11.4,
    "fibre_g": 1.3,
    "folate_ug": 8.0,
    "iron_mg": 0.34,
    "magnesium_mg": 20.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 44.0,
    "potassium_mg": 308.0,
    "protein_g": 1.73,
    "salt_g": 0.9025,
    "sat_fat_g": 1.79,
    "sodium_mg": 361.0,
    "sugar_g": 1.9,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 26.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709542",
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
