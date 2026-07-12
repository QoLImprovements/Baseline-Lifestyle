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
  "id": "usda-fndds-2709543",
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
  "name": "Potato salad, made with mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 15.8,
    "energy_kcal": 168.0,
    "fat_g": 11.1,
    "fibre_g": 1.5,
    "folate_ug": 9.0,
    "iron_mg": 0.3,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 36.0,
    "potassium_mg": 261.0,
    "protein_g": 1.51,
    "salt_g": 0.4475,
    "sat_fat_g": 1.75,
    "sodium_mg": 179.0,
    "sugar_g": 1.29,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 5.8,
    "vitamin_e_mg": 0.51,
    "vitamin_k_ug": 27.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709543",
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
