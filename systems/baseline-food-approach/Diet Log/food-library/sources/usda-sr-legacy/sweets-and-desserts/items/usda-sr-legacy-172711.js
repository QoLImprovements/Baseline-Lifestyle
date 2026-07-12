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
  "id": "usda-sr-legacy-172711",
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
      "gramsPerUnit": 80.0,
      "key": "piece-1-6-of-17-oz-cake",
      "kind": "unit",
      "label": "piece (1/6 of 17 oz cake)"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "piece-1-nlea-serving",
      "kind": "unit",
      "label": "piece (1 NLEA serving)"
    }
  ],
  "name": "Cake, cheesecake, commercially prepared",
  "nutritionPerBasis": {
    "calcium_mg": 51.0,
    "carbs_g": 25.5,
    "energy_kcal": 1340.0,
    "fat_g": 22.5,
    "fibre_g": 0.4,
    "folate_ug": 18.0,
    "iron_mg": 0.63,
    "magnesium_mg": 11.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 93.0,
    "potassium_mg": 90.0,
    "protein_g": 5.5,
    "salt_g": 1.095,
    "sat_fat_g": 9.92,
    "sodium_mg": 438.0,
    "sugar_g": 21.8,
    "vitamin_a_ug": 159.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.56,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172711",
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
