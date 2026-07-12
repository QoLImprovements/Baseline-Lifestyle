/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "quantity-not-specified",
  "description": "Sausages",
  "id": "usda-fndds-2706199",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-slice-4-1-8-dia-x-1-8-thick-10-per-8-oz-package",
      "kind": "unit",
      "label": "1 slice (4-1/8\" dia x 1/8\" thick) (10 per 8 oz package)"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 18.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "1-slice-nfs",
      "kind": "unit",
      "label": "1 slice, NFS"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "1-slice-2-7-8-dia-x-1-16-thick",
      "kind": "unit",
      "label": "1 slice (2-7/8\" dia x 1/16\" thick)"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-slice-4-3-8-dia-x-1-10-thick-1-oz",
      "kind": "unit",
      "label": "1 slice (4-3/8\" dia x 1/10\" thick) (1 oz)"
    }
  ],
  "name": "Thuringer",
  "nutritionPerBasis": {
    "calcium_mg": 9.0,
    "carbs_g": 3.33,
    "energy_kcal": 362.0,
    "fat_g": 30.4,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 2.04,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 111.0,
    "potassium_mg": 260.0,
    "protein_g": 17.4,
    "salt_g": 3.25,
    "sat_fat_g": 11.5,
    "sodium_mg": 1300.0,
    "sugar_g": 0.85,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 16.6,
    "vitamin_e_mg": 0.22,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2706199",
  "state": "Unspecified",
  "subcategory": "Sausages",
  "tags": [
    "other-foods",
    "sausages",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
