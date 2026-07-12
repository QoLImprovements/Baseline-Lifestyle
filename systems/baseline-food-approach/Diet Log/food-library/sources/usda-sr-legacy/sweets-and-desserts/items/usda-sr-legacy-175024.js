/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "pie-crust-average-weight-of-1-frozen-crust",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175024",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 173.0,
      "key": "pie-crust-average-weight-of-1-frozen-crust",
      "kind": "unit",
      "label": "pie crust (average weight of 1 frozen crust)"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "piece-1-8-of-9-crust",
      "kind": "unit",
      "label": "piece (1/8 of 9\" crust)"
    }
  ],
  "name": "Pie crust, standard-type, frozen, ready-to-bake, enriched",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 48.6,
    "energy_kcal": 1910.0,
    "fat_g": 26.1,
    "fibre_g": 2.5,
    "folate_ug": 70.0,
    "iron_mg": 2.6,
    "magnesium_mg": 15.0,
    "omega3_g": 0.122,
    "phosphorus_mg": 72.0,
    "potassium_mg": 97.0,
    "protein_g": 6.16,
    "salt_g": 1.0225,
    "sat_fat_g": 8.16,
    "sodium_mg": 409.0,
    "sugar_g": 3.72,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 5.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175024",
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
