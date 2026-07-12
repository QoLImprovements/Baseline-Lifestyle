/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cookie-dough-for-1rolled-cookie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174972",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "cookie-dough-for-1rolled-cookie",
      "kind": "unit",
      "label": "cookie dough for 1rolled cookie"
    },
    {
      "gramsPerUnit": 33.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "cookie-1-pre-sliced-cookie-dough",
      "kind": "unit",
      "label": "cookie 1 pre-sliced cookie dough"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cookies, sugar, refrigerated dough",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 61.2,
    "energy_kcal": 1820.0,
    "fat_g": 19.5,
    "fibre_g": 0.9,
    "folate_ug": 63.0,
    "iron_mg": 1.85,
    "magnesium_mg": 7.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 169.0,
    "potassium_mg": 147.0,
    "protein_g": 4.0,
    "salt_g": 0.82,
    "sat_fat_g": 4.96,
    "sodium_mg": 328.0,
    "sugar_g": 36.5,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 8.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174972",
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
