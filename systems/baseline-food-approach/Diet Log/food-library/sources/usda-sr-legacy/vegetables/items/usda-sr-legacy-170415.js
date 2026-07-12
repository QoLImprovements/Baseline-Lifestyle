/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "10-rings-medium-2-3-dia",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170415",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "10-rings-medium-2-3-dia",
      "kind": "unit",
      "label": "10 rings, medium (2-3\" dia)"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "10-rings-small-1-2-dia",
      "kind": "unit",
      "label": "10 rings, small (1-2\" dia)"
    },
    {
      "gramsPerUnit": 71.0,
      "key": "10-rings-large-3-4-dia",
      "kind": "unit",
      "label": "10 rings, large (3-4\" dia)"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Onion rings, breaded, par fried, frozen, prepared, heated in oven",
  "nutritionPerBasis": {
    "calcium_mg": 31.0,
    "carbs_g": 33.8,
    "energy_kcal": 276.0,
    "fat_g": 14.3,
    "fibre_g": 2.2,
    "folate_ug": 33.0,
    "iron_mg": 1.25,
    "magnesium_mg": 17.0,
    "omega3_g": 0.789,
    "phosphorus_mg": 71.0,
    "potassium_mg": 123.0,
    "protein_g": 4.14,
    "salt_g": 0.925,
    "sat_fat_g": 2.14,
    "sodium_mg": 370.0,
    "sugar_g": 5.1,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 0.46,
    "vitamin_k_ug": 34.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170415",
  "state": "Fried",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "fried",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
