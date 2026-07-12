/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "serving-cookie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171868",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "serving-cookie",
      "kind": "unit",
      "label": "serving cookie"
    }
  ],
  "name": "Cookies, vanilla sandwich with creme filling, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 78.2,
    "energy_kcal": 1770.0,
    "fat_g": 10.4,
    "fibre_g": 2.1,
    "folate_ug": 93.0,
    "iron_mg": 2.25,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 60.0,
    "potassium_mg": 104.0,
    "protein_g": 4.17,
    "salt_g": 0.885,
    "sat_fat_g": 3.18,
    "sodium_mg": 354.0,
    "sugar_g": 37.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.31,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171868",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
