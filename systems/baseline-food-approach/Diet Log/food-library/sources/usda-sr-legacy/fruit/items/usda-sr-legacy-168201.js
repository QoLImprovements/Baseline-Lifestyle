/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "large",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-168201",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 109.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 212.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    }
  ],
  "name": "Apples, raw, red delicious, with skin (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 14.1,
    "energy_kcal": 247.0,
    "fat_g": 0.2,
    "fibre_g": 2.3,
    "folate_ug": 3.0,
    "iron_mg": 0.11,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 104.0,
    "protein_g": 0.27,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 10.5,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168201",
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
