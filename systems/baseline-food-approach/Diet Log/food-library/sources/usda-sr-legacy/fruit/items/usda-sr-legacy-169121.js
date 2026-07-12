/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "10-halves",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169121",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "10-halves",
      "kind": "unit",
      "label": "10 halves"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "half",
      "kind": "unit",
      "label": "half"
    }
  ],
  "name": "Pears, dried, sulfured, uncooked",
  "nutritionPerBasis": {
    "calcium_mg": 34.0,
    "carbs_g": 69.7,
    "energy_kcal": 1100.0,
    "fat_g": 0.63,
    "fibre_g": 7.5,
    "folate_ug": 0.0,
    "iron_mg": 2.1,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 59.0,
    "potassium_mg": 533.0,
    "protein_g": 1.87,
    "salt_g": 0.015,
    "sat_fat_g": 0.035,
    "sodium_mg": 6.0,
    "sugar_g": 62.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 20.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169121",
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
