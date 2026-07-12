/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "piece",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-172078",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.6,
      "key": "piece",
      "kind": "unit",
      "label": "piece"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "BURGER KING, Hash Brown Rounds",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 29.4,
    "energy_kcal": 302.0,
    "fat_g": 19.3,
    "fibre_g": 2.3,
    "folate_ug": 13.0,
    "iron_mg": 0.71,
    "magnesium_mg": 20.0,
    "omega3_g": 0.475,
    "phosphorus_mg": 95.0,
    "potassium_mg": 364.0,
    "protein_g": 2.8,
    "salt_g": 1.42,
    "sat_fat_g": 3.28,
    "sodium_mg": 568.0,
    "sugar_g": 0.63,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 4.4,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172078",
  "state": "Unspecified",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
