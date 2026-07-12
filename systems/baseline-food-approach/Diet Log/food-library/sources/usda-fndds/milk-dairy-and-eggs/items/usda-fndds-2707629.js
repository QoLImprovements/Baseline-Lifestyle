/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Yeast breads",
  "id": "usda-fndds-2707629",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 393.0,
      "key": "1-baguette-about-22-long",
      "kind": "unit",
      "label": "1 baguette (about 22\" long)"
    },
    {
      "gramsPerUnit": 185.0,
      "key": "1-mini-baguette-about-9-long",
      "kind": "unit",
      "label": "1 mini baguette (about 9\" long)"
    },
    {
      "gramsPerUnit": 118.0,
      "key": "1-large-slice",
      "kind": "unit",
      "label": "1 large slice"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "1-small-slice",
      "kind": "unit",
      "label": "1 small slice"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "1-piece-slice-texas-toast",
      "kind": "unit",
      "label": "1 piece/slice Texas Toast"
    }
  ],
  "name": "Garlic bread, with parmesan cheese, from fast food / restaurant",
  "nutritionPerBasis": {
    "calcium_mg": 44.0,
    "carbs_g": 41.1,
    "energy_kcal": 351.0,
    "fat_g": 16.8,
    "fibre_g": 2.4,
    "folate_ug": 164.0,
    "iron_mg": 2.99,
    "magnesium_mg": 23.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 98.0,
    "potassium_mg": 104.0,
    "protein_g": 8.76,
    "salt_g": 1.605,
    "sat_fat_g": 5.47,
    "sodium_mg": 642.0,
    "sugar_g": 3.61,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.16,
    "vitamin_k_ug": 28.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707629",
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
