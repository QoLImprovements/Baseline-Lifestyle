/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-pulp",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167763",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup-pulp",
      "kind": "unit",
      "label": "cup, pulp"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "fruit-3-x-1",
      "kind": "unit",
      "label": "fruit (3\" x 1\")"
    }
  ],
  "name": "Tamarinds, raw",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 62.5,
    "energy_kcal": 1000.0,
    "fat_g": 0.6,
    "fibre_g": 5.1,
    "folate_ug": 14.0,
    "iron_mg": 2.8,
    "magnesium_mg": 92.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 113.0,
    "potassium_mg": 628.0,
    "protein_g": 2.8,
    "salt_g": 0.07,
    "sat_fat_g": 0.272,
    "sodium_mg": 28.0,
    "sugar_g": 38.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 3.5,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167763",
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
