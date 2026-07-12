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
  "id": "usda-sr-legacy-169118",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 178.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 230.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    },
    {
      "gramsPerUnit": 166.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 161.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup, slices"
    }
  ],
  "name": "Pears, raw",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 15.2,
    "energy_kcal": 57.0,
    "fat_g": 0.14,
    "fibre_g": 3.1,
    "folate_ug": 7.0,
    "iron_mg": 0.18,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 116.0,
    "protein_g": 0.36,
    "salt_g": 0.0025,
    "sat_fat_g": 0.022,
    "sodium_mg": 1.0,
    "sugar_g": 9.75,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 4.3,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 4.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169118",
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
