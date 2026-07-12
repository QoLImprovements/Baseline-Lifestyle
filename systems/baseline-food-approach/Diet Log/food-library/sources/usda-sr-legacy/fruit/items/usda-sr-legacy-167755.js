/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "pint-as-purchased-yields",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167755",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 312.0,
      "key": "pint-as-purchased-yields",
      "kind": "unit",
      "label": "pint as purchased, yields"
    },
    {
      "gramsPerUnit": 19.0,
      "key": "10-raspberries",
      "kind": "unit",
      "label": "10 raspberries"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Raspberries, raw",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 11.9,
    "energy_kcal": 220.0,
    "fat_g": 0.65,
    "fibre_g": 6.5,
    "folate_ug": 21.0,
    "iron_mg": 0.69,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 151.0,
    "protein_g": 1.2,
    "salt_g": 0.0025,
    "sat_fat_g": 0.019,
    "sodium_mg": 1.0,
    "sugar_g": 4.42,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 26.2,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167755",
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
