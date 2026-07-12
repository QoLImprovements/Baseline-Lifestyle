/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-large-slice",
  "description": "Yeast breads",
  "id": "usda-fndds-2707632",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 44.0,
      "key": "1-small-slice",
      "kind": "unit",
      "label": "1 small slice"
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
    },
    {
      "gramsPerUnit": 209.0,
      "key": "1-mini-baguette-about-9-long",
      "kind": "unit",
      "label": "1 mini baguette (about 9\" long)"
    }
  ],
  "name": "Garlic bread, with melted cheese, from frozen",
  "nutritionPerBasis": {
    "calcium_mg": 114.0,
    "carbs_g": 36.9,
    "energy_kcal": 343.0,
    "fat_g": 17.1,
    "fibre_g": 2.2,
    "folate_ug": 149.0,
    "iron_mg": 2.68,
    "magnesium_mg": 24.0,
    "omega3_g": 0.007,
    "phosphorus_mg": 145.0,
    "potassium_mg": 105.0,
    "protein_g": 10.4,
    "salt_g": 1.41,
    "sat_fat_g": 6.12,
    "sodium_mg": 564.0,
    "sugar_g": 3.44,
    "vitamin_a_ug": 38.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.09,
    "vitamin_k_ug": 25.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707632",
  "state": "Frozen",
  "subcategory": "Yeast breads",
  "tags": [
    "frozen",
    "milk-dairy-and-eggs",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
