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
  "id": "usda-sr-legacy-174962",
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
      "gramsPerUnit": 12.0,
      "key": "cookie",
      "kind": "unit",
      "label": "cookie"
    }
  ],
  "name": "Cookies, oatmeal, refrigerated dough, baked",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 65.7,
    "energy_kcal": 1970.0,
    "fat_g": 21.0,
    "fibre_g": 2.8,
    "folate_ug": 27.0,
    "iron_mg": 2.38,
    "magnesium_mg": 32.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 116.0,
    "potassium_mg": 163.0,
    "protein_g": 6.0,
    "salt_g": 0.8175,
    "sat_fat_g": 5.34,
    "sodium_mg": 327.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174962",
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
