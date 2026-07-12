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
  "id": "usda-sr-legacy-174100",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bread, gluten-free, white, made with rice flour, corn starch, and/or tapioca",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 45.8,
    "energy_kcal": 248.0,
    "fat_g": 5.24,
    "fibre_g": 4.3,
    "folate_ug": 36.0,
    "iron_mg": 2.63,
    "magnesium_mg": 12.0,
    "omega3_g": 0.016,
    "phosphorus_mg": 51.0,
    "potassium_mg": 75.0,
    "protein_g": 4.31,
    "salt_g": 1.1175,
    "sat_fat_g": 0.977,
    "sodium_mg": 447.0,
    "sugar_g": 3.53,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.6,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174100",
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
