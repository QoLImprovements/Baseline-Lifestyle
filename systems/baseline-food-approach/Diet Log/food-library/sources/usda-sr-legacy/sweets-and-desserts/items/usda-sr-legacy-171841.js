/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171841",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 34.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Cookies, chocolate sandwich, with creme filling, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 76.2,
    "energy_kcal": 1820.0,
    "fat_g": 13.2,
    "fibre_g": 2.9,
    "folate_ug": 68.0,
    "iron_mg": 3.18,
    "magnesium_mg": 25.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 66.0,
    "potassium_mg": 176.0,
    "protein_g": 2.94,
    "salt_g": 1.1775,
    "sat_fat_g": 2.94,
    "sodium_mg": 471.0,
    "sugar_g": 41.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.68,
    "vitamin_k_ug": 16.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171841",
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
