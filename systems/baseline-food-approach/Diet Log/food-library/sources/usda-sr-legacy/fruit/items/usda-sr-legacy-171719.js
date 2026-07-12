/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-without-pits",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171719",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "cup-without-pits",
      "kind": "unit",
      "label": "cup, without pits"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "cup-with-pits-yields",
      "kind": "unit",
      "label": "cup, with pits, yields"
    },
    {
      "gramsPerUnit": 8.2,
      "key": "cherry",
      "kind": "unit",
      "label": "cherry"
    }
  ],
  "name": "Cherries, sweet, raw",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 16.0,
    "energy_kcal": 263.0,
    "fat_g": 0.2,
    "fibre_g": 2.1,
    "folate_ug": 4.0,
    "iron_mg": 0.36,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 222.0,
    "protein_g": 1.06,
    "salt_g": 0.0,
    "sat_fat_g": 0.038,
    "sodium_mg": 0.0,
    "sugar_g": 12.8,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.07,
    "vitamin_k_ug": 2.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171719",
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
