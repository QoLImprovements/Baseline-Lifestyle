/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-7-x-5-1-4-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-167761",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 625.0,
      "key": "fruit-7-x-5-1-4-dia",
      "kind": "unit",
      "label": "fruit (7\" x 5-1/4\" dia)"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "cup-pulp",
      "kind": "unit",
      "label": "cup, pulp"
    }
  ],
  "name": "Soursop, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 16.8,
    "energy_kcal": 276.0,
    "fat_g": 0.3,
    "fibre_g": 3.3,
    "folate_ug": 14.0,
    "iron_mg": 0.6,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 278.0,
    "protein_g": 1.0,
    "salt_g": 0.035,
    "sat_fat_g": 0.051,
    "sodium_mg": 14.0,
    "sugar_g": 13.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 20.6,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167761",
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
