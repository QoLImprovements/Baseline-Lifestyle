/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-halves",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169934",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "half",
      "kind": "unit",
      "label": "half"
    }
  ],
  "name": "Peaches, dried, sulfured, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 28.0,
    "carbs_g": 61.3,
    "energy_kcal": 1000.0,
    "fat_g": 0.76,
    "fibre_g": 8.2,
    "folate_ug": 0.0,
    "iron_mg": 4.06,
    "magnesium_mg": 42.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 119.0,
    "potassium_mg": 996.0,
    "protein_g": 3.61,
    "salt_g": 0.0175,
    "sat_fat_g": 0.082,
    "sodium_mg": 7.0,
    "sugar_g": 41.7,
    "vitamin_a_ug": 108.0,
    "vitamin_c_mg": 4.8,
    "vitamin_e_mg": 0.19,
    "vitamin_k_ug": 15.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169934",
  "state": "Dried",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "dried",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
