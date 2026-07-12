/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "3-cookies",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171857",
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
  "name": "Cookies, gluten-free, chocolate sandwich, with creme filling",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 76.0,
    "energy_kcal": 1980.0,
    "fat_g": 17.9,
    "fibre_g": 2.5,
    "folate_ug": 0.0,
    "iron_mg": 2.81,
    "magnesium_mg": 40.0,
    "omega3_g": 0.05,
    "phosphorus_mg": 70.0,
    "potassium_mg": 157.0,
    "protein_g": 2.19,
    "salt_g": 0.6875,
    "sat_fat_g": 7.9,
    "sodium_mg": 275.0,
    "sugar_g": 49.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 2.31,
    "vitamin_k_ug": 25.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171857",
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
