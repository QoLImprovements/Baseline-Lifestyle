/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "3-cookies",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171859",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "3-cookies",
      "kind": "unit",
      "label": "3 cookies"
    }
  ],
  "name": "Cookies, gluten-free, lemon wafer",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 74.4,
    "energy_kcal": 2160.0,
    "fat_g": 24.2,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.18,
    "magnesium_mg": 3.0,
    "omega3_g": 0.09,
    "phosphorus_mg": 39.0,
    "potassium_mg": 36.0,
    "protein_g": 0.0,
    "salt_g": 0.2775,
    "sat_fat_g": 10.5,
    "sodium_mg": 111.0,
    "sugar_g": 42.3,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.12,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171859",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
