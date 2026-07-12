/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "0-5-tsp",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172805",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "0-5-tsp",
      "kind": "unit",
      "label": "0.5 tsp"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Leavening agents, baking powder, low-sodium",
  "nutritionPerBasis": {
    "calcium_mg": 4330.0,
    "carbs_g": 46.9,
    "energy_kcal": 97.0,
    "fat_g": 0.4,
    "fibre_g": 2.2,
    "folate_ug": 0.0,
    "iron_mg": 8.17,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 6870.0,
    "potassium_mg": 10100.0,
    "protein_g": 0.1,
    "salt_g": 0.225,
    "sat_fat_g": 0.073,
    "sodium_mg": 90.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172805",
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
