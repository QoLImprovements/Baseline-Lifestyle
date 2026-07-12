/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Oils & Fats",
  "defaultMeasure": "cookie-medium-2-1-4-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174955",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "cookie-medium-2-1-4-dia",
      "kind": "unit",
      "label": "cookie, medium (2-1/4\" dia)"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "bar-2-square",
      "kind": "unit",
      "label": "bar (2\" square)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, chocolate chip, prepared from recipe, made with margarine",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 58.4,
    "energy_kcal": 2040.0,
    "fat_g": 28.3,
    "fibre_g": 2.8,
    "folate_ug": 33.0,
    "iron_mg": 2.46,
    "magnesium_mg": 55.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 100.0,
    "potassium_mg": 224.0,
    "protein_g": 5.7,
    "salt_g": 0.9025,
    "sat_fat_g": 8.07,
    "sodium_mg": 361.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 143.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174955",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "oils-and-fats",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
