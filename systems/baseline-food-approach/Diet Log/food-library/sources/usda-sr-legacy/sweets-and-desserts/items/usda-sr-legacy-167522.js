/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "pie",
  "description": "Baked Products",
  "id": "usda-sr-legacy-167522",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1137.0,
      "key": "pie",
      "kind": "unit",
      "label": "pie"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "0-12-pie-1-pie-1-8-of-9-pie",
      "kind": "unit",
      "label": "0.12 pie 1 pie (1/8 of 9\" pie)"
    },
    {
      "gramsPerUnit": 137.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    }
  ],
  "name": "Pie, Dutch Apple, Commercially Prepared",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 44.5,
    "energy_kcal": 1220.0,
    "fat_g": 11.5,
    "fibre_g": 1.6,
    "folate_ug": 21.0,
    "iron_mg": 0.91,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 76.0,
    "protein_g": 2.17,
    "salt_g": 0.5,
    "sat_fat_g": 2.31,
    "sodium_mg": 200.0,
    "sugar_g": 22.0,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 5.7,
    "vitamin_e_mg": 0.96,
    "vitamin_k_ug": 16.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167522",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
