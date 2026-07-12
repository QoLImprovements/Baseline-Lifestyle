/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-sections-without-membranes",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169916",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup-sections-without-membranes",
      "kind": "unit",
      "label": "cup sections, without membranes"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "fruit-2-5-8-dia",
      "kind": "unit",
      "label": "fruit (2-5/8\" dia)"
    }
  ],
  "name": "Oranges, raw, California, valencias",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 11.9,
    "energy_kcal": 205.0,
    "fat_g": 0.3,
    "fibre_g": 2.5,
    "folate_ug": 39.0,
    "iron_mg": 0.09,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 17.0,
    "potassium_mg": 179.0,
    "protein_g": 1.04,
    "salt_g": 0.0,
    "sat_fat_g": 0.035,
    "sodium_mg": 0.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 48.5,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169916",
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
