/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "waffle-round-7-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175039",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "waffle-round-7-dia",
      "kind": "unit",
      "label": "waffle, round (7\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Waffles, plain, prepared from recipe",
  "nutritionPerBasis": {
    "calcium_mg": 255.0,
    "carbs_g": 32.9,
    "energy_kcal": 1220.0,
    "fat_g": 14.1,
    "fibre_g": 0.0,
    "folate_ug": 46.0,
    "iron_mg": 2.31,
    "magnesium_mg": 19.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 190.0,
    "potassium_mg": 159.0,
    "protein_g": 7.9,
    "salt_g": 1.2775,
    "sat_fat_g": 2.87,
    "sodium_mg": 511.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175039",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
