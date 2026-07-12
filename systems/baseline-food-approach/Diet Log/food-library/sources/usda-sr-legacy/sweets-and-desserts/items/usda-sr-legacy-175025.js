/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "pie-crust-average-weight-of-1-baked-crust",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175025",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "pie-crust-average-weight-of-1-baked-crust",
      "kind": "unit",
      "label": "pie crust (average weight of 1 baked crust)"
    }
  ],
  "name": "Pie crust, standard-type, frozen, ready-to-bake, enriched, baked",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 56.2,
    "energy_kcal": 508.0,
    "fat_g": 28.6,
    "fibre_g": 3.3,
    "folate_ug": 68.0,
    "iron_mg": 2.8,
    "magnesium_mg": 17.0,
    "omega3_g": 0.138,
    "phosphorus_mg": 82.0,
    "potassium_mg": 114.0,
    "protein_g": 6.5,
    "salt_g": 1.1675,
    "sat_fat_g": 9.28,
    "sodium_mg": 467.0,
    "sugar_g": 4.23,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175025",
  "state": "Baked",
  "subcategory": "Baked Products",
  "tags": [
    "baked",
    "baked-products",
    "sweets-and-desserts"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
