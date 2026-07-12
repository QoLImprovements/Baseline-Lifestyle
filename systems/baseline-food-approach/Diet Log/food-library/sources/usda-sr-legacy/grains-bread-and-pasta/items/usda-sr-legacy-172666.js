/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "medium-bagel-3-1-2-to-4-dia",
  "description": "Baked Products",
  "id": "usda-sr-legacy-172666",
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
      "gramsPerUnit": 69.0,
      "key": "small-bagel-3-dia",
      "kind": "unit",
      "label": "small bagel (3\" dia)"
    },
    {
      "gramsPerUnit": 26.0,
      "key": "mini-bagel-2-1-2-dia",
      "kind": "unit",
      "label": "mini bagel (2-1/2\" dia)"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "oz",
      "kind": "unit",
      "label": "oz"
    }
  ],
  "name": "Bagels, oat bran",
  "nutritionPerBasis": {
    "calcium_mg": 12.0,
    "carbs_g": 53.3,
    "energy_kcal": 1070.0,
    "fat_g": 1.2,
    "fibre_g": 3.6,
    "folate_ug": 98.0,
    "iron_mg": 3.08,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 110.0,
    "potassium_mg": 115.0,
    "protein_g": 10.7,
    "salt_g": 1.475,
    "sat_fat_g": 0.191,
    "sodium_mg": 590.0,
    "sugar_g": 1.63,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172666",
  "state": "Unspecified",
  "subcategory": "Baked Products",
  "tags": [
    "baked-products",
    "grains-bread-and-pasta",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
