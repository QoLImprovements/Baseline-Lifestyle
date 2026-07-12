/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172719",
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
      "gramsPerUnit": 17.0,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    }
  ],
  "name": "Cookies, chocolate sandwich, with creme filling, regular, chocolate-coated",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 66.4,
    "energy_kcal": 2010.0,
    "fat_g": 26.4,
    "fibre_g": 5.2,
    "folate_ug": 18.0,
    "iron_mg": 3.13,
    "magnesium_mg": 39.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 90.0,
    "potassium_mg": 240.0,
    "protein_g": 3.6,
    "salt_g": 0.815,
    "sat_fat_g": 7.43,
    "sodium_mg": 326.0,
    "sugar_g": 49.6,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.58,
    "vitamin_k_ug": 11.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172719",
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
