/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174971",
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
  "name": "Cookies, sugar, commercially prepared, regular (includes vanilla)",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 67.3,
    "energy_kcal": 1940.0,
    "fat_g": 19.6,
    "fibre_g": 1.3,
    "folate_ug": 72.0,
    "iron_mg": 2.24,
    "magnesium_mg": 13.0,
    "omega3_g": 0.268,
    "phosphorus_mg": 99.0,
    "potassium_mg": 87.0,
    "protein_g": 5.35,
    "salt_g": 0.9625,
    "sat_fat_g": 7.67,
    "sodium_mg": 385.0,
    "sugar_g": 27.3,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 3.07,
    "vitamin_k_ug": 8.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174971",
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
