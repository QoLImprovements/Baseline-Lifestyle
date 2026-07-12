/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "doughnut-medium-approx-3-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174993",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 42.0,
      "key": "doughnut-medium-approx-3-dia",
      "kind": "unit",
      "label": "doughnut, medium (approx 3\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "doughnut-3-3-4-dia",
      "kind": "unit",
      "label": "doughnut (3-3/4\" dia)"
    }
  ],
  "name": "Doughnuts, cake-type, chocolate, sugared or glazed",
  "nutritionPerBasis": {
    "calcium_mg": 213.0,
    "carbs_g": 57.4,
    "energy_kcal": 1740.0,
    "fat_g": 19.9,
    "fibre_g": 2.2,
    "folate_ug": 45.0,
    "iron_mg": 2.27,
    "magnesium_mg": 34.0,
    "omega3_g": 0.004,
    "phosphorus_mg": 162.0,
    "potassium_mg": 106.0,
    "protein_g": 4.5,
    "salt_g": 0.5375,
    "sat_fat_g": 5.13,
    "sodium_mg": 215.0,
    "sugar_g": 31.9,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 9.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174993",
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
