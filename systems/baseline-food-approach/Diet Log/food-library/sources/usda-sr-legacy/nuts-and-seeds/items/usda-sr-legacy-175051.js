/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "medium-bagel-3-1-2-to-4-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-175051",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "medium-bagel-3-1-2-to-4-dia",
      "kind": "unit",
      "label": "medium bagel (3-1/2\" to 4\" dia)"
    },
    {
      "gramsPerUnit": 131.0,
      "key": "large-bagel-4-1-2-dia",
      "kind": "unit",
      "label": "large bagel (4-1/2\" dia)"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "mini-bagel-2-1-2-dia",
      "kind": "unit",
      "label": "mini bagel (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "small-bagel-3-dia",
      "kind": "unit",
      "label": "small bagel (3\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bagels, plain, unenriched, without calcium propionate(includes onion, poppy, sesame)",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 53.4,
    "energy_kcal": 1150.0,
    "fat_g": 1.6,
    "fibre_g": 2.3,
    "folate_ug": 22.0,
    "iron_mg": 1.36,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 96.0,
    "potassium_mg": 101.0,
    "protein_g": 10.5,
    "salt_g": 1.335,
    "sat_fat_g": 0.22,
    "sodium_mg": 534.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "175051",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
