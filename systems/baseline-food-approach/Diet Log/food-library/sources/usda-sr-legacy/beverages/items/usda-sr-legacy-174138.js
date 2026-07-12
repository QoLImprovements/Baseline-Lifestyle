/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "tsp-1-serving",
  "description": "Beverages",
  "id": "usda-sr-legacy-174138",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 3.0,
      "key": "tsp-1-serving",
      "kind": "unit",
      "label": "tsp (1 serving)"
    }
  ],
  "name": "Beverages, coffee substitute, cereal grain beverage, powder",
  "nutritionPerBasis": {
    "calcium_mg": 58.0,
    "carbs_g": 78.4,
    "energy_kcal": 360.0,
    "fat_g": 2.52,
    "fibre_g": 23.3,
    "folate_ug": 52.0,
    "iron_mg": 4.6,
    "magnesium_mg": 244.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 580.0,
    "potassium_mg": 2440.0,
    "protein_g": 6.01,
    "salt_g": 0.2075,
    "sat_fat_g": 0.603,
    "sodium_mg": 83.0,
    "sugar_g": 4.63,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.98,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174138",
  "state": "Unspecified",
  "subcategory": "Beverages",
  "tags": [
    "beverages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
