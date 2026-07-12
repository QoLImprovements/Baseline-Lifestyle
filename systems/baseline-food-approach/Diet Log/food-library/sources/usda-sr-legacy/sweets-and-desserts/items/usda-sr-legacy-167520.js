/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "crust",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167520",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 183.0,
      "key": "crust",
      "kind": "unit",
      "label": "crust"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Pie Crust, Cookie-type, Graham Cracker, Ready Crust",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 64.3,
    "energy_kcal": 501.0,
    "fat_g": 24.8,
    "fibre_g": 1.9,
    "folate_ug": 65.0,
    "iron_mg": 2.6,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 117.0,
    "potassium_mg": 113.0,
    "protein_g": 5.1,
    "salt_g": 1.1775,
    "sat_fat_g": 5.0,
    "sodium_mg": 471.0,
    "sugar_g": 18.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.85,
    "vitamin_k_ug": 21.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167520",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
