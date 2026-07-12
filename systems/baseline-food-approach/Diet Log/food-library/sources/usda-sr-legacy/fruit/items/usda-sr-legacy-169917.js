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
  "id": "usda-sr-legacy-169917",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup-sections-without-membranes",
      "kind": "unit",
      "label": "cup sections, without membranes"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "fruit-2-7-8-dia",
      "kind": "unit",
      "label": "fruit (2-7/8\" dia)"
    },
    {
      "gramsPerUnit": 154.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    }
  ],
  "name": "Oranges, raw, navels (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 43.0,
    "carbs_g": 12.5,
    "energy_kcal": 49.0,
    "fat_g": 0.15,
    "fibre_g": 2.2,
    "folate_ug": 34.0,
    "iron_mg": 0.13,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 166.0,
    "protein_g": 0.91,
    "salt_g": 0.0025,
    "sat_fat_g": 0.017,
    "sodium_mg": 1.0,
    "sugar_g": 8.5,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 59.1,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169917",
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
