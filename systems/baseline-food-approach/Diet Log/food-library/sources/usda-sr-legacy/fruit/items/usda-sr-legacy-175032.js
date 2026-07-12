/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "piece",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175032",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Strudel, apple",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 41.1,
    "energy_kcal": 1150.0,
    "fat_g": 11.2,
    "fibre_g": 2.2,
    "folate_ug": 28.0,
    "iron_mg": 0.42,
    "magnesium_mg": 9.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 33.0,
    "potassium_mg": 149.0,
    "protein_g": 3.3,
    "salt_g": 0.3375,
    "sat_fat_g": 2.04,
    "sodium_mg": 135.0,
    "sugar_g": 25.8,
    "vitamin_a_ug": 6.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 1.42,
    "vitamin_k_ug": 2.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175032",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "fruit",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
