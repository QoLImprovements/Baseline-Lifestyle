/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "nlea-serving",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169949",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "fruit-2-1-8-dia",
      "kind": "unit",
      "label": "fruit (2-1/8\" dia)"
    }
  ],
  "name": "Plums, raw",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 11.4,
    "energy_kcal": 46.0,
    "fat_g": 0.28,
    "fibre_g": 1.4,
    "folate_ug": 5.0,
    "iron_mg": 0.17,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 157.0,
    "protein_g": 0.7,
    "salt_g": 0.0,
    "sat_fat_g": 0.017,
    "sodium_mg": 0.0,
    "sugar_g": 9.92,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 9.5,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 6.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169949",
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
