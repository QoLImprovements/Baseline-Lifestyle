/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "nlea-serving",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-173944",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 126.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "extra-large-9-or-longer",
      "kind": "unit",
      "label": "extra large (9\" or longer)"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "large-8-to-8-7-8-long",
      "kind": "unit",
      "label": "large (8\" to 8-7/8\" long)"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 101.0,
      "key": "small-6-to-6-7-8-long",
      "kind": "unit",
      "label": "small (6\" to 6-7/8\" long)"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "extra-small-less-than-6-long",
      "kind": "unit",
      "label": "extra small (less than 6\" long)"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "medium-7-to-7-7-8-long",
      "kind": "unit",
      "label": "medium (7\" to 7-7/8\" long)"
    },
    {
      "gramsPerUnit": 225.0,
      "key": "cup-mashed",
      "kind": "unit",
      "label": "cup, mashed"
    }
  ],
  "name": "Bananas, raw",
  "nutritionPerBasis": {
    "calcium_mg": 5.0,
    "carbs_g": 22.8,
    "energy_kcal": 371.0,
    "fat_g": 0.33,
    "fibre_g": 2.6,
    "folate_ug": 20.0,
    "iron_mg": 0.26,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 22.0,
    "potassium_mg": 358.0,
    "protein_g": 1.09,
    "salt_g": 0.0025,
    "sat_fat_g": 0.112,
    "sodium_mg": 1.0,
    "sugar_g": 12.2,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 8.7,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173944",
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
