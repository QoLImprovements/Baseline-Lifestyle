/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "tsp-ground",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-170937",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.6,
      "key": "tsp-ground",
      "kind": "unit",
      "label": "tsp, ground"
    },
    {
      "gramsPerUnit": 1.8,
      "key": "tbsp-leaves",
      "kind": "unit",
      "label": "tbsp, leaves"
    },
    {
      "gramsPerUnit": 0.6,
      "key": "tsp-leaves",
      "kind": "unit",
      "label": "tsp, leaves"
    },
    {
      "gramsPerUnit": 4.8,
      "key": "tbsp-ground",
      "kind": "unit",
      "label": "tbsp, ground"
    }
  ],
  "name": "Spices, tarragon, dried",
  "nutritionPerBasis": {
    "calcium_mg": 1140.0,
    "carbs_g": 50.2,
    "energy_kcal": 1240.0,
    "fat_g": 7.24,
    "fibre_g": 7.4,
    "folate_ug": 274.0,
    "iron_mg": 32.3,
    "magnesium_mg": 347.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 313.0,
    "potassium_mg": 3020.0,
    "protein_g": 22.8,
    "salt_g": 0.155,
    "sat_fat_g": 1.88,
    "sodium_mg": 62.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 210.0,
    "vitamin_c_mg": 50.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170937",
  "state": "Dried",
  "subcategory": "Spices and Herbs",
  "tags": [
    "dried",
    "other-foods",
    "spices-and-herbs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
