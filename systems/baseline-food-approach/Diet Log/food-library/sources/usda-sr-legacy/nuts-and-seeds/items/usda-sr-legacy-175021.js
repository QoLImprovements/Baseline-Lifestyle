/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175021",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 833.0,
      "key": "pie",
      "kind": "unit",
      "label": "pie"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Pie, pecan, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 59.6,
    "energy_kcal": 1700.0,
    "fat_g": 16.7,
    "fibre_g": 2.1,
    "folate_ug": 32.0,
    "iron_mg": 0.93,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 99.0,
    "protein_g": 4.5,
    "salt_g": 0.6875,
    "sat_fat_g": 2.65,
    "sodium_mg": 275.0,
    "sugar_g": 25.2,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.8,
    "vitamin_k_ug": 15.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175021",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
