/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "cookie-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171842",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 38.0,
      "key": "cookie-1-serving",
      "kind": "unit",
      "label": "cookie 1 serving"
    }
  ],
  "name": "Cookies, oatmeal sandwich, with creme filling",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 55.6,
    "energy_kcal": 1660.0,
    "fat_g": 18.3,
    "fibre_g": 2.6,
    "folate_ug": 38.0,
    "iron_mg": 1.88,
    "magnesium_mg": 35.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 94.0,
    "potassium_mg": 136.0,
    "protein_g": 2.61,
    "salt_g": 1.25,
    "sat_fat_g": 5.23,
    "sodium_mg": 500.0,
    "sugar_g": 31.4,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.21,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171842",
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
