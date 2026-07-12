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
  "id": "usda-sr-legacy-174991",
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
      "gramsPerUnit": 67.0,
      "key": "doughnut-large-approx-3-1-2-dia",
      "kind": "unit",
      "label": "doughnut large (approx 3-1/2\" dia)"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "donettes-2-dia",
      "kind": "unit",
      "label": "donettes (2\" dia)"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "doughnut-medium-approx-3-dia",
      "kind": "unit",
      "label": "doughnut, medium (approx 3\" dia)"
    }
  ],
  "name": "Doughnuts, cake-type, plain, chocolate-coated or frosted",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 51.3,
    "energy_kcal": 1890.0,
    "fat_g": 25.2,
    "fibre_g": 1.9,
    "folate_ug": 65.0,
    "iron_mg": 4.0,
    "magnesium_mg": 30.0,
    "omega3_g": 0.166,
    "phosphorus_mg": 210.0,
    "potassium_mg": 201.0,
    "protein_g": 4.93,
    "salt_g": 0.815,
    "sat_fat_g": 13.5,
    "sodium_mg": 326.0,
    "sugar_g": 26.6,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 1.3,
    "vitamin_e_mg": 2.02,
    "vitamin_k_ug": 7.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174991",
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
