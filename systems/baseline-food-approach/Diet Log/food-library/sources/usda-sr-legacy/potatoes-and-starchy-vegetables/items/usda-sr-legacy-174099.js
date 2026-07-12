/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "slice",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174099",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bread, gluten-free, white, made with potato extract, rice starch, and rice flour",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 52.8,
    "energy_kcal": 1340.0,
    "fat_g": 10.7,
    "fibre_g": 3.5,
    "folate_ug": 0.0,
    "iron_mg": 0.76,
    "magnesium_mg": 11.0,
    "omega3_g": 0.573,
    "phosphorus_mg": 37.0,
    "potassium_mg": 92.0,
    "protein_g": 3.13,
    "salt_g": 1.32,
    "sat_fat_g": 0.339,
    "sodium_mg": 528.0,
    "sugar_g": 8.36,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174099",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "potatoes-and-starchy-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
