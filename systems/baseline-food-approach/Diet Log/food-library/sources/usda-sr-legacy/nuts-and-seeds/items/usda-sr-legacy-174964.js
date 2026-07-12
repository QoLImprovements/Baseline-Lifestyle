/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174964",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "cookie-3-dia",
      "kind": "unit",
      "label": "cookie (3\" dia)"
    }
  ],
  "name": "Cookies, peanut butter, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 58.9,
    "energy_kcal": 1990.0,
    "fat_g": 23.8,
    "fibre_g": 0.0,
    "folate_ug": 55.0,
    "iron_mg": 2.23,
    "magnesium_mg": 39.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 116.0,
    "potassium_mg": 231.0,
    "protein_g": 9.0,
    "salt_g": 1.295,
    "sat_fat_g": 4.44,
    "sodium_mg": 518.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 137.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174964",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
