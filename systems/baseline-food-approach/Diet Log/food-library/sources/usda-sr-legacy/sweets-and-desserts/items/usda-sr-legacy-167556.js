/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "oz",
  "description": "Snacks",
  "id": "usda-sr-legacy-167556",
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
      "gramsPerUnit": 11.0,
      "key": "pretzel",
      "kind": "unit",
      "label": "pretzel"
    }
  ],
  "name": "Snacks, pretzels, hard, confectioner's coating, chocolate-flavor",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 70.9,
    "energy_kcal": 457.0,
    "fat_g": 16.7,
    "fibre_g": 2.4,
    "folate_ug": 9.0,
    "iron_mg": 2.0,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 145.0,
    "potassium_mg": 225.0,
    "protein_g": 7.5,
    "salt_g": 1.4225,
    "sat_fat_g": 7.68,
    "sodium_mg": 569.0,
    "sugar_g": 38.8,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.62,
    "vitamin_k_ug": 11.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167556",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "snacks",
    "sweets-and-desserts",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
