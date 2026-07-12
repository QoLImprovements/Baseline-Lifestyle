/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-2-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168155",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "fruit-2-dia",
      "kind": "unit",
      "label": "fruit (2\" dia)"
    },
    {
      "gramsPerUnit": 67.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    }
  ],
  "name": "Limes, raw",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 10.5,
    "energy_kcal": 30.0,
    "fat_g": 0.2,
    "fibre_g": 2.8,
    "folate_ug": 8.0,
    "iron_mg": 0.6,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 102.0,
    "protein_g": 0.7,
    "salt_g": 0.005,
    "sat_fat_g": 0.022,
    "sodium_mg": 2.0,
    "sugar_g": 1.69,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 29.1,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168155",
  "state": "Raw",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "raw"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
