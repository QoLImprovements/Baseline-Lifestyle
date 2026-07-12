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
  "id": "usda-sr-legacy-167806",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Baobab powder",
  "nutritionPerBasis": {
    "calcium_mg": 342.0,
    "carbs_g": 79.6,
    "energy_kcal": 250.0,
    "fat_g": 0.47,
    "fibre_g": 44.5,
    "folate_ug": 43.0,
    "iron_mg": 8.42,
    "magnesium_mg": 158.0,
    "omega3_g": 0.098,
    "phosphorus_mg": 47.0,
    "potassium_mg": 2190.0,
    "protein_g": 3.69,
    "salt_g": 0.025,
    "sat_fat_g": 0.244,
    "sodium_mg": 10.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 173.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167806",
  "state": "Unspecified",
  "subcategory": "Fruits and Fruit Juices",
  "tags": [
    "fruit",
    "fruits-and-fruit-juices",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
