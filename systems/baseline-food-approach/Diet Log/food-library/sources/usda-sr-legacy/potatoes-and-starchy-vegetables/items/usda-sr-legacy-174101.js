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
  "id": "usda-sr-legacy-174101",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bread, gluten-free, white, made with tapioca starch and brown rice flour",
  "nutritionPerBasis": {
    "calcium_mg": 59.0,
    "carbs_g": 51.2,
    "energy_kcal": 1250.0,
    "fat_g": 8.02,
    "fibre_g": 5.5,
    "folate_ug": 19.0,
    "iron_mg": 0.53,
    "magnesium_mg": 25.0,
    "omega3_g": 0.485,
    "phosphorus_mg": 70.0,
    "potassium_mg": 107.0,
    "protein_g": 5.4,
    "salt_g": 1.2875,
    "sat_fat_g": 0.629,
    "sodium_mg": 515.0,
    "sugar_g": 11.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.61,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174101",
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
