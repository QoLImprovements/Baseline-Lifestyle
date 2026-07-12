/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "small-3-long",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170005",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 5.0,
      "key": "small-3-long",
      "kind": "unit",
      "label": "small (3\" long)"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "tbsp-chopped",
      "kind": "unit",
      "label": "tbsp chopped"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup, chopped"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "medium-4-1-8-long",
      "kind": "unit",
      "label": "medium (4-1/8\" long)"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "large",
      "kind": "unit",
      "label": "large"
    }
  ],
  "name": "Onions, spring or scallions (includes tops and bulb), raw",
  "nutritionPerBasis": {
    "calcium_mg": 72.0,
    "carbs_g": 7.34,
    "energy_kcal": 135.0,
    "fat_g": 0.19,
    "fibre_g": 2.6,
    "folate_ug": 64.0,
    "iron_mg": 1.48,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 37.0,
    "potassium_mg": 276.0,
    "protein_g": 1.83,
    "salt_g": 0.04,
    "sat_fat_g": 0.032,
    "sodium_mg": 16.0,
    "sugar_g": 2.33,
    "vitamin_a_ug": 50.0,
    "vitamin_c_mg": 18.8,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 207.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170005",
  "state": "Raw",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "raw",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
