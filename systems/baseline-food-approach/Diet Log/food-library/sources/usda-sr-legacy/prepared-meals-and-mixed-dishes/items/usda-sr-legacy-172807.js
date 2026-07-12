/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172807",
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
      "gramsPerUnit": 15.0,
      "key": "cookie-2-5-8-dia",
      "kind": "unit",
      "label": "cookie (2-5/8\" dia)"
    }
  ],
  "name": "Cookies, oatmeal, prepared from recipe, without raisins",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 66.4,
    "energy_kcal": 1870.0,
    "fat_g": 17.9,
    "fibre_g": 0.0,
    "folate_ug": 33.0,
    "iron_mg": 2.7,
    "magnesium_mg": 43.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 167.0,
    "potassium_mg": 182.0,
    "protein_g": 6.8,
    "salt_g": 1.495,
    "sat_fat_g": 3.58,
    "sodium_mg": 598.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 160.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172807",
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
