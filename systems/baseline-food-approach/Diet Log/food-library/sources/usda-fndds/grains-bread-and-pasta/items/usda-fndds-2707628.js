/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-small-slice",
  "description": "Yeast breads",
  "id": "usda-fndds-2707628",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "1-small-slice",
      "kind": "unit",
      "label": "1 small slice"
    },
    {
      "gramsPerUnit": 176.0,
      "key": "1-mini-baguette-about-9-long",
      "kind": "unit",
      "label": "1 mini baguette (about 9\" long)"
    },
    {
      "gramsPerUnit": 111.0,
      "key": "1-large-slice",
      "kind": "unit",
      "label": "1 large slice"
    },
    {
      "gramsPerUnit": 40.0,
      "key": "1-piece-slice-texas-toast",
      "kind": "unit",
      "label": "1 piece/slice Texas Toast"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 74.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
    },
    {
      "gramsPerUnit": 376.0,
      "key": "1-baguette-about-22-long",
      "kind": "unit",
      "label": "1 baguette (about 22\" long)"
    }
  ],
  "name": "Garlic bread, from frozen",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 41.7,
    "energy_kcal": 350.0,
    "fat_g": 16.6,
    "fibre_g": 2.5,
    "folate_ug": 167.0,
    "iron_mg": 3.05,
    "magnesium_mg": 23.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 87.0,
    "potassium_mg": 103.0,
    "protein_g": 8.36,
    "salt_g": 1.36,
    "sat_fat_g": 5.28,
    "sodium_mg": 544.0,
    "sugar_g": 3.69,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 29.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707628",
  "state": "Frozen",
  "subcategory": "Yeast breads",
  "tags": [
    "frozen",
    "grains-bread-and-pasta",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
