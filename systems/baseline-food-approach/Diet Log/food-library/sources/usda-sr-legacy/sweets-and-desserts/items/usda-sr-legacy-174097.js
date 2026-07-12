/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "bar",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174097",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 22.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Cookies, marshmallow, with rice cereal and chocolate chips",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 63.3,
    "energy_kcal": 1820.0,
    "fat_g": 18.2,
    "fibre_g": 0.0,
    "folate_ug": 36.0,
    "iron_mg": 1.64,
    "magnesium_mg": 51.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 98.0,
    "potassium_mg": 227.0,
    "protein_g": 4.55,
    "salt_g": 0.8525,
    "sat_fat_g": 11.4,
    "sodium_mg": 341.0,
    "sugar_g": 40.9,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174097",
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
