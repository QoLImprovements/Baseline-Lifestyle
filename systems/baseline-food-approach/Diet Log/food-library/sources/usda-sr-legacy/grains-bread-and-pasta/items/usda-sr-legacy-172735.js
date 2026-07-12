/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cookie-1-rolled-cookie-dough",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172735",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "cookie-1-rolled-cookie-dough",
      "kind": "unit",
      "label": "cookie 1 rolled cookie dough"
    },
    {
      "gramsPerUnit": 23.0,
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
  "name": "Cookies, sugar, refrigerated dough, baked",
  "nutritionPerBasis": {
    "calcium_mg": 90.0,
    "carbs_g": 65.6,
    "energy_kcal": 489.0,
    "fat_g": 23.1,
    "fibre_g": 0.9,
    "folate_ug": 70.0,
    "iron_mg": 1.84,
    "magnesium_mg": 8.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 187.0,
    "potassium_mg": 163.0,
    "protein_g": 4.7,
    "salt_g": 0.905,
    "sat_fat_g": 5.91,
    "sodium_mg": 362.0,
    "sugar_g": 40.4,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172735",
  "state": "Baked",
  "subcategory": "Baked Products",
  "tags": [
    "baked",
    "baked-products",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
