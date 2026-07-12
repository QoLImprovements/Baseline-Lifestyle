/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-small-slice",
  "description": "Yeast breads",
  "id": "usda-fndds-2707631",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 44.0,
      "key": "1-small-slice",
      "kind": "unit",
      "label": "1 small slice"
    },
    {
      "gramsPerUnit": 132.0,
      "key": "1-large-slice",
      "kind": "unit",
      "label": "1 large slice"
    },
    {
      "gramsPerUnit": 48.0,
      "key": "1-piece-slice-texas-toast",
      "kind": "unit",
      "label": "1 piece/slice Texas Toast"
    },
    {
      "gramsPerUnit": 209.0,
      "key": "1-mini-baguette-about-9-long",
      "kind": "unit",
      "label": "1 mini baguette (about 9\" long)"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    },
    {
      "gramsPerUnit": 88.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 447.0,
      "key": "1-baguette-about-22-long",
      "kind": "unit",
      "label": "1 baguette (about 22\" long)"
    }
  ],
  "name": "Garlic bread, with melted cheese, from fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 160.0,
    "carbs_g": 34.2,
    "energy_kcal": 339.0,
    "fat_g": 17.3,
    "fibre_g": 2.0,
    "folate_ug": 139.0,
    "iron_mg": 2.48,
    "magnesium_mg": 24.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 176.0,
    "potassium_mg": 105.0,
    "protein_g": 11.4,
    "salt_g": 1.59,
    "sat_fat_g": 6.55,
    "sodium_mg": 636.0,
    "sugar_g": 3.31,
    "vitamin_a_ug": 51.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.04,
    "vitamin_k_ug": 23.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707631",
  "state": "Unspecified",
  "subcategory": "Yeast breads",
  "tags": [
    "milk-dairy-and-eggs",
    "unspecified",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
