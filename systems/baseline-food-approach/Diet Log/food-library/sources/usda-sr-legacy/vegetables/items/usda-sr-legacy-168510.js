/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "stalk-large-11-12-long",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168510",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "stalk-large-11-12-long",
      "kind": "unit",
      "label": "stalk, large (11\"-12\" long)"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "spear-about-5-long",
      "kind": "unit",
      "label": "spear (about 5\" long)"
    },
    {
      "gramsPerUnit": 78.0,
      "key": "0-5-cup-chopped",
      "kind": "unit",
      "label": "0.5 cup, chopped"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "stalk-medium-7-1-2-8-long",
      "kind": "unit",
      "label": "stalk, medium (7-1/2\" - 8\" long)"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "stalk-small-5-long",
      "kind": "unit",
      "label": "stalk, small (5\" long)"
    }
  ],
  "name": "Broccoli, cooked, boiled, drained, with salt",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 7.18,
    "energy_kcal": 35.0,
    "fat_g": 0.41,
    "fibre_g": 3.3,
    "folate_ug": 108.0,
    "iron_mg": 0.67,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 293.0,
    "protein_g": 2.38,
    "salt_g": 0.655,
    "sat_fat_g": 0.079,
    "sodium_mg": 262.0,
    "sugar_g": 1.39,
    "vitamin_a_ug": 77.0,
    "vitamin_c_mg": 64.9,
    "vitamin_e_mg": 1.45,
    "vitamin_k_ug": 141.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168510",
  "state": "Boiled",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "boiled",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
