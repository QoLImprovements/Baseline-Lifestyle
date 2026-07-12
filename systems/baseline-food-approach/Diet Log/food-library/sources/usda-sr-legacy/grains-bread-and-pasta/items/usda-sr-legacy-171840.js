/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "brownie-1-serving",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171840",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 36.0,
      "key": "brownie-1-serving",
      "kind": "unit",
      "label": "brownie 1 serving"
    }
  ],
  "name": "Cookies, brownies, commercially prepared, reduced fat, with added fiber",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 61.6,
    "energy_kcal": 1440.0,
    "fat_g": 9.68,
    "fibre_g": 11.1,
    "folate_ug": 42.0,
    "iron_mg": 1.99,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 143.0,
    "protein_g": 2.77,
    "salt_g": 0.725,
    "sat_fat_g": 2.77,
    "sodium_mg": 290.0,
    "sugar_g": 38.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.59,
    "vitamin_k_ug": 8.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171840",
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
