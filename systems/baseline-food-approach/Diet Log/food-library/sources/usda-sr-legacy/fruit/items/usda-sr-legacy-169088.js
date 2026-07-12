/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-unthawed",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169088",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 147.0,
      "key": "cup-unthawed",
      "kind": "unit",
      "label": "cup, unthawed"
    }
  ],
  "name": "Loganberries, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 13.0,
    "energy_kcal": 230.0,
    "fat_g": 0.31,
    "fibre_g": 5.3,
    "folate_ug": 26.0,
    "iron_mg": 0.64,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 26.0,
    "potassium_mg": 145.0,
    "protein_g": 1.52,
    "salt_g": 0.0025,
    "sat_fat_g": 0.011,
    "sodium_mg": 1.0,
    "sugar_g": 7.7,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 15.3,
    "vitamin_e_mg": 0.87,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169088",
  "state": "Frozen",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "frozen",
    "fruit",
    "fruits-and-fruit-juices"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
