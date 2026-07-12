/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-2-1-2-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169941",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 168.0,
      "key": "fruit-2-1-2-dia",
      "kind": "unit",
      "label": "fruit (2-1/2\" dia)"
    }
  ],
  "name": "Persimmons, japanese, raw",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 18.6,
    "energy_kcal": 293.0,
    "fat_g": 0.19,
    "fibre_g": 3.6,
    "folate_ug": 8.0,
    "iron_mg": 0.15,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 161.0,
    "protein_g": 0.58,
    "salt_g": 0.0025,
    "sat_fat_g": 0.02,
    "sodium_mg": 1.0,
    "sugar_g": 12.5,
    "vitamin_a_ug": 81.0,
    "vitamin_c_mg": 7.5,
    "vitamin_e_mg": 0.73,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169941",
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
