/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "chip",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169378",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.5,
      "key": "chip",
      "kind": "unit",
      "label": "chip"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "small-gherkin-2-1-2-long",
      "kind": "unit",
      "label": "small Gherkin (2-1/2\" long)"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "gherkin-2-3-4-long",
      "kind": "unit",
      "label": "Gherkin (2-3/4\" long)"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "midget-gherkin-2-1-8-long",
      "kind": "unit",
      "label": "midget Gherkin (2-1/8\" long)"
    },
    {
      "gramsPerUnit": 153.0,
      "key": "cup-sliced-or-chips",
      "kind": "unit",
      "label": "cup sliced or chips"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "spear-gherkin",
      "kind": "unit",
      "label": "spear Gherkin"
    },
    {
      "gramsPerUnit": 35.0,
      "key": "large-gherkin-3-long",
      "kind": "unit",
      "label": "large Gherkin (3\" long)"
    }
  ],
  "name": "Pickles, cucumber, sweet (includes bread and butter pickles)",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 21.2,
    "energy_kcal": 379.0,
    "fat_g": 0.41,
    "fibre_g": 1.0,
    "folate_ug": 1.0,
    "iron_mg": 0.25,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 18.0,
    "potassium_mg": 100.0,
    "protein_g": 0.58,
    "salt_g": 1.1425,
    "sat_fat_g": 0.067,
    "sodium_mg": 457.0,
    "sugar_g": 18.3,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.7,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 47.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169378",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "grains-bread-and-pasta",
    "unspecified",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
