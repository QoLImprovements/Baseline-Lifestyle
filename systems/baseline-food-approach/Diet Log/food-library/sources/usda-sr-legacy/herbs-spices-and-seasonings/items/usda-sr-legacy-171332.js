/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "tbsp",
  "description": "Spices and Herbs",
  "id": "usda-sr-legacy-171332",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.6,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 1.7,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    }
  ],
  "name": "Spices, pumpkin pie spice",
  "nutritionPerBasis": {
    "calcium_mg": 682.0,
    "carbs_g": 69.3,
    "energy_kcal": 342.0,
    "fat_g": 12.6,
    "fibre_g": 14.8,
    "folate_ug": 24.0,
    "iron_mg": 19.7,
    "magnesium_mg": 136.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 118.0,
    "potassium_mg": 663.0,
    "protein_g": 5.76,
    "salt_g": 0.13,
    "sat_fat_g": 6.53,
    "sodium_mg": 52.0,
    "sugar_g": 7.76,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 23.4,
    "vitamin_e_mg": 1.93,
    "vitamin_k_ug": 28.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171332",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "herbs-spices-and-seasonings",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
