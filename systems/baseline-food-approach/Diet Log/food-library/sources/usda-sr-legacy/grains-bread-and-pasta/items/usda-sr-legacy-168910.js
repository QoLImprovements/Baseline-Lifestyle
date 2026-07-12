/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-farfalle",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-168910",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "cup-farfalle",
      "kind": "unit",
      "label": "cup farfalle"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "cup-spaghetti-not-packed",
      "kind": "unit",
      "label": "cup spaghetti not packed"
    },
    {
      "gramsPerUnit": 97.0,
      "key": "cup-penne",
      "kind": "unit",
      "label": "cup penne"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "cup-spaghetti-packed",
      "kind": "unit",
      "label": "cup spaghetti packed"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "cup-elbows",
      "kind": "unit",
      "label": "cup elbows"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "cup-lasagne",
      "kind": "unit",
      "label": "cup lasagne"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "cup-shells",
      "kind": "unit",
      "label": "cup shells"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "cup-rotini",
      "kind": "unit",
      "label": "cup rotini"
    }
  ],
  "name": "Pasta, whole-wheat, cooked (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 30.1,
    "energy_kcal": 149.0,
    "fat_g": 1.71,
    "fibre_g": 3.9,
    "folate_ug": 21.0,
    "iron_mg": 1.72,
    "magnesium_mg": 54.0,
    "omega3_g": 0.036,
    "phosphorus_mg": 127.0,
    "potassium_mg": 96.0,
    "protein_g": 5.99,
    "salt_g": 0.01,
    "sat_fat_g": 0.243,
    "sodium_mg": 4.0,
    "sugar_g": 0.75,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 0.6
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168910",
  "state": "Cooked",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "cooked",
    "grains-bread-and-pasta"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
