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
  "id": "usda-sr-legacy-169738",
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
      "gramsPerUnit": 90.0,
      "key": "cup-lasagne",
      "kind": "unit",
      "label": "cup lasagne"
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
    },
    {
      "gramsPerUnit": 81.0,
      "key": "cup-farfalle",
      "kind": "unit",
      "label": "cup farfalle"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "cup-elbows",
      "kind": "unit",
      "label": "cup elbows"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "cup-shells",
      "kind": "unit",
      "label": "cup shells"
    }
  ],
  "name": "Pasta, whole-wheat, dry (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 29.0,
    "carbs_g": 73.4,
    "energy_kcal": 1470.0,
    "fat_g": 2.93,
    "fibre_g": 9.2,
    "folate_ug": 69.0,
    "iron_mg": 3.62,
    "magnesium_mg": 128.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 343.0,
    "potassium_mg": 434.0,
    "protein_g": 13.9,
    "salt_g": 0.015,
    "sat_fat_g": 0.428,
    "sodium_mg": 6.0,
    "sugar_g": 2.74,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169738",
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
