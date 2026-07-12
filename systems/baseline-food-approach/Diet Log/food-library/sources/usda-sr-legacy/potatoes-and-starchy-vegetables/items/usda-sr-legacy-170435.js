/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "potato-large-3-to-4-1-4-dia",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170435",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 299.0,
      "key": "potato-large-3-to-4-1-4-dia",
      "kind": "unit",
      "label": "potato large (3\" to 4-1/4\" dia."
    },
    {
      "gramsPerUnit": 173.0,
      "key": "potato-medium-2-1-4-to-3-1-4-dia",
      "kind": "unit",
      "label": "potato medium (2-1/4\" to 3-1/4\" dia.)"
    },
    {
      "gramsPerUnit": 138.0,
      "key": "potato-small-1-3-4-to-2-1-2-dia",
      "kind": "unit",
      "label": "potato small (1-3/4\" to 2-1/2\" dia.)"
    }
  ],
  "name": "Potatoes, red, flesh and skin, baked",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 19.6,
    "energy_kcal": 87.0,
    "fat_g": 0.15,
    "fibre_g": 1.8,
    "folate_ug": 27.0,
    "iron_mg": 0.7,
    "magnesium_mg": 28.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 72.0,
    "potassium_mg": 545.0,
    "protein_g": 2.3,
    "salt_g": 0.03,
    "sat_fat_g": 0.04,
    "sodium_mg": 12.0,
    "sugar_g": 1.43,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 12.6,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170435",
  "state": "Baked",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "baked",
    "potatoes-and-starchy-vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
