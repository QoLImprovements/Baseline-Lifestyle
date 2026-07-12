/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "cup-sections-with-juice",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173033",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "cup-sections-with-juice",
      "kind": "unit",
      "label": "cup sections, with juice"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "0-5-small-approx-3-1-2-dia",
      "kind": "unit",
      "label": "0.5 small (approx 3-1/2\" dia)"
    },
    {
      "gramsPerUnit": 128.0,
      "key": "0-5-medium-approx-4-dia",
      "kind": "unit",
      "label": "0.5 medium (approx 4\" dia)"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "0-5-large-approx-4-1-2-dia",
      "kind": "unit",
      "label": "0.5 large (approx 4-1/2\" dia)"
    }
  ],
  "name": "Grapefruit, raw, pink and red and white, all areas",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 8.08,
    "energy_kcal": 32.0,
    "fat_g": 0.1,
    "fibre_g": 1.1,
    "folate_ug": 10.0,
    "iron_mg": 0.09,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 8.0,
    "potassium_mg": 139.0,
    "protein_g": 0.63,
    "salt_g": 0.0,
    "sat_fat_g": 0.014,
    "sodium_mg": 0.0,
    "sugar_g": 6.98,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 34.4,
    "vitamin_e_mg": 0.13,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173033",
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
