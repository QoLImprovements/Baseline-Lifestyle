/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "medium-2-1-2-dia",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169105",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "medium-2-1-2-dia",
      "kind": "unit",
      "label": "medium (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "small-2-1-4-dia",
      "kind": "unit",
      "label": "small (2-1/4\" dia)"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "large-2-3-4-dia",
      "kind": "unit",
      "label": "large (2-3/4\" dia)"
    },
    {
      "gramsPerUnit": 195.0,
      "key": "cup-sections",
      "kind": "unit",
      "label": "cup, sections"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    }
  ],
  "name": "Tangerines, (mandarin oranges), raw",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 13.3,
    "energy_kcal": 53.0,
    "fat_g": 0.31,
    "fibre_g": 1.8,
    "folate_ug": 16.0,
    "iron_mg": 0.15,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 166.0,
    "protein_g": 0.81,
    "salt_g": 0.005,
    "sat_fat_g": 0.039,
    "sodium_mg": 2.0,
    "sugar_g": 10.6,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 26.7,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169105",
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
