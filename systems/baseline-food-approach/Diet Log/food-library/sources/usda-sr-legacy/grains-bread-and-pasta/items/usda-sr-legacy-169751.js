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
  "id": "usda-sr-legacy-169751",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 107.0,
      "key": "cup-rotini",
      "kind": "unit",
      "label": "cup rotini"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "cup-shells",
      "kind": "unit",
      "label": "cup shells"
    },
    {
      "gramsPerUnit": 107.0,
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
      "gramsPerUnit": 124.0,
      "key": "cup-spaghetti-not-packed",
      "kind": "unit",
      "label": "cup spaghetti not packed"
    },
    {
      "gramsPerUnit": 151.0,
      "key": "cup-packed",
      "kind": "unit",
      "label": "cup packed"
    },
    {
      "gramsPerUnit": 116.0,
      "key": "cup-lasagne",
      "kind": "unit",
      "label": "cup lasagne"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "cup-elbows-packed",
      "kind": "unit",
      "label": "cup elbows packed"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "cup-elbows-not-packed",
      "kind": "unit",
      "label": "cup elbows not packed"
    }
  ],
  "name": "Pasta, cooked, enriched, with added salt",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 30.6,
    "energy_kcal": 655.0,
    "fat_g": 0.93,
    "fibre_g": 1.8,
    "folate_ug": 73.0,
    "iron_mg": 1.28,
    "magnesium_mg": 18.0,
    "omega3_g": 0.024,
    "phosphorus_mg": 58.0,
    "potassium_mg": 44.0,
    "protein_g": 5.8,
    "salt_g": 0.3275,
    "sat_fat_g": 0.176,
    "sodium_mg": 131.0,
    "sugar_g": 0.56,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.06,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169751",
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
