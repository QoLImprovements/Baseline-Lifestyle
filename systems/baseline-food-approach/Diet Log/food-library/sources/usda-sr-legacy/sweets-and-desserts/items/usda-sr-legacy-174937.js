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
  "id": "usda-sr-legacy-174937",
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
      "gramsPerUnit": 50.0,
      "key": "piece-1-8-cake",
      "kind": "unit",
      "label": "piece (1/8 cake)"
    }
  ],
  "name": "Cake, coffeecake, fruit",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 51.5,
    "energy_kcal": 1300.0,
    "fat_g": 10.2,
    "fibre_g": 2.5,
    "folate_ug": 47.0,
    "iron_mg": 2.43,
    "magnesium_mg": 17.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 118.0,
    "potassium_mg": 90.0,
    "protein_g": 5.2,
    "salt_g": 0.9625,
    "sat_fat_g": 2.5,
    "sodium_mg": 385.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174937",
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
