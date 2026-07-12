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
  "id": "usda-sr-legacy-167778",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 219.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 159.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 179.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    }
  ],
  "name": "Pears, raw, bosc (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 16.1,
    "energy_kcal": 279.0,
    "fat_g": 0.09,
    "fibre_g": 3.1,
    "folate_ug": 7.0,
    "iron_mg": 0.15,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 122.0,
    "protein_g": 0.36,
    "salt_g": 0.0025,
    "sat_fat_g": 0.0,
    "sodium_mg": 1.0,
    "sugar_g": 10.2,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "167778",
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
