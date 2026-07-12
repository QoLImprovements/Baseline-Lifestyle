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
  "id": "usda-sr-legacy-172720",
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
      "gramsPerUnit": 13.0,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    }
  ],
  "name": "Cookies, chocolate sandwich, with extra creme filling",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 68.2,
    "energy_kcal": 497.0,
    "fat_g": 24.5,
    "fibre_g": 2.7,
    "folate_ug": 46.0,
    "iron_mg": 7.8,
    "magnesium_mg": 36.0,
    "omega3_g": 0.053,
    "phosphorus_mg": 69.0,
    "potassium_mg": 137.0,
    "protein_g": 4.33,
    "salt_g": 0.8775,
    "sat_fat_g": 5.45,
    "sodium_mg": 351.0,
    "sugar_g": 46.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.89,
    "vitamin_k_ug": 6.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172720",
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
