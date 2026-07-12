/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "tbsp",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169988",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.5,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "stalk-medium-7-1-2-8-long",
      "kind": "unit",
      "label": "stalk, medium (7-1/2\" - 8\" long)"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "stalk-small-5-long",
      "kind": "unit",
      "label": "stalk, small (5\" long)"
    },
    {
      "gramsPerUnit": 101.0,
      "key": "cup-chopped",
      "kind": "unit",
      "label": "cup chopped"
    },
    {
      "gramsPerUnit": 4.0,
      "key": "strip-4-long",
      "kind": "unit",
      "label": "strip (4\" long)"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "nlea-serving",
      "kind": "unit",
      "label": "NLEA serving"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "stalk-large-11-12-long",
      "kind": "unit",
      "label": "stalk, large (11\"-12\" long)"
    }
  ],
  "name": "Celery, raw",
  "nutritionPerBasis": {
    "calcium_mg": 40.0,
    "carbs_g": 2.97,
    "energy_kcal": 57.0,
    "fat_g": 0.17,
    "fibre_g": 1.6,
    "folate_ug": 36.0,
    "iron_mg": 0.2,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 260.0,
    "protein_g": 0.69,
    "salt_g": 0.2,
    "sat_fat_g": 0.042,
    "sodium_mg": 80.0,
    "sugar_g": 1.34,
    "vitamin_a_ug": 22.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 29.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169988",
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
