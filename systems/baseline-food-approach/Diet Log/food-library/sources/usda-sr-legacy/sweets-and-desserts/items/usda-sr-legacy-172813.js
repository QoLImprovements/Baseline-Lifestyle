/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-8-of-9-crust",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172813",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "piece-1-8-of-9-crust",
      "kind": "unit",
      "label": "piece (1/8 of 9\" crust)"
    },
    {
      "gramsPerUnit": 176.0,
      "key": "crust-single-9",
      "kind": "unit",
      "label": "crust, single 9\""
    },
    {
      "gramsPerUnit": 129.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Pie crust, cookie-type, prepared from recipe, vanilla wafer, chilled",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 50.2,
    "energy_kcal": 2220.0,
    "fat_g": 36.2,
    "fibre_g": 0.1,
    "folate_ug": 49.0,
    "iron_mg": 1.63,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 78.0,
    "potassium_mg": 79.0,
    "protein_g": 3.7,
    "salt_g": 1.2875,
    "sat_fat_g": 7.43,
    "sodium_mg": 515.0,
    "sugar_g": 7.33,
    "vitamin_a_ug": 269.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 3.06,
    "vitamin_k_ug": 34.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172813",
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
