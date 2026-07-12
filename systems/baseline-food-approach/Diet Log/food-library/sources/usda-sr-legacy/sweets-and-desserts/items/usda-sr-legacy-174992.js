/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174992",
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
      "gramsPerUnit": 45.0,
      "key": "doughnut-medium-approx-3-dia",
      "kind": "unit",
      "label": "doughnut, medium (approx 3\" dia)"
    }
  ],
  "name": "Doughnuts, cake-type, plain, sugared or glazed",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 50.8,
    "energy_kcal": 1780.0,
    "fat_g": 22.9,
    "fibre_g": 1.5,
    "folate_ug": 46.0,
    "iron_mg": 1.06,
    "magnesium_mg": 17.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 117.0,
    "potassium_mg": 102.0,
    "protein_g": 5.2,
    "salt_g": 1.005,
    "sat_fat_g": 5.93,
    "sodium_mg": 402.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174992",
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
