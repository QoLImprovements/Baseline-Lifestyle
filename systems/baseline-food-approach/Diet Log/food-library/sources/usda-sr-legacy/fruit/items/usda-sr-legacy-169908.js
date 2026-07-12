/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "medium",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-169908",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "cup-cubed",
      "kind": "unit",
      "label": "cup, cubed"
    },
    {
      "gramsPerUnit": 13.6,
      "key": "small",
      "kind": "unit",
      "label": "small"
    }
  ],
  "name": "Loquats, raw",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 12.1,
    "energy_kcal": 197.0,
    "fat_g": 0.2,
    "fibre_g": 1.7,
    "folate_ug": 14.0,
    "iron_mg": 0.28,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 266.0,
    "protein_g": 0.43,
    "salt_g": 0.0025,
    "sat_fat_g": 0.04,
    "sodium_mg": 1.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 76.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169908",
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
