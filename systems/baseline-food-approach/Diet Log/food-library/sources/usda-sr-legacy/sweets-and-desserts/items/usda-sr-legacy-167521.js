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
  "id": "usda-sr-legacy-167521",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "crust",
      "kind": "unit",
      "label": "crust"
    }
  ],
  "name": "Pie Crust, Cookie-type, Chocolate, Ready Crust",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 64.5,
    "energy_kcal": 484.0,
    "fat_g": 22.4,
    "fibre_g": 2.7,
    "folate_ug": 72.0,
    "iron_mg": 4.3,
    "magnesium_mg": 40.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 120.0,
    "potassium_mg": 187.0,
    "protein_g": 6.08,
    "salt_g": 1.2575,
    "sat_fat_g": 4.72,
    "sodium_mg": 503.0,
    "sugar_g": 26.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.79,
    "vitamin_k_ug": 18.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167521",
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
