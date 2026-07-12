/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "package-17-5-oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174952",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 496.0,
      "key": "package-17-5-oz",
      "kind": "unit",
      "label": "package (17.5 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, chocolate chip, dry mix",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 66.1,
    "energy_kcal": 2080.0,
    "fat_g": 25.2,
    "fibre_g": 0.0,
    "folate_ug": 51.0,
    "iron_mg": 2.07,
    "magnesium_mg": 36.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 80.0,
    "potassium_mg": 208.0,
    "protein_g": 4.6,
    "salt_g": 0.725,
    "sat_fat_g": 8.32,
    "sodium_mg": 290.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174952",
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
