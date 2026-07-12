/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "fruit-2-11-16-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169918",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "fruit-2-11-16-dia",
      "kind": "unit",
      "label": "fruit (2-11/16\" dia)"
    },
    {
      "gramsPerUnit": 141.0,
      "key": "fruit-2-5-8-dia",
      "kind": "unit",
      "label": "fruit (2-5/8\" dia)"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "cup-sections-without-membranes",
      "kind": "unit",
      "label": "cup sections, without membranes"
    }
  ],
  "name": "Oranges, raw, Florida",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 11.5,
    "energy_kcal": 46.0,
    "fat_g": 0.21,
    "fibre_g": 2.4,
    "folate_ug": 17.0,
    "iron_mg": 0.09,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 169.0,
    "protein_g": 0.7,
    "salt_g": 0.0,
    "sat_fat_g": 0.025,
    "sodium_mg": 0.0,
    "sugar_g": 9.14,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 45.0,
    "vitamin_e_mg": 0.18,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169918",
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
