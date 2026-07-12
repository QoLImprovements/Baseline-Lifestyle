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
  "id": "usda-sr-legacy-168916",
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
      "gramsPerUnit": 107.0,
      "key": "cup-rotini",
      "kind": "unit",
      "label": "cup rotini"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "cup-elbows-not-packed",
      "kind": "unit",
      "label": "cup elbows not packed"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "cup-spaghetti-packed",
      "kind": "unit",
      "label": "cup spaghetti packed"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "cup-shells",
      "kind": "unit",
      "label": "cup shells"
    },
    {
      "gramsPerUnit": 97.0,
      "key": "cup-penne",
      "kind": "unit",
      "label": "cup penne"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "cup-lasagne",
      "kind": "unit",
      "label": "cup lasagne"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "cup-spaghetti-not-packed",
      "kind": "unit",
      "label": "cup spaghetti not packed"
    }
  ],
  "name": "Pasta, whole grain, 51% whole wheat, remaining unenriched semolina, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 31.5,
    "energy_kcal": 665.0,
    "fat_g": 1.5,
    "fibre_g": 4.6,
    "folate_ug": 20.0,
    "iron_mg": 1.65,
    "magnesium_mg": 45.0,
    "omega3_g": 0.039,
    "phosphorus_mg": 110.0,
    "potassium_mg": 77.0,
    "protein_g": 5.82,
    "salt_g": 0.015,
    "sat_fat_g": 0.239,
    "sodium_mg": 6.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.1,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168916",
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
