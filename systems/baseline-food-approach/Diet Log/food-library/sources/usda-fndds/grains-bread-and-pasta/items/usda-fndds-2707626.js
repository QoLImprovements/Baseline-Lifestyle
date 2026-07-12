/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-medium-slice",
  "description": "Yeast breads",
  "id": "usda-fndds-2707626",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "1-medium-slice",
      "kind": "unit",
      "label": "1 medium slice"
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
      "gramsPerUnit": 393.0,
      "key": "1-baguette-about-22-long",
      "kind": "unit",
      "label": "1 baguette (about 22\" long)"
    },
    {
      "gramsPerUnit": 41.0,
      "key": "1-piece-slice-texas-toast",
      "kind": "unit",
      "label": "1 piece/slice Texas Toast"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "1-small-slice",
      "kind": "unit",
      "label": "1 small slice"
    },
    {
      "gramsPerUnit": 79.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Garlic bread, NFS",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 41.6,
    "energy_kcal": 349.0,
    "fat_g": 16.6,
    "fibre_g": 2.5,
    "folate_ug": 167.0,
    "iron_mg": 3.04,
    "magnesium_mg": 23.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 87.0,
    "potassium_mg": 103.0,
    "protein_g": 8.34,
    "salt_g": 1.55,
    "sat_fat_g": 5.27,
    "sodium_mg": 620.0,
    "sugar_g": 3.68,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 29.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707626",
  "state": "Unspecified",
  "subcategory": "Yeast breads",
  "tags": [
    "grains-bread-and-pasta",
    "unspecified",
    "yeast-breads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
