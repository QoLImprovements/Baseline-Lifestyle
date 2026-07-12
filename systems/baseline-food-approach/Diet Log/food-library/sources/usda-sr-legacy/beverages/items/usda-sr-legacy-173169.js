/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "bottle",
  "description": "Beverages",
  "id": "usda-sr-legacy-173169",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 237.0,
      "key": "bottle",
      "kind": "unit",
      "label": "bottle"
    }
  ],
  "name": "Beverages, NESTLE, Boost plus, nutritional drink, ready-to-drink",
  "nutritionPerBasis": {
    "calcium_mg": 135.0,
    "carbs_g": 17.3,
    "energy_kcal": 579.0,
    "fat_g": 5.38,
    "fibre_g": 1.2,
    "folate_ug": 38.0,
    "iron_mg": 1.73,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 115.0,
    "potassium_mg": 138.0,
    "protein_g": 5.38,
    "salt_g": 0.1925,
    "sat_fat_g": 0.42,
    "sodium_mg": 77.0,
    "sugar_g": 8.46,
    "vitamin_a_ug": 84.0,
    "vitamin_c_mg": 23.1,
    "vitamin_e_mg": 5.19,
    "vitamin_k_ug": 12.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173169",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
