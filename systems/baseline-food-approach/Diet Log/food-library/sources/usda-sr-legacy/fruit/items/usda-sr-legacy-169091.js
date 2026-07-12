/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "g",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169091",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Mango, dried, sweetened",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 78.6,
    "energy_kcal": 1340.0,
    "fat_g": 1.18,
    "fibre_g": 2.4,
    "folate_ug": 68.0,
    "iron_mg": 0.23,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 279.0,
    "protein_g": 2.45,
    "salt_g": 0.405,
    "sat_fat_g": 0.287,
    "sodium_mg": 162.0,
    "sugar_g": 66.3,
    "vitamin_a_ug": 67.0,
    "vitamin_c_mg": 42.3,
    "vitamin_e_mg": 4.02,
    "vitamin_k_ug": 13.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169091",
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
