/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-shells",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-168915",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "cup-shells",
      "kind": "unit",
      "label": "cup shells"
    },
    {
      "gramsPerUnit": 90.0,
      "key": "cup-lasagne",
      "kind": "unit",
      "label": "cup lasagne"
    },
    {
      "gramsPerUnit": 122.0,
      "key": "cup-elbows",
      "kind": "unit",
      "label": "cup elbows"
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
      "gramsPerUnit": 96.0,
      "key": "cup-rotini",
      "kind": "unit",
      "label": "cup rotini"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "cup-spaghetti",
      "kind": "unit",
      "label": "cup spaghetti"
    }
  ],
  "name": "Pasta, whole grain, 51% whole wheat, remaining unenriched semolina, dry",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 73.1,
    "energy_kcal": 362.0,
    "fat_g": 2.68,
    "fibre_g": 10.1,
    "folate_ug": 59.0,
    "iron_mg": 3.33,
    "magnesium_mg": 104.0,
    "omega3_g": 0.062,
    "phosphorus_mg": 287.0,
    "potassium_mg": 366.0,
    "protein_g": 13.5,
    "salt_g": 0.0275,
    "sat_fat_g": 0.351,
    "sodium_mg": 11.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.17,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168915",
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
