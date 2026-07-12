/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "can-6-oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167553",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "can-6-oz",
      "kind": "unit",
      "label": "can (6 oz)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Snacks, potato chips, made from dried potatoes, reduced fat",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 64.8,
    "energy_kcal": 2100.0,
    "fat_g": 26.1,
    "fibre_g": 3.2,
    "folate_ug": 27.0,
    "iron_mg": 1.11,
    "magnesium_mg": 45.0,
    "omega3_g": 0.066,
    "phosphorus_mg": 129.0,
    "potassium_mg": 760.0,
    "protein_g": 4.56,
    "salt_g": 1.125,
    "sat_fat_g": 6.76,
    "sodium_mg": 450.0,
    "sugar_g": 0.63,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 2.18,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167553",
  "state": "Dried",
  "subcategory": "Snacks",
  "tags": [
    "dried",
    "potatoes-and-starchy-vegetables",
    "snacks"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
