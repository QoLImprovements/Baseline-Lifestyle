/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Sweets & Desserts",
  "defaultMeasure": "piece",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174939",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 43.0,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Cake, fruitcake, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 61.6,
    "energy_kcal": 1360.0,
    "fat_g": 9.1,
    "fibre_g": 3.7,
    "folate_ug": 20.0,
    "iron_mg": 2.07,
    "magnesium_mg": 16.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 52.0,
    "potassium_mg": 153.0,
    "protein_g": 2.9,
    "salt_g": 0.2525,
    "sat_fat_g": 1.05,
    "sodium_mg": 101.0,
    "sugar_g": 27.4,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174939",
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
