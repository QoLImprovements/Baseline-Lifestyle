/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-quarter-lb-patty",
  "description": "Ground beef",
  "id": "usda-fndds-2705855",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-quarter-lb-patty",
      "kind": "unit",
      "label": "1 quarter lb patty"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-oz-yields",
      "kind": "unit",
      "label": "1 oz yields"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "1-small-patty",
      "kind": "unit",
      "label": "1 small patty"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-medium-patty",
      "kind": "unit",
      "label": "1 medium patty"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-miniature-patty",
      "kind": "unit",
      "label": "1 miniature patty"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-patty-nfs",
      "kind": "unit",
      "label": "1 patty, NFS"
    },
    {
      "gramsPerUnit": 120.0,
      "key": "1-large-patty",
      "kind": "unit",
      "label": "1 large patty"
    }
  ],
  "name": "Beef, ground, patty",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 0.0,
    "energy_kcal": 272.0,
    "fat_g": 18.2,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 2.41,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 190.0,
    "potassium_mg": 294.0,
    "protein_g": 25.4,
    "salt_g": 0.9575,
    "sat_fat_g": 6.95,
    "sodium_mg": 383.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 3.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705855",
  "state": "Unspecified",
  "subcategory": "Ground beef",
  "tags": [
    "ground-beef",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
