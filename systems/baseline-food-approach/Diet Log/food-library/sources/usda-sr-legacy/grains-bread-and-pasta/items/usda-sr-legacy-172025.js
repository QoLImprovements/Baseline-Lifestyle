/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "cup-elbows",
  "description": "Cereal Grains and Pasta",
  "id": "usda-sr-legacy-172025",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 64.0,
      "key": "cup-shells",
      "kind": "unit",
      "label": "cup shells"
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
    },
    {
      "gramsPerUnit": 90.0,
      "key": "cup-lasagne",
      "kind": "unit",
      "label": "cup lasagne"
    }
  ],
  "name": "Pasta, whole grain, 51% whole wheat, remaining enriched semolina, dry (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 73.3,
    "energy_kcal": 1510.0,
    "fat_g": 2.55,
    "fibre_g": 11.3,
    "folate_ug": 114.0,
    "iron_mg": 3.41,
    "magnesium_mg": 94.0,
    "omega3_g": 0.053,
    "phosphorus_mg": 252.0,
    "potassium_mg": 318.0,
    "protein_g": 13.2,
    "salt_g": 0.03,
    "sat_fat_g": 0.324,
    "sodium_mg": 12.0,
    "sugar_g": 2.2,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172025",
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
