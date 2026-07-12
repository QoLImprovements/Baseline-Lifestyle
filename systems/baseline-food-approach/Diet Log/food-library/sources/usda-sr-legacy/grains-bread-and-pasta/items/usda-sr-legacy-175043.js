/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "tbsp",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175043",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 12.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 7.2,
      "key": "packet",
      "kind": "unit",
      "label": "packet"
    }
  ],
  "name": "Leavening agents, yeast, baker's, active dry",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 41.2,
    "energy_kcal": 325.0,
    "fat_g": 7.61,
    "fibre_g": 26.9,
    "folate_ug": 2340.0,
    "iron_mg": 2.17,
    "magnesium_mg": 54.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 637.0,
    "potassium_mg": 955.0,
    "protein_g": 40.4,
    "salt_g": 0.1275,
    "sat_fat_g": 1.0,
    "sodium_mg": 51.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175043",
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
