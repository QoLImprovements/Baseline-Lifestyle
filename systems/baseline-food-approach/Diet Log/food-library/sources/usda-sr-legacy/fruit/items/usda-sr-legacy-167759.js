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
  "id": "usda-sr-legacy-167759",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 241.0,
      "key": "cup-pulp",
      "kind": "unit",
      "label": "cup, pulp"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "sapodilla",
      "kind": "unit",
      "label": "sapodilla"
    }
  ],
  "name": "Sapodilla, raw",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 20.0,
    "energy_kcal": 347.0,
    "fat_g": 1.1,
    "fibre_g": 5.3,
    "folate_ug": 14.0,
    "iron_mg": 0.8,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 193.0,
    "protein_g": 0.44,
    "salt_g": 0.03,
    "sat_fat_g": 0.194,
    "sodium_mg": 12.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 14.7,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167759",
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
