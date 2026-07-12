/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "0-5-fruit-3-3-4-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-174675",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "0-5-fruit-3-3-4-dia",
      "kind": "unit",
      "label": "0.5 fruit (3-3/4\" dia)"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup-sections-with-juice",
      "kind": "unit",
      "label": "cup sections, with juice"
    }
  ],
  "name": "Grapefruit, raw, pink and red, Florida",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 7.5,
    "energy_kcal": 126.0,
    "fat_g": 0.1,
    "fibre_g": 1.1,
    "folate_ug": 9.0,
    "iron_mg": 0.12,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 127.0,
    "protein_g": 0.55,
    "salt_g": 0.0,
    "sat_fat_g": 0.014,
    "sodium_mg": 0.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 37.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174675",
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
