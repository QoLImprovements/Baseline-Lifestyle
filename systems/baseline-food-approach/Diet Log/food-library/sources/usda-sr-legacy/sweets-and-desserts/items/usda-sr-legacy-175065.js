/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece-1-8-of-9-crust",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175065",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "piece-1-8-of-9-crust",
      "kind": "unit",
      "label": "piece (1/8 of 9\" crust)"
    },
    {
      "gramsPerUnit": 142.0,
      "key": "crust-single-9",
      "kind": "unit",
      "label": "crust, single 9\""
    }
  ],
  "name": "Pie crust, standard-type, frozen, ready-to-bake, unenriched",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 44.1,
    "energy_kcal": 1910.0,
    "fat_g": 29.2,
    "fibre_g": 0.9,
    "folate_ug": 10.0,
    "iron_mg": 0.38,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 53.0,
    "potassium_mg": 98.0,
    "protein_g": 3.9,
    "salt_g": 1.44,
    "sat_fat_g": 4.36,
    "sodium_mg": 576.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175065",
  "state": "Frozen",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "frozen",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
