/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "portion-dough-for-1-cookie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172729",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "portion-dough-for-1-cookie",
      "kind": "unit",
      "label": "portion, dough for 1 cookie"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, peanut butter, refrigerated dough",
  "nutritionPerBasis": {
    "calcium_mg": 101.0,
    "carbs_g": 52.1,
    "energy_kcal": 1920.0,
    "fat_g": 25.0,
    "fibre_g": 1.1,
    "folate_ug": 57.0,
    "iron_mg": 1.7,
    "magnesium_mg": 37.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 241.0,
    "potassium_mg": 308.0,
    "protein_g": 8.2,
    "salt_g": 0.9925,
    "sat_fat_g": 5.79,
    "sodium_mg": 397.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172729",
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
