/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "3-cookies",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167593",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "3-cookies",
      "kind": "unit",
      "label": "3 cookies"
    }
  ],
  "name": "Glutino, Gluten Free Cookies, Vanilla Creme",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 77.3,
    "energy_kcal": 2040.0,
    "fat_g": 18.8,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.23,
    "magnesium_mg": 9.0,
    "omega3_g": 0.053,
    "phosphorus_mg": 32.0,
    "potassium_mg": 67.0,
    "protein_g": 2.19,
    "salt_g": 0.4725,
    "sat_fat_g": 8.09,
    "sodium_mg": 189.0,
    "sugar_g": 49.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167593",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
