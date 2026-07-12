/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "small-2-3-8-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169097",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "small-2-3-8-dia",
      "kind": "unit",
      "label": "small (2-3/8\" dia)"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "large-3-1-16-dia",
      "kind": "unit",
      "label": "large (3-1/16\" dia)"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup-sections",
      "kind": "unit",
      "label": "cup, sections"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "fruit-2-5-8-dia",
      "kind": "unit",
      "label": "fruit (2-5/8\" dia)"
    }
  ],
  "name": "Oranges, raw, all commercial varieties",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 11.8,
    "energy_kcal": 47.0,
    "fat_g": 0.12,
    "fibre_g": 2.4,
    "folate_ug": 30.0,
    "iron_mg": 0.1,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 181.0,
    "protein_g": 0.94,
    "salt_g": 0.0,
    "sat_fat_g": 0.015,
    "sodium_mg": 0.0,
    "sugar_g": 9.35,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 53.2,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169097",
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
