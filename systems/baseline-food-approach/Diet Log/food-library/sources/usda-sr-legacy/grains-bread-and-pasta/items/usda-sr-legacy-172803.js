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
  "id": "usda-sr-legacy-172803",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 2.3,
      "key": "0-5-tsp",
      "kind": "unit",
      "label": "0.5 tsp"
    },
    {
      "gramsPerUnit": 4.6,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Leavening agents, baking powder, double-acting, sodium aluminum sulfate",
  "nutritionPerBasis": {
    "calcium_mg": 5880.0,
    "carbs_g": 27.7,
    "energy_kcal": 53.0,
    "fat_g": 0.0,
    "fibre_g": 0.2,
    "folate_ug": 0.0,
    "iron_mg": 11.0,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 2190.0,
    "potassium_mg": 20.0,
    "protein_g": 0.0,
    "salt_g": 26.5,
    "sat_fat_g": 0.0,
    "sodium_mg": 10600.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172803",
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
