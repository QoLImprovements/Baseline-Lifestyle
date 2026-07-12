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
  "id": "usda-sr-legacy-168153",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "fruit-2-dia",
      "kind": "unit",
      "label": "fruit (2\" dia)"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    }
  ],
  "name": "Kiwifruit, green, raw",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 14.7,
    "energy_kcal": 61.0,
    "fat_g": 0.52,
    "fibre_g": 3.0,
    "folate_ug": 25.0,
    "iron_mg": 0.31,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 34.0,
    "potassium_mg": 312.0,
    "protein_g": 1.14,
    "salt_g": 0.0075,
    "sat_fat_g": 0.029,
    "sodium_mg": 3.0,
    "sugar_g": 8.99,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 92.7,
    "vitamin_e_mg": 1.46,
    "vitamin_k_ug": 40.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168153",
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
