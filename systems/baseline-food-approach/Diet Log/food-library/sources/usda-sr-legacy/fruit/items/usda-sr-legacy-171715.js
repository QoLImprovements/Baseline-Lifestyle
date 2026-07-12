/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "small-3-1-8-long",
  "description": "Fruits and Fruit Juices",
  "id": "usda-sr-legacy-171715",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "small-3-1-8-long",
      "kind": "unit",
      "label": "small (3-1/8\" long)"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-cubes",
      "kind": "unit",
      "label": "cup, cubes"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "medium-3-5-8-long",
      "kind": "unit",
      "label": "medium (3-5/8\" long)"
    },
    {
      "gramsPerUnit": 108.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 124.0,
      "key": "large-4-1-2-long",
      "kind": "unit",
      "label": "large (4-1/2\" long)"
    }
  ],
  "name": "Carambola, (starfruit), raw",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 6.73,
    "energy_kcal": 31.0,
    "fat_g": 0.33,
    "fibre_g": 2.8,
    "folate_ug": 12.0,
    "iron_mg": 0.08,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 12.0,
    "potassium_mg": 133.0,
    "protein_g": 1.04,
    "salt_g": 0.005,
    "sat_fat_g": 0.019,
    "sodium_mg": 2.0,
    "sugar_g": 3.98,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 34.4,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "171715",
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
