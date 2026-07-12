/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-without-refuse",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169910",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 336.0,
      "key": "fruit-without-refuse",
      "kind": "unit",
      "label": "fruit without refuse"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup-pieces",
      "kind": "unit",
      "label": "cup pieces"
    }
  ],
  "name": "Mangos, raw",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 15.0,
    "energy_kcal": 60.0,
    "fat_g": 0.38,
    "fibre_g": 1.6,
    "folate_ug": 43.0,
    "iron_mg": 0.16,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 168.0,
    "protein_g": 0.82,
    "salt_g": 0.0025,
    "sat_fat_g": 0.092,
    "sodium_mg": 1.0,
    "sugar_g": 13.7,
    "vitamin_a_ug": 54.0,
    "vitamin_c_mg": 36.4,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 4.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169910",
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
