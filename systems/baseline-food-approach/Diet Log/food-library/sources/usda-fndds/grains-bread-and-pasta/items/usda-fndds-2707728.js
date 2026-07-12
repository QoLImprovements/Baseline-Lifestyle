/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Grains, Bread & Pasta",
  "defaultMeasure": "1-individual-loaf",
  "description": "Yeast breads",
  "id": "usda-fndds-2707728",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 82.0,
      "key": "1-individual-loaf",
      "kind": "unit",
      "label": "1 individual loaf"
    },
    {
      "gramsPerUnit": 152.0,
      "key": "1-mini-baguette-about-9-long",
      "kind": "unit",
      "label": "1 mini baguette (about 9\" long)"
    },
    {
      "gramsPerUnit": 324.0,
      "key": "1-baguette-about-22-long",
      "kind": "unit",
      "label": "1 baguette (about 22\" long)"
    },
    {
      "gramsPerUnit": 10.0,
      "key": "1-slice-snack-size",
      "kind": "unit",
      "label": "1 slice, snack-size"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-slice-vienna-bread",
      "kind": "unit",
      "label": "1 slice, Vienna bread"
    },
    {
      "gramsPerUnit": 3.7,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 470.0,
      "key": "1-loaf-14-long",
      "kind": "unit",
      "label": "1 loaf (14\" long)"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "1-large-or-thick-slice",
      "kind": "unit",
      "label": "1 large or thick slice"
    },
    {
      "gramsPerUnit": 45.0,
      "key": "1-cup-crumbs",
      "kind": "unit",
      "label": "1 cup, crumbs"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "1-small-or-thin-very-thin-slice",
      "kind": "unit",
      "label": "1 small or thin/very thin slice"
    }
  ],
  "name": "Bread, French or Vienna, whole wheat",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 49.1,
    "energy_kcal": 239.0,
    "fat_g": 1.04,
    "fibre_g": 4.2,
    "folate_ug": 96.0,
    "iron_mg": 0.75,
    "magnesium_mg": 52.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 159.0,
    "potassium_mg": 163.0,
    "protein_g": 8.33,
    "salt_g": 0.9375,
    "sat_fat_g": 0.0,
    "sodium_mg": 375.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.3,
    "vitamin_k_ug": 0.7
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707728",
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
