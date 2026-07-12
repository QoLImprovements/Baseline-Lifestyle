/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "3-cookies",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171860",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "3-cookies",
      "kind": "unit",
      "label": "3 cookies"
    }
  ],
  "name": "Cookies, gluten-free, vanilla sandwich, with creme filling",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 74.6,
    "energy_kcal": 493.0,
    "fat_g": 20.5,
    "fibre_g": 0.5,
    "folate_ug": 0.0,
    "iron_mg": 0.34,
    "magnesium_mg": 13.0,
    "omega3_g": 0.413,
    "phosphorus_mg": 39.0,
    "potassium_mg": 105.0,
    "protein_g": 2.66,
    "salt_g": 0.5025,
    "sat_fat_g": 7.01,
    "sodium_mg": 201.0,
    "sugar_g": 46.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171860",
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
