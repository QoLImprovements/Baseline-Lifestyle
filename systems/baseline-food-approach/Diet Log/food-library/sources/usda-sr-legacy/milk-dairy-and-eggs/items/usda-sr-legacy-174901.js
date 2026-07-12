/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "small-bagel-3-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-174901",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 69.0,
      "key": "small-bagel-3-dia",
      "kind": "unit",
      "label": "small bagel (3\" dia)"
    },
    {
      "gramsPerUnit": 105.0,
      "key": "medium-bagel-3-1-2-to-4-dia",
      "kind": "unit",
      "label": "medium bagel (3-1/2\" to 4\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
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
    }
  ],
  "name": "Bagels, egg",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 53.0,
    "energy_kcal": 1160.0,
    "fat_g": 2.1,
    "fibre_g": 2.3,
    "folate_ug": 88.0,
    "iron_mg": 3.98,
    "magnesium_mg": 25.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 84.0,
    "potassium_mg": 68.0,
    "protein_g": 10.6,
    "salt_g": 1.2625,
    "sat_fat_g": 0.421,
    "sodium_mg": 505.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 0.6,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174901",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
