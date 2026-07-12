/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cookie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-171865",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    }
  ],
  "name": "Cookies, oatmeal, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 64.6,
    "energy_kcal": 365.0,
    "fat_g": 10.0,
    "fibre_g": 16.1,
    "folate_ug": 54.0,
    "iron_mg": 1.45,
    "magnesium_mg": 32.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 92.0,
    "potassium_mg": 274.0,
    "protein_g": 4.02,
    "salt_g": 1.405,
    "sat_fat_g": 4.09,
    "sodium_mg": 562.0,
    "sugar_g": 32.1,
    "vitamin_a_ug": 92.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.1,
    "vitamin_k_ug": 11.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171865",
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
