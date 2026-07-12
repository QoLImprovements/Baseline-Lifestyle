/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-small",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169926",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 157.0,
      "key": "fruit-small",
      "kind": "unit",
      "label": "fruit, small"
    },
    {
      "gramsPerUnit": 781.0,
      "key": "fruit-large",
      "kind": "unit",
      "label": "fruit, large"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup-mashed",
      "kind": "unit",
      "label": "cup, mashed"
    },
    {
      "gramsPerUnit": 145.0,
      "key": "cup-1-pieces",
      "kind": "unit",
      "label": "cup 1\" pieces"
    }
  ],
  "name": "Papayas, raw",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 10.8,
    "energy_kcal": 179.0,
    "fat_g": 0.26,
    "fibre_g": 1.7,
    "folate_ug": 37.0,
    "iron_mg": 0.25,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 10.0,
    "potassium_mg": 182.0,
    "protein_g": 0.47,
    "salt_g": 0.02,
    "sat_fat_g": 0.081,
    "sodium_mg": 8.0,
    "sugar_g": 7.82,
    "vitamin_a_ug": 47.0,
    "vitamin_c_mg": 60.9,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169926",
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
