/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-chopped-or-diced",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168562",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 143.0,
      "key": "cup-chopped-or-diced",
      "kind": "unit",
      "label": "cup, chopped or diced"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "medium-3-3-4-long",
      "kind": "unit",
      "label": "medium (3-3/4\" long)"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "small",
      "kind": "unit",
      "label": "small"
    },
    {
      "gramsPerUnit": 135.0,
      "key": "large-4-long",
      "kind": "unit",
      "label": "large (4\" long)"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "cup-about-23-slices",
      "kind": "unit",
      "label": "cup (about 23 slices)"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "slice",
      "kind": "unit",
      "label": "slice"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "spear",
      "kind": "unit",
      "label": "spear"
    }
  ],
  "name": "Pickles, cucumber, sour, low sodium",
  "nutritionPerBasis": {
    "calcium_mg": 0.0,
    "carbs_g": 2.26,
    "energy_kcal": 11.0,
    "fat_g": 0.2,
    "fibre_g": 1.2,
    "folate_ug": 1.0,
    "iron_mg": 0.4,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 23.0,
    "protein_g": 0.33,
    "salt_g": 0.045,
    "sat_fat_g": 0.052,
    "sodium_mg": 18.0,
    "sugar_g": 1.06,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 47.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168562",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "unspecified",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
