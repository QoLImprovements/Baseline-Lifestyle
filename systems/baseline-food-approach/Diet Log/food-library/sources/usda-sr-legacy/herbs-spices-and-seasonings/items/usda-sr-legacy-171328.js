/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "tsp-leaves",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-171328",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.0,
      "key": "tsp-leaves",
      "kind": "unit",
      "label": "tsp, leaves"
    },
    {
      "gramsPerUnit": 1.8,
      "key": "tsp-ground",
      "kind": "unit",
      "label": "tsp, ground"
    }
  ],
  "name": "Spices, oregano, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1600.0,
    "carbs_g": 68.9,
    "energy_kcal": 265.0,
    "fat_g": 4.28,
    "fibre_g": 42.5,
    "folate_ug": 237.0,
    "iron_mg": 36.8,
    "magnesium_mg": 270.0,
    "omega3_g": 0.621,
    "phosphorus_mg": 148.0,
    "potassium_mg": 1260.0,
    "protein_g": 9.0,
    "salt_g": 0.0625,
    "sat_fat_g": 1.55,
    "sodium_mg": 25.0,
    "sugar_g": 4.09,
    "vitamin_a_ug": 85.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 18.3,
    "vitamin_k_ug": 622.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171328",
  "state": "Dried",
  "subcategory": "Spices and Herbs",
  "tags": [
    "dried",
    "herbs-spices-and-seasonings",
    "spices-and-herbs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
