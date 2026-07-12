/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-pureed",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171705",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup-pureed",
      "kind": "unit",
      "label": "cup, pureed"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    },
    {
      "gramsPerUnit": 146.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 50.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA Serving"
    },
    {
      "gramsPerUnit": 201.0,
      "key": "avocado-ns-as-to-florida-or-california",
      "kind": "unit",
      "label": "avocado, NS as to Florida or California"
    }
  ],
  "name": "Avocados, raw, all commercial varieties",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 8.53,
    "energy_kcal": 670.0,
    "fat_g": 14.7,
    "fibre_g": 6.7,
    "folate_ug": 81.0,
    "iron_mg": 0.55,
    "magnesium_mg": 29.0,
    "omega3_g": 0.111,
    "phosphorus_mg": 52.0,
    "potassium_mg": 485.0,
    "protein_g": 2.0,
    "salt_g": 0.0175,
    "sat_fat_g": 2.13,
    "sodium_mg": 7.0,
    "sugar_g": 0.66,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 10.0,
    "vitamin_e_mg": 2.07,
    "vitamin_k_ug": 21.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171705",
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
