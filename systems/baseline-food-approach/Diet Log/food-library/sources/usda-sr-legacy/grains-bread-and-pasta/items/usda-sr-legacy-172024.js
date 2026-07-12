/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-lasagne",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-172024",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "cup-lasagne",
      "kind": "unit",
      "label": "cup lasagne"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "cup-spaghetti-packed",
      "kind": "unit",
      "label": "cup spaghetti packed"
    },
    {
      "gramsPerUnit": 97.0,
      "key": "cup-penne",
      "kind": "unit",
      "label": "cup penne"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "cup-farfalle",
      "kind": "unit",
      "label": "cup farfalle"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "cup-spaghetti-not-packed",
      "kind": "unit",
      "label": "cup spaghetti not packed"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "cup-rotini",
      "kind": "unit",
      "label": "cup rotini"
    },
    {
      "gramsPerUnit": 117.0,
      "key": "cup-elbows",
      "kind": "unit",
      "label": "cup elbows"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "cup-shells",
      "kind": "unit",
      "label": "cup shells"
    }
  ],
  "name": "Pasta, whole grain, 51% whole wheat, remaining enriched semolina, cooked (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 30.9,
    "energy_kcal": 156.0,
    "fat_g": 1.48,
    "fibre_g": 4.5,
    "folate_ug": 38.0,
    "iron_mg": 1.58,
    "magnesium_mg": 41.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 97.0,
    "potassium_mg": 71.0,
    "protein_g": 5.67,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 0.65,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172024",
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
