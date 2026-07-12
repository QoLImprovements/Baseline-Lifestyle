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
  "id": "usda-sr-legacy-169123",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    }
  ],
  "name": "Pears, dried, sulfured, stewed, with added sugar",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 37.1,
    "energy_kcal": 586.0,
    "fat_g": 0.29,
    "fibre_g": 5.8,
    "folate_ug": 0.0,
    "iron_mg": 0.97,
    "magnesium_mg": 15.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 245.0,
    "protein_g": 0.86,
    "salt_g": 0.0075,
    "sat_fat_g": 0.016,
    "sodium_mg": 3.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 3.8,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169123",
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
