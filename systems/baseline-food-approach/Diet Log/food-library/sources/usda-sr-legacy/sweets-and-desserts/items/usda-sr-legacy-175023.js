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
  "id": "usda-sr-legacy-175023",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "piece-1-8-of-9-crust",
      "kind": "unit",
      "label": "piece (1/8 of 9\" crust)"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "crust-single-9",
      "kind": "unit",
      "label": "crust, single 9\""
    }
  ],
  "name": "Pie crust, standard-type, dry mix, prepared, baked",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 50.4,
    "energy_kcal": 2100.0,
    "fat_g": 30.4,
    "fibre_g": 1.8,
    "folate_ug": 70.0,
    "iron_mg": 2.15,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 62.0,
    "protein_g": 6.7,
    "salt_g": 1.8225,
    "sat_fat_g": 7.71,
    "sodium_mg": 729.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175023",
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
