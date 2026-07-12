/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-rotini",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-168927",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "cup-rotini",
      "kind": "unit",
      "label": "cup rotini"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "2-oz",
      "kind": "unit",
      "label": "2 oz"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "cup-lasagna",
      "kind": "unit",
      "label": "cup lasagna"
    },
    {
      "gramsPerUnit": 81.0,
      "key": "cup-farfalle",
      "kind": "unit",
      "label": "cup farfalle"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "cup-shells",
      "kind": "unit",
      "label": "cup shells"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "cup-elbows",
      "kind": "unit",
      "label": "cup elbows"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "cup-spaghetti",
      "kind": "unit",
      "label": "cup spaghetti"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "cup-penne",
      "kind": "unit",
      "label": "cup penne"
    }
  ],
  "name": "Pasta, dry, unenriched",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 74.7,
    "energy_kcal": 1550.0,
    "fat_g": 1.51,
    "fibre_g": 3.2,
    "folate_ug": 18.0,
    "iron_mg": 1.3,
    "magnesium_mg": 53.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 189.0,
    "potassium_mg": 223.0,
    "protein_g": 13.0,
    "salt_g": 0.015,
    "sat_fat_g": 0.277,
    "sodium_mg": 6.0,
    "sugar_g": 2.67,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168927",
  "state": "Unspecified",
  "subcategory": "Cereal Grains and Pasta",
  "tags": [
    "cereal-grains-and-pasta",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
