/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "slice",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169225",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 119.0,
      "key": "cup-sliced",
      "kind": "unit",
      "label": "cup, sliced"
    },
    {
      "gramsPerUnit": 280.0,
      "key": "large-8-1-4-long",
      "kind": "unit",
      "label": "large (8-1/4\" long)"
    },
    {
      "gramsPerUnit": 158.0,
      "key": "small-6-3-8-long",
      "kind": "unit",
      "label": "small (6-3/8\" long)"
    },
    {
      "gramsPerUnit": 9.0,
      "key": "stick-4-long",
      "kind": "unit",
      "label": "stick (4\" long)"
    },
    {
      "gramsPerUnit": 201.0,
      "key": "medium",
      "kind": "unit",
      "label": "medium"
    },
    {
      "gramsPerUnit": 133.0,
      "key": "cup-pared-chopped",
      "kind": "unit",
      "label": "cup, pared, chopped"
    }
  ],
  "name": "Cucumber, peeled, raw",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 2.16,
    "energy_kcal": 44.0,
    "fat_g": 0.16,
    "fibre_g": 0.7,
    "folate_ug": 14.0,
    "iron_mg": 0.22,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 21.0,
    "potassium_mg": 136.0,
    "protein_g": 0.59,
    "salt_g": 0.005,
    "sat_fat_g": 0.078,
    "sodium_mg": 2.0,
    "sugar_g": 1.38,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 3.2,
    "vitamin_e_mg": 0.03,
    "vitamin_k_ug": 7.2
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169225",
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
