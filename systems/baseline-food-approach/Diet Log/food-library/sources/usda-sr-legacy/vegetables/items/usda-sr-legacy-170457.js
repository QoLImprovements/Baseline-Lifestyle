/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "medium-whole-2-3-5-dia",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170457",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "medium-whole-2-3-5-dia",
      "kind": "unit",
      "label": "medium whole (2-3/5\" dia)"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "slice-medium-1-4-thick",
      "kind": "unit",
      "label": "slice, medium (1/4\" thick)"
    },
    {
      "gramsPerUnit": 182.0,
      "key": "large-whole-3-dia",
      "kind": "unit",
      "label": "large whole (3\" dia)"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "cherry",
      "kind": "unit",
      "label": "cherry"
    },
    {
      "gramsPerUnit": 62.0,
      "key": "italian-tomato",
      "kind": "unit",
      "label": "Italian tomato"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "slice-thin-small",
      "kind": "unit",
      "label": "slice, thin/small"
    },
    {
      "gramsPerUnit": 180.0,
      "key": "cup-chopped-or-sliced",
      "kind": "unit",
      "label": "cup, chopped or sliced"
    },
    {
      "gramsPerUnit": 91.0,
      "key": "small-whole-2-2-5-dia",
      "kind": "unit",
      "label": "small whole (2-2/5\" dia)"
    },
    {
      "gramsPerUnit": 27.0,
      "key": "slice-thick-large-1-2-thick",
      "kind": "unit",
      "label": "slice, thick/large (1/2\" thick)"
    },
    {
      "gramsPerUnit": 149.0,
      "key": "cup-cherry-tomatoes",
      "kind": "unit",
      "label": "cup cherry tomatoes"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "wedge-1-4-of-medium-tomato",
      "kind": "unit",
      "label": "wedge (1/4 of medium tomato)"
    }
  ],
  "name": "Tomatoes, red, ripe, raw, year round average",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 3.89,
    "energy_kcal": 18.0,
    "fat_g": 0.2,
    "fibre_g": 1.2,
    "folate_ug": 15.0,
    "iron_mg": 0.27,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 237.0,
    "protein_g": 0.88,
    "salt_g": 0.0125,
    "sat_fat_g": 0.028,
    "sodium_mg": 5.0,
    "sugar_g": 2.63,
    "vitamin_a_ug": 42.0,
    "vitamin_c_mg": 13.7,
    "vitamin_e_mg": 0.54,
    "vitamin_k_ug": 7.9
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170457",
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
