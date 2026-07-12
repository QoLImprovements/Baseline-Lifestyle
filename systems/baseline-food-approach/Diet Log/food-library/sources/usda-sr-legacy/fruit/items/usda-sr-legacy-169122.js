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
  "id": "usda-sr-legacy-169122",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "cup-halves",
      "kind": "unit",
      "label": "cup, halves"
    }
  ],
  "name": "Pears, dried, sulfured, stewed, without added sugar",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 33.8,
    "energy_kcal": 531.0,
    "fat_g": 0.31,
    "fibre_g": 6.4,
    "folate_ug": 0.0,
    "iron_mg": 1.02,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 258.0,
    "protein_g": 0.91,
    "salt_g": 0.0075,
    "sat_fat_g": 0.017,
    "sodium_mg": 3.0,
    "sugar_g": 27.4,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 4.0,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 9.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169122",
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
