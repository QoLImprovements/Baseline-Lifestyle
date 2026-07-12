/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "tsp",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167802",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "tsp",
      "kind": "unit",
      "label": "tsp"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    }
  ],
  "name": "Lemon juice from concentrate, bottled, REAL LEMON",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 5.66,
    "energy_kcal": 17.0,
    "fat_g": 0.07,
    "fibre_g": 0.7,
    "folate_ug": 11.0,
    "iron_mg": 0.06,
    "magnesium_mg": 6.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 9.0,
    "potassium_mg": 109.0,
    "protein_g": 0.47,
    "salt_g": 0.065,
    "sat_fat_g": 0.027,
    "sodium_mg": 26.0,
    "sugar_g": 1.59,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 16.6,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167802",
  "state": "Unspecified",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "beverages",
    "fruits-and-fruit-juices",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
