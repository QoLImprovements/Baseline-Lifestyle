/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-174666",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 259.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Figs, dried, stewed",
  "nutritionPerBasis": {
    "calcium_mg": 70.0,
    "carbs_g": 27.6,
    "energy_kcal": 449.0,
    "fat_g": 0.4,
    "fibre_g": 4.2,
    "folate_ug": 1.0,
    "iron_mg": 0.88,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 294.0,
    "protein_g": 1.42,
    "salt_g": 0.01,
    "sat_fat_g": 0.062,
    "sodium_mg": 4.0,
    "sugar_g": 23.4,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 4.4,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 6.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174666",
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
