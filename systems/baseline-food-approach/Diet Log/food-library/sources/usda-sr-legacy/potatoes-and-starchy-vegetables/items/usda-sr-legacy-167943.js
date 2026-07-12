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
  "id": "usda-sr-legacy-167943",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Bread, potato",
  "nutritionPerBasis": {
    "calcium_mg": 188.0,
    "carbs_g": 47.1,
    "energy_kcal": 1120.0,
    "fat_g": 3.13,
    "fibre_g": 6.3,
    "folate_ug": 126.0,
    "iron_mg": 2.25,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 369.0,
    "potassium_mg": 718.0,
    "protein_g": 12.5,
    "salt_g": 0.9375,
    "sat_fat_g": 0.0,
    "sodium_mg": 375.0,
    "sugar_g": 9.38,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.47,
    "vitamin_k_ug": 6.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167943",
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
